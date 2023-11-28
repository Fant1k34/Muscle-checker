const loginApi = (loginConfig) =>
    async (req, res) => {
        console.log(req.body)
        const {login, password} = req.body

        if (login && password) {
            // TODO: Add body to the fetch, modify to POST method
            const checkCredentialsResult = await fetch(loginConfig.checkCredentialsLink)
                .then((response) => response.json())
                .catch((_) => false)

            console.log(checkCredentialsResult)

            if (checkCredentialsResult) {
                // TODO: Add body to the fetch, modify to POST method
                const token = await fetch(loginConfig.getTokenLink)
                    .then((response) => response.text())
                    .catch((_) => false)

                console.log(token)

                if (token) {
                    // TODO: Modify cookies: Expires in 15 minutes, HttpsOnly, Secure...
                    res.cookie("token", token)

                    // TODO: Find out, how does redirect works (if it definetly redirect or just return another html)
                    return res.redirect(loginConfig.redirectAfterLogin)
                }
            }
        }

        return res.send(false)
    }

module.exports = { loginApi }
