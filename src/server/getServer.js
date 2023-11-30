const { verifyToken } = require('./api/jwt');

const checkAccess = (cookies, currentUrl, allowedUrls) => {
    // Check if user goes to allowed URL
    if (
        allowedUrls.includes(currentUrl) ||
        (cookies && cookies['token'] && verifyToken(cookies['token']))
    ) {
        return true;
    }

    return false;
};

const startServer = (config, serverLogger) => {
    const express = require('express');
    const cookieParser = require('cookie-parser');

    const app = express();
    const { getApiByUrl } = require('./api');

    const {
        server: {
            port,
            bundle: { bundleUrl, bundlePath },
            pages: { pagesUrl, pagesPath, loginPageUrl },
            static: {
                images: { imageUrl, imagePath },
            },
        },
        api: { apiUrl },
    } = config;

    app.use(express.json());
    app.use(cookieParser());

    // bundle.js
    app.get(bundleUrl, (req, res) => {
        serverLogger('getBundle', req.originalUrl);

        res.sendFile(bundlePath, { root: '.' });
    });

    // static (images)
    app.get(`${pagesUrl}${imageUrl}*`, (req, res) => {
        serverLogger('getImages', req.originalUrl);
        if (!checkAccess(req.cookies, req.originalUrl, [])) {
            return res.sendStatus(403);
        }

        const imageId = req.originalUrl.split('/').slice(-1);
        res.sendFile(`${imagePath}${imageId}`, { root: '.' });
    });

    // api
    app.all(`${apiUrl}*`, (req, res) => {
        serverLogger('useApi', req.originalUrl);
        if (
            !checkAccess(req.cookies, req.originalUrl, [
                config.api.apiUrl + config.api.services.login.frontUrl,
            ])
        ) {
            return res.sendStatus(403);
        }

        const urlParts = req.originalUrl.split('/');
        const urlMethod = req.method;
        const currentApiInd =
            urlParts.findIndex((urlPart) => `/${urlPart}` === apiUrl) + 1;

        if (urlParts.length === currentApiInd || currentApiInd === 0) {
            res.sendStatus(404);
        }

        const currentApiUrl = urlParts[currentApiInd];

        return getApiByUrl(config, currentApiUrl, urlMethod)(req, res);
    });

    // html-pages
    app.get(`${pagesUrl}*`, (req, res) => {
        serverLogger('getHTML', req.originalUrl);
        if (!checkAccess(req.cookies, req.originalUrl, [loginPageUrl])) {
            return res.redirect(loginPageUrl);
        }

        res.sendFile(pagesPath, { root: '.' });
    });

    // other
    app.get(`*`, (req, res) => {
        serverLogger('otherQuery', req.originalUrl);
        if (!checkAccess(req.cookies, req.originalUrl, [])) {
            return res.sendStatus(403);
        }

        res.sendStatus(404);
    });

    app.listen(port);
};

exports.startServer = startServer;
