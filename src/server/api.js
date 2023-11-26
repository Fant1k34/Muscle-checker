const {loginApi} = require("./api/loginApi");
const {doesNotExistApi} = require("./api/doesNotExistApi");

const getApiListByConfig = (config) => [
    {
        name: config.api.services.login.name,
        url: config.api.services.login.frontUrl,
        service: loginApi(config.api.services.login)
    },
    {
        name: config.api.services.doesNotExist.name,
        service: doesNotExistApi(config.api.services.login)
    }
]

const getApiByUrl = (config, apiUrl) => (
    getApiListByConfig(config).find((api) => api.url === `/${apiUrl}`) ||
    getApiListByConfig(config)[-1]
).service

module.exports = {getApiByUrl}
