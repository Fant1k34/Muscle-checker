startServer = (port, { bundleUrl, bundlePath }, { pagesUrl, pagesPath }, { imageUrl, imagePath } ) => {
    const app = require('express')();

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
