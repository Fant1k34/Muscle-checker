/**
 * Check Email Api
 * @param apiConfig
 * @returns {(function(*, *): Promise<*>)|*}
 */

const { RegisterComments } = require('../constants');

const checkEmailApi = (apiConfig) => async (req, res) => {
    const { name, email } = req.body;
    const { fetcher } = require('../utils');

    console.log(JSON.stringify(req.body));

    if (name && email) {
        const {
            serviceProtocol,
            serviceServerName,
            servicePort,
            serviceUrl,
            serviceMethod,
        } = apiConfig.services.register.checkEmail;
        const serviceLink = `${serviceProtocol}://${serviceServerName}:${servicePort}${serviceUrl}`;

        const { result, comment } = await fetcher(
            serviceLink,
            {
                method: serviceMethod,
                body: { name, email },
            },
            () => ({
                result: false,
                comment: RegisterComments.ERROR,
            })
        );

        return res.send({ result, comment });
    }

    return res.send({
        result: false,
        comment: RegisterComments.ERROR,
    });
};

module.exports = { checkEmailApi };
