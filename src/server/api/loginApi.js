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
                maxAge: apiConfig.services.login.maxLoginTimeMillisec,
                httpOnly: true,
                secure: true,
            });

            return res.redirect(apiConfig.services.login.redirectToAfterLogin);
        }
    }

    return res.send(false);
};

module.exports = { loginApi };
