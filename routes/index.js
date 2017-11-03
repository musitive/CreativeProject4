var express = require('express');
const fs = require('fs');
const request = require('request');
var router = express.Router();

const locations = {
  Paris: {
    desc: "Paris, France's capital, is a major European city and a global center for art, fashion, gastronomy and culture. Its 19th-century cityscape is crisscrossed by wide boulevards and the River Seine. Beyond such landmarks as the Eiffel Tower and the 12th-century, Gothic Notre-Dame cathedral, the city is known for its cafe culture and designer shops along the Rue du Faubourg Saint-Honore.",
    image: "paris.jpg"
  },
  Chamonix: {
    desc: "Chamonix-Mont-Blanc (usually shortened to Chamonix) is a resort area near the junction of France, Switzerland and Italy. At the base of Mont Blanc, the highest summit in the Alps, it's renowned for its skiing. Year-round, cable cars take visitors up to several nearby peaks with panoramic views, including Aiguille du Midi above town, and Pointe Helbronner, across vast glacier fields on the Italian border.",
    image: "chamonix.jpg"
  },
  Marseille: {
    desc: "Marseille, a port city in southern France, has been a crossroads of immigration and trade since its founding by the Greeks circa 600 B.C. At its heart is the Vieux-Port (Old Port), where fishmongers sell their catch along the boat-lined quay. Basilique Notre-Dame-de-la-Garde is a Romanesque-Byzantine church. Modern landmarks include Le Corbusier’s influential Cité Radieuse complex and Zaha Hadid’s CMA CGM Tower.",
    image: "marseille.jpg"
  },
  Annecy: {
    desc: "Annecy is an alpine town in southeastern France, where Lake Annecy feeds into the Thiou River. It’s known for its Vieille Ville (old town), with cobbled streets, winding canals and pastel-colored houses. Overlooking the city, the medieval Château d’Annecy, once home to the Counts of Geneva, contains a museum with regional artifacts such as Alpine furniture and religious art, plus a natural history exhibit.",
    image: "annecy.jpg"
  },
  Nice: {
    desc: "Nice, capital of the Alpes-Maritimes department on the French Riviera, sits on the pebbly shores of the Baie des Anges. Founded by the Greeks and later a retreat for 19th-century European elite, the city has also long attracted artists. Former resident Henri Matisse is honored with a career-spanning collection of paintings at Musée Matisse. Musée Marc Chagall features some of its namesake's major religious works.",
    image: "nice.jpg"
  },
  Lyon: {
    desc: "Lyon, the capital city in France’s Auvergne-Rhône-Alpes region, sits at the junction of the Rhône and Saône rivers. Its center reflects 2,000 years of history from the Roman Amphithéâtre des Trois Gaules, medieval and Renaissance architecture in Vieux (Old) Lyon, to the modern Confluence district on Presqu'île peninsula. Traboules, covered passageways between buildings, connect Vieux Lyon and La Croix-Rousse hill.",
    image: "lyon.jpg"
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
