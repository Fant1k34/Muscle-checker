const fs = require('fs');
const { startServer } = require('./getServer');
const { config } = require('../../config/local');
const { serverLogger } = require('./utils');

const {
    protocol,
    serverName,
    port,
    bundle: { bundleUrl },
    pages: { pagesPath },
} = config.server;

const link = `${protocol}://${serverName}:${port}${bundleUrl}`;

const onError = (error) => {
    console.error(error);
};

const writeContentToFile = (file, content) => {
    fs.writeFile(file, content, 'utf8', (err) => {
        if (err) return onError(err);
    });
};

fs.readFile(pagesPath, 'utf8', (err, data) => {
    if (err) return onError(err);

    const htmlWithCorrectedScriptLink = data.replace(
        /{TO_REPLACE_WITH_LINK}/g,
        link
    );
    writeContentToFile(pagesPath, htmlWithCorrectedScriptLink);

    startServer(config, serverLogger);
});
