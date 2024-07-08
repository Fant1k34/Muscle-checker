/**
 * Check Email Api
 * @param apiConfig
 * @returns {(function(*, *): Promise<*>)|*}
 */

const { RegisterComments } = require('../constants');
const { fetcher } = require('../utils');

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

const registerApi = (apiConfig) => async (req, res) => {
    const { name, email, password, code } = req.body;
    const { fetcher } = require('../utils');

    if (code && email) {
        const {
            serviceProtocol,
            serviceServerName,
            servicePort,
            serviceUrl,
            serviceMethod,
        } = apiConfig.services.register.register.verifyEmail;
        const serviceLink = `${serviceProtocol}://${serviceServerName}:${servicePort}${serviceUrl}`;

        const { result: verificationResult, comment: verificationComment } =
            await fetcher(
                serviceLink,
                {
                    method: serviceMethod,
                    body: { code, email },
                },
                () => ({
                    result: false,
                    comment: RegisterComments.ERROR,
                })
            );

        if (verificationResult && name && email && password) {
            const {
                serviceProtocol,
                serviceServerName,
                servicePort,
                serviceUrl,
                serviceMethod,
            } = apiConfig.services.register.register.register;
            const serviceLink = `${serviceProtocol}://${serviceServerName}:${servicePort}${serviceUrl}`;

            const { result: registrationResult, comment: registrationComment } =
                await fetcher(
                    serviceLink,
                    {
                        method: serviceMethod,
                        body: { code, email },
                    },
                    () => ({
                        result: false,
                        comment: RegisterComments.ERROR,
                    })
                );

            return res.send({
                result: registrationResult,
                comment: registrationComment,
            });
        }

        return res.send({ result: false, comment: verificationComment });
    }
};

module.exports = { checkEmailApi, registerApi };
