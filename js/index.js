const RSVP = require('rsvp');
const DOM = require('./dom');
const Converter = require('./Converter');
const app = require('./app');
const App = require('./app/constructor');
const Unit = require('./unit');
const {extend} = $;

// set global promise error handler
RSVP.on('error', function (reason) {
  console.assert(false, reason);
});

extend(true, app, new App());

Unit.register();

extend(true, window, {
  main: DOM.setupMain,
  Converter
});