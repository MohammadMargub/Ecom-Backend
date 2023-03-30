const users = require('../model/usersModel');


const addUsers = async (req, res) => {
    const { email, name, password } = req.body;
    await users.create({ email, name, password }).then(data => {
        res.send(data).status(200);
    }).catch(error => {
        res.json(error).status(500)
    })
}

module.exports = addUsers 