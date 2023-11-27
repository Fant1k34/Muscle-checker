startServer = (config, serverLogger) => {
    const app = require('express')();
    const { getApiByUrl } = require("./api");

    const {
        server: {
            port,
            bundle: { bundleUrl, bundlePath },
            pages: { pagesUrl, pagesPath },
            static: {
                images: { imageUrl, imagePath },
            }
        },
        api: { apiUrl }
    } = config

    // bundle.js
    app.get(bundleUrl, (req, res) => {
        serverLogger(req.originalUrl)

        res.sendFile(bundlePath, { root: "." });
    });

    // static (images)
    app.get(`${pagesUrl}${imageUrl}*`, (req, res) => {
        serverLogger(req.originalUrl)

        const imageId = req.originalUrl.split('/').slice(-1);
        res.sendFile(`${imagePath}${imageId}`, { root: "." });
    });

    // api
    app.all(`${apiUrl}*`, (req, res) => {
        serverLogger(req.originalUrl)

        const urlParts = req.originalUrl.split('/')
        const urlMethod = req.method
        const currentApiInd = urlParts.findIndex((urlPart) => `/${urlPart}` === apiUrl) + 1

        if (urlParts.length === currentApiInd || currentApiInd === 0) {
            res.send("Ой, api не существует");
        }

        const currentApiUrl = urlParts[currentApiInd]

        return getApiByUrl(config, currentApiUrl, urlMethod)(req, res)
    })

    // html-pages
    app.get(`${pagesUrl}*`, (req, res) => {
        serverLogger(req.originalUrl)

        res.sendFile(pagesPath, { root: "." });
    });

    // other
    app.get(`*`, (req, res) => {
        serverLogger(req.originalUrl)

        res.send("Ой, ничего не найдено");
    });

    app.listen(port);
};

exports.startServer = startServer;
