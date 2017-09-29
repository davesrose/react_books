const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;

// Configure body parser for AJAX requests
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// Serve up static assets
app.use(express.static("client/build"));
// Add routes, both API and view
app.use(routes);

// Set up promises with mongoose
mongoose.Promise = global.Promise;
// Connect to the Mongo DB

if(process.env.NODE_ENV == 'production'){
  mongoose.connect('mongodb://heroku_mkmpv55c:auvt3hlid14hlfg7bqacad2v1h@ds013946.mlab.com:13946/heroku_mkmpv55c');
}
else{
  mongoose.connect('mongodb://localhost/news-scraper');
}
// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
