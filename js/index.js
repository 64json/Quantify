const RSVP = require('rsvp');
const DOM = require('./dom');
const Server = require('./server');
const app = require('./app');
const App = require('./app/constructor');
const {extend} = $;

// set global promise error handler
RSVP.on('error', function (reason) {
  console.assert(false, reason);
});

extend(true, window, {
  main: DOM.setupMain
});