const fs = require('fs');
const { startServer } = require('./getServer');
const { config } = require('../../config/local');

const {
    protocol,
    serverName,
    port,
    bundle: { bundleUrl },
    pages: { pagesPath },
} = config.server

const link = `${protocol}://${serverName}:${port}${bundleUrl}`;

const writeContentToFile = (file, content) => {
    fs.writeFile(file, content, 'utf8', (err) => {
        if (err) return console.log(err);
    })
}

let htmlContentWithCorrectedScriptLink;
fs.readFile(pagesPath, 'utf8', (err, data) => {
    if (err) return console.log(err);

    htmlContentWithCorrectedScriptLink = data.replace(/{TO_REPLACE_WITH_LINK}/g, link);
    writeContentToFile(pagesPath, htmlContentWithCorrectedScriptLink);

    startServer(config);
});
