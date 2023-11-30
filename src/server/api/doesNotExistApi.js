const doesNotExistApi = (doesNotExistConfig) => (req, res) => {
    res.sendStatus(404);
};

module.exports = { doesNotExistApi };
