var express = require('express');
const fs = require('fs');
const request = require('request');
var router = express.Router();

const locations = {
  Paris: {
    desc: "Hello there",
    image: "https://cdn.vox-cdn.com/thumbor/YP3HK6voEMeWojSG9aGdJQMYlYY=/0x0:1300x650/1200x800/filters:focal(537x203:745x411)/cdn.vox-cdn.com/uploads/chorus_image/image/56242795/Obi_Wan.0.jpg"
  }
}

router.get('/', function(req, res, next) {
  res.sendFile('travel.html', { root: 'public' });
});

router.get('/location', function(req, res) {
  console.log("In location");
  console.log(req.query.q);

  var query = req.query.q;
  var location = locations[query];
  console.log(locations[query]);
  res.send(location);
});

var exchange = "https://api.fixer.io/latest?symbols=USD,GBP"
router.get('/exchange', function(req, res) {
  console.log("In exchange");
  request(exchange).pipe(res);
});

module.exports = router;
