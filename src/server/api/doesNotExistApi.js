const doesNotExistApi = (doesNotExistConfig) => (req, res) => {
    res.send('Этой апи не существует');
};

module.exports = { doesNotExistApi };
