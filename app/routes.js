var express = require('express');
var router = express.Router();
var session = require('express-session')
var bodyParser = require('body-parser')

// Use the session middleware
router.use(session({
  secret: 'pef online prototype', // The secret used to sign the session ID cookie
  resave: false,          // Do not force the session to be saved back to the session store
  saveUninitialized: true // Force a session that is unititialised to be saved to the session store
}))


// create application/json parser
var jsonParser = bodyParser.json()

router.get('/', function (req, res) {
  
  res.render('index');

});


// Political Party POSTS

router.post('/examples/elements/party-name', jsonParser, function (req, res) {
  // Party name form submitted
  // Put the party name into the session store
  req.session.party_name = req.body;
  console.log("The session contains" + JSON.stringify(req.session, null, 2))

  // Render the next part of the application process i.e. the party correspondence page
  res.render('examples/elements/party-correspondence');
});

router.post('/examples/elements/party-correspondence', jsonParser, function (req, res) {
  // Party correspondence form submitted
  // Do something with the data to build up the application
  req.session.party_address = req.body;
  console.log("The session contains" + JSON.stringify(req.session, null, 2));

  // Render the next part of the application process i.e. the party leader page
  res.render('examples/elements/party-leader');
});

router.post('/examples/elements/party-leader', jsonParser, function (req, res) {
  // Party leader form submitted
  // Do something with the data to build up the application
  req.session.party_leader = req.body;
  console.log("The session contains" + JSON.stringify(req.session, null, 2));
  // Render the next part of the application process i.e. the party nominating officer page
  res.render('examples/elements/party-nominating-officer');
});

router.post('/examples/elements/party-nominating-officer', jsonParser, function (req, res) {
  // Party nominating officer form submitted
  // Do something with the data to build up the application
  req.session.party_nominating_officer = req.body;
  console.log("The session contains" + JSON.stringify(req.session, null, 2));
  // Render the next part of the application process i.e. the party treasurer page
  res.render('examples/elements/party-treasurer');
});

router.post('/examples/elements/party-treasurer', jsonParser, function (req, res) {
  // Party treasurer form submitted
  // Do something with the data to build up the application
  req.session.party_treasurer = req.body;
  console.log("The session contains" + JSON.stringify(req.session, null, 2));
  // Render the next part of the application process i.e. the party campaigns officer page
  res.render('examples/elements/additional-officer');
});

router.post('/examples/elements/additional-officer', jsonParser, function (req, res) {
  // Party treasurer form submitted
  console.log("You posted " + JSON.stringify(req.body, null, 2));

  // Do something with the data to build up the application
  req.session.party_additional_officer = req.body;
  console.log("The session contains" + JSON.stringify(req.session, null, 2));
  // Render the next part of the application process i.e. the party campaigns officer page
  res.render('examples/elements/party-campaigns-officer');
});

router.post('/examples/elements/party-campaigns-officer', jsonParser, function (req, res) {
  // Party campaigns officer form submitted
  console.log("You posted " + JSON.stringify(req.body, null, 2));

  // Do something with the data to build up the application
  req.session.party_campaigns_officer = req.body;
  console.log("The session contains" + JSON.stringify(req.session, null, 2));
  // Render the next part of the application process i.e. the party descriptions page
  res.render('examples/elements/party-descriptions');
});

router.post('/examples/elements/party-descriptions', jsonParser, function (req, res) {
  // Party descriptions form submitted
  console.log("You posted " + JSON.stringify(req.body, null, 2));

  // Do something with the data to build up the application
  req.session.party_descriptions = req.body;
  console.log("The session contains" + JSON.stringify(req.session, null, 2));
  // Render the next part of the application process i.e. the party emblems page
  res.render('examples/elements/party-emblems');
});

router.post('/examples/elements/party-emblems', jsonParser, function (req, res) {
  // Party emblems form submitted
  console.log("You posted " + JSON.stringify(req.body, null, 2));

  // Do something with the data to build up the application
  req.session.party_emblems = req.body;
  console.log("The session contains" + JSON.stringify(req.session, null, 2));
  // Render the next part of the application process i.e. the chaeck your answers page
  res.render('examples/check-your-answers-page', { 'application' : req.session } );

});

// Political Party GETS

router.get('/examples/elements/party-name', jsonParser, function (req, res) {
  res.render('examples/elements/party-name', { 'party_name' : req.session.party_name } );
});

router.get('/examples/elements/party-correspondence', jsonParser, function (req, res) {
  res.render('examples/elements/party-correspondence', { 'entity' : req.session.party_address } );
});

router.get('/examples/elements/party-leader', function (req, res) {
  res.render('examples/elements/party-leader', { 'entity' : req.session.party_leader } );
});

router.post('/examples/elements/party-nominating-officer', jsonParser, function (req, res) {
  res.render('examples/elements/party-nominating-officer', { 'entity' : req.session.party_nominating_officer } );
});

router.get('/examples/elements/party-treasurer', jsonParser, function (req, res) {
  res.render('examples/elements/party-treasurer', { 'entity' : req.session.party_treasurer } );
});

router.get('/examples/elements/additional-officer', jsonParser, function (req, res) {
  res.render('examples/elements/additional-officer', { 'additional_officer' : req.session.party_additional_officer } );
});

router.get('/examples/elements/party-campaigns-officer', jsonParser, function (req, res) {
  res.render('examples/elements/party-campaigns-officer', { 'entity' : req.session.party_campaigns_officer } );
});

router.get('/examples/elements/party-descriptions', jsonParser, function (req, res) {
  res.render('examples/elements/party-descriptions', { 'descriptions' : req.session.party_descriptions } );
});

router.get('/examples/elements/party-emblems', jsonParser, function (req, res) {
  res.render('examples/elements/party-emblems', { 'emblems' : req.session.party_emblems } );
});

router.get('/examples/check-your-answers-page', jsonParser, function (req, res) {
  res.render('examples/check-your-answers-page', { 'application' : req.session } );
});


// Referendum Campaigner

router.post('/examples/elements/referendum-outcome', jsonParser, function (req, res) {
  console.log("You posted " + JSON.stringify(req.body, null, 2))
  res.render('examples/elements/campaigner-status');

});

router.post('/examples/elements/campaigner-status', jsonParser, function (req, res) {
  console.log("You posted " + JSON.stringify(req.body, null, 2))
  res.render('examples/elements/register-organisation');

});


router.post('/examples/elements/register-organisation', jsonParser, function (req, res) {
  console.log("You posted " + JSON.stringify(req.body, null, 2))
  res.render('examples/elements/organisation-type');

});

router.post('/examples/elements/organisation-type', jsonParser, function (req, res) {
  console.log("You posted " + JSON.stringify(req.body, null, 2))
  res.render('examples/elements/responsible-person');

});

router.post('/examples/elements/responsible-person', jsonParser, function (req, res) {
  console.log("You posted " + JSON.stringify(req.body, null, 2))
  res.render('examples/check-your-answers-campaigner');

});

// Referendum Non-party Campaigner (Third Party)

router.post('/examples/elements/third-party-status', jsonParser, function (req, res) {
  console.log("You posted " + JSON.stringify(req.body, null, 2))
  res.render('examples/elements/register-individual');

});

router.post('/examples/elements/register-individual', jsonParser, function (req, res) {
  console.log("You posted " + JSON.stringify(req.body, null, 2))
  res.render('examples/check-your-answers-third-party');

});
module.exports = router;
