const loginApi = (loginConfig) =>
    (req, res) => {
        const { login, password } = req.body
        res.send("bla bla bla")
    }


module.exports = { loginApi }
