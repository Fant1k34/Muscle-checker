const { loginApi } = require('./api/loginApi');
const { doesNotExistApi } = require('./api/doesNotExistApi');
const { HTTPMethods } = require('./constants');

/**
 * getApiListByConfig returns list of API
 */
const getApiListByConfig = (config) => [
    {
        name: config.api.services.login.name,
        url: config.api.services.login.frontUrl,
        method: HTTPMethods.POST,
        service: loginApi(config.api),
    },
    {
        name: config.api.services.doesNotExist.name,
        service: doesNotExistApi(config.api.services.login),
    },
];

/**
 * getApiByUrl returns necessary API by url and method or doesNotExistApi
 * @param config config object from ./config/local.js as param
 * @param apiUrl string url
 * @param urlMethod httpMethod for this url (get, post ...)
 */
const getApiByUrl = (config, apiUrl, urlMethod) => {
    const apiList = getApiListByConfig(config);

    return (
        apiList.find(
            (api) => api.url === `/${apiUrl}` && api.method === urlMethod
        )?.service || doesNotExistApi(config.api.services.login)
    );
};

module.exports = { getApiByUrl };
