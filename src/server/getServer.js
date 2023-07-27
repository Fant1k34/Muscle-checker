startServer = (port, pagesUrl, bundleUrl) => {
    const app = require('express')();
    const path = require('path');

    app.get(bundleUrl, (req, res) => {
        res.sendFile(path.join(__dirname, '../../dist/bundle.js'));
    });

    app.get(`${pagesUrl}static/images/*`, (req, res) => {
        const imageId = req.originalUrl.split('/').slice(-1);

        res.sendFile(
            path.join(__dirname, `../../dist/static/images/${imageId}`)
        );
    });

    app.get(`${pagesUrl}*`, (req, res) => {
        res.sendFile(path.join(__dirname, '../../dist/index.html'));
    });

    app.listen(port);
};

exports.startServer = startServer;
