const router = require('express').Router();
const User = require('../../../models/Book');


router.get('/', async (req, res) => {
    try {
        const users = await User.findAll();
        res.json(users);
    } catch (error) {
        console.log(error);
        res.json(error);
    }
});

router.post('/', async (req, res) => {
    const {
        username,
        email,
        password,
    } = req.body;

    if (!username || !email || !password) {
        return res.status(400).json({ error: "You must provide a valide username, password, and email" });
    }

    try {
        const newUser = await User.Create({
            username,
            email,
            password
        });
        res.json(newUser);
    } catch (error) {
        res.json(error);
    }
});

module.exports = router;