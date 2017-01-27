var express = require('express');
var router = express.Router();

router.get('/', function (req, res) {
  
  res.render('index');

});


// Example routes - feel free to delete these

// Passing data into a page

router.get('/examples/template-data', function (req, res) {

  res.render('examples/template-data', { 'name' : 'Foo' });

});

// Branching

router.get('/examples/over-18', function (req, res) {

  // get the answer from the query string (eg. ?over18=false)
  var over18 = req.query.over18;

  if (over18 == "false"){

    // redirect to the relevant page
    res.redirect("/examples/under-18");

  } else {

    // if over18 is any other value (or is missing) render the page requested
    res.render('examples/over-18');

  }

});

// add your routes here
// Political Party

router.post('/examples/elements/party-name', function (req, res) {
  // Party name form submitted
  // Do something with the data to build up the application
  // Render the next part of the application process i.e. the party correspondence page
  res.render('examples/elements/party-correspondence');
});

router.post('/examples/elements/party-correspondence', function (req, res) {
  // Party correspondence form submitted
  // Do something with the data to build up the application
  // Render the next part of the application process i.e. the party leader page
  res.render('examples/elements/party-leader');
});

router.post('/examples/elements/party-leader', function (req, res) {
  // Party leader form submitted
  // Do something with the data to build up the application
  // Render the next part of the application process i.e. the party nominating officer page
  res.render('examples/elements/party-nominating-officer');
});

router.post('/examples/elements/party-nominating-officer', function (req, res) {
  // Party nominating officer form submitted
  // Do something with the data to build up the application
  // Render the next part of the application process i.e. the party treasurer page
  res.render('examples/elements/party-treasurer');
});

router.post('/examples/elements/party-treasurer', function (req, res) {
  // Party treasurer form submitted
  // Do something with the data to build up the application
  // Render the next part of the application process i.e. the party campaigns officer page
  res.render('examples/elements/party-campaigns-officer');
});

router.post('/examples/elements/party-campaigns-officer', function (req, res) {
  // Party campaigns officer form submitted
  // Do something with the data to build up the application
  // Render the next part of the application process i.e. the party descriptions page
  res.render('examples/elements/party-descriptions');
});

router.post('/examples/elements/party-descriptions', function (req, res) {
  // Party descriptions form submitted
  // Do something with the data to build up the application
  // Render the next part of the application process i.e. the party emblems page
  res.render('examples/elements/party-emblems');
});

router.post('/examples/elements/party-emblems', function (req, res) {
  // Party emblems form submitted
  // Do something with the data to build up the application
  // Render the next part of the application process i.e. the chaeck your answers page
  res.render('examples/check-your-answers-page');

});

// Referendum Campaigner

router.post('/examples/elements/referendum-outcome', function (req, res) {
  res.render('examples/elements/campaigner-status');

});

router.post('/examples/elements/campaigner-status', function (req, res) {
  res.render('examples/elements/register-organisation');

});


router.post('/examples/elements/register-organisation', function (req, res) {
  res.render('examples/elements/organisation-type');

});

router.post('/examples/elements/organisation-type', function (req, res) {
  res.render('examples/elements/responsible-person');

});

router.post('/examples/elements/responsible-person', function (req, res) {
  res.render('examples/check-your-answers-campaigner');

});

// Referendum Non-party Campaigner (Third Party)

router.post('/examples/elements/third-party-status', function (req, res) {
  res.render('examples/elements/register-individual');

});

router.post('/examples/elements/register-individual', function (req, res) {
  res.render('examples/check-your-answers-third-party');

});
module.exports = router;
