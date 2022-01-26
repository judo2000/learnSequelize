const router = require('express').Router();
const bookRoutes = require('./bookRoutes');
const userRoutes = require('./userRoutes');

// Ever route inside of this index.js alreay has /api prepended
// we declare.

// this will prepend /api/book to ever route declared
// below this comment

router.use('/books', bookRoutes);

// this will prepend /api/user to ever route below this comment
router.use('/users', userRoutes);

module.exports = router;