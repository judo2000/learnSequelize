const router = require('express').Router();
const User = require('../../../models/User');
// Create user   /api/users
router.post('/', async (req, res) => {
	const {
		username,
		email,
		password,
	} = req.body;
	if (!username || !email || !password) {
		return res.status(400).json({ error: 'You must provider username, password, and email'});
	}
	try {
		const newUser = await User.create({
			username,
			email,
			password
		});
		res.json(newUser);
	} catch (e) {
		console.log(e);
		res.json(e);
	}
});
// Get all users
router.get('/', async (req, res) => {
	try {
		const users = await User.findAll();
		res.json(users);
	} catch (e) {
		console.log(e);
		res.json(e);
	}
});

router.get('/:userId', async (req, res) => {
	try {
	  const user = await User.findByPk(req.params.userId);
	  res.json(user);
	} catch (error) {
	  res.json(error);
	}
  });

router.patch('/:userId', async (req, res) => {
	const {
		username,
		email,
		password,
	} = req.body;
	try {
		await User.update(
			{
				username,
				email,
				password
			},
			{
				where: {
					id: req.params.userId,
				}
			}
		);
		const updatedUser = await User.findByPk(req.params.userId);
		res.json(updatedUser);
	} catch (error) {
		res.json(error);
	}
});

router.delete('/:userId', async (req, res) => {
	try {
		const deletedUser = await User.findByPk(req.params.userId)
		await User.destroy({
			where: {
				id: req.params.userId,
			},
		});
		res.json(deletedUser);
	} catch (error) {
		res.json(error);
	}
});

module.exports = router;