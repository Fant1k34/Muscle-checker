const fetcher = async (url, options, onError) => {
    const httpOptions = {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        ...options,
    };
    httpOptions.body = JSON.stringify(options.body);

    serverLogger(
        `Request ${url}: ${httpOptions.method} with body ${JSON.stringify(
            httpOptions.body
        )}`
    );

    return fetch(url, httpOptions)
        .then(async (response) => {
            const responseJson = await response.json();
            serverLogger(`Response ${url}: ${JSON.stringify(responseJson)}`);

            return responseJson;
        })
        .catch(onError);
};

const serverLogger = (...messages) => {
    console.log(messages.join('\t'));
};

module.exports = { fetcher, serverLogger };
