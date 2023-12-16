/**
 *
 * @param apiConfig
 * @returns {(function(*, *): Promise<*>)|*}
 */
const { LoginComments } = require('../constants');

const loginApi = (apiConfig) => async (req, res) => {
    const { login, password } = req.body;
    const { fetcher } = require('../utils');

    if (login && password) {
        const {
            serviceProtocol,
            serviceServerName,
            servicePort,
            serviceUrl,
            serviceMethod,
        } = apiConfig.services.login.checkCredentials;
        const serviceLink = `${serviceProtocol}://${serviceServerName}:${servicePort}${serviceUrl}`;

        // TODO: Стоит ли заменять await на обработку Promise.then() ?
        // Кажется, сейчас код блочит поток исполнения на ноде, что плохо
        const { exists: isUserExist, userId } = await fetcher(
            serviceLink,
            {
                method: serviceMethod,
                body: { login, password },
            },
            () => ({ exists: false, userId: null })
        );

        if (isUserExist && userId) {
            const { generateToken } = require('./jwt');
            const token = generateToken(apiConfig, userId);

            res.cookie('token', token, {
                // TODO: косяк? Время, возможно, надо сумировать с Date.now()
                maxAge: apiConfig.services.login.maxLoginTimeMillisec,
                httpOnly: true,
                secure: true,
            });

            return res.send({ result: true, comment: LoginComments.SUCCESS });
        }
    }

    return res.send({ result: false, comment: LoginComments.WRONG_PASSWORD });
};

module.exports = { loginApi };
