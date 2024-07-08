const { loginApi } = require('./api/loginApi');
const { checkEmailApi, registerApi } = require('./api/registerApi');
const { doesNotExistApi } = require('./api/doesNotExistApi');
const { HTTPMethods } = require('./constants');

/**
 * getApiListByConfig returns list of API
 */
const getApiListByConfig = (config) => [
    {
        name: 'Check Credentials',
        url: config.api.services.login.frontUrl,
        method: HTTPMethods.POST,
        service: loginApi(config.api),
    },
    {
        name: 'Check Email',
        url: config.api.services.register.checkEmail.frontUrl,
        method: HTTPMethods.POST,
        service: checkEmailApi(config.api),
    },
    {
        name: 'Register',
        url: config.api.services.register.register.frontUrl,
        method: HTTPMethods.POST,
        service: registerApi(config.api),
    },
    {
        name: config.api.services.doesNotExist.name,
        service: doesNotExistApi(config.api.services.login),
    },
];

/**
 * getApiByUrl returns necessary API (request handler) by url and method or doesNotExistApi
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
