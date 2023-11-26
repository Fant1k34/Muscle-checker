startServer = (config) => {
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
        console.log(req.originalUrl)

        res.sendFile(bundlePath, { root: "." });
    });

    // static (images)
    app.get(`${pagesUrl}${imageUrl}*`, (req, res) => {
        console.log(req.originalUrl)
        const imageId = req.originalUrl.split('/').slice(-1);

        res.sendFile(`${imagePath}${imageId}`, { root: "." });
    });

    // api
    app.get(`${apiUrl}*`, (req, res) => {
        const urlParts = req.originalUrl.split('/')
        const currentApiInd = urlParts.findIndex((urlPart) => `/${urlPart}` === apiUrl) + 1

        if (urlParts.length === currentApiInd || currentApiInd === 0) {
            res.send("Ой, api не существует");
        }

        const currentApiUrl = urlParts[currentApiInd]
        console.log(currentApiUrl)

        return getApiByUrl(config, currentApiUrl)(req, res)
    })

    // html-pages
    app.get(`${pagesUrl}*`, (req, res) => {
        console.log(req.originalUrl)

        res.sendFile(pagesPath, { root: "." });
    });

    app.get(`*`, (req, res) => {
        console.log(req.originalUrl)

        res.send("Ой, ничего не найдено");
    });

    app.listen(port);
};

exports.startServer = startServer;
