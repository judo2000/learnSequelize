const router = require('express').Router();
const bookRoutes = require('./bookRoutes');

// Ever route inside of this index.js alreay has /api prepended
// we declare.

// this will prepend /api/book to ever route declared
// below this comment

router.use('/books', bookRoutes);

module.exports = router;