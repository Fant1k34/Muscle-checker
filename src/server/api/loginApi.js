const loginApi = (loginConfig) => async (req, res) => {
    const { login, password } = req.body;
    const { fetcher } = require('../utils');

    if (login && password) {
        const { exists: isUserExist, userId } = await fetcher(
            loginConfig.checkCredentialsLink,
            {
                method: 'POST',
                body: { login, password },
            }
        ).catch((_) => ({ exists: false, userId: null }));

        if (isUserExist && userId) {
            const { success, token } = await fetcher(loginConfig.getTokenLink, {
                method: 'POST',
                body: JSON.stringify({ userId }),
            }).catch((_) => ({ success: false, token: null }));

            if (success && token) {
                res.cookie('token', token, {
                    maxAge: loginConfig.maxLoginTimeMillisec,
                    httpOnly: true,
                    secure: true,
                });

                return res.redirect(loginConfig.redirectAfterLogin);
            }
        }
    }

    return res.send(false);
};

module.exports = { loginApi };
