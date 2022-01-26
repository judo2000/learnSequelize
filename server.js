const express = require('express');
const sequelize = require('./config');
const routes = require('./routes');
const app = express();
const PORT = process.env.PORT || 3001;

// body parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// if you do not include a string at the beginning '/' it will pass
// a / by default;
app.use(routes)
/*
  We will build our folders and api in such a way
  that our folder structor that will match our endpoints

  This is accomplished by using routing middleware
*/

// force the database to drop/recreate the tables whenver
// we start or restart our server.
// NEVER DO THIS IN PRODUCTION 

//{ force: true }


// Connect to the database prior to starting our server
sequelize.sync().then(() => {
  app.listen(PORT, () => console.log(`Server listening on port: ${PORT}`));
});