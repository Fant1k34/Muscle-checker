const loginApi = (loginConfig) =>
    (req, res) => {
        console.log(req.body)
        const { login, password } = req.body
        res.send(`${login}, ${password}`)
    }

module.exports = { loginApi }
