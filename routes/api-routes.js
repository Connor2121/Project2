

var db = require("../models");


module.exports = function(app) {

  
  app.get("/", function(req, res) {

    res.render('index');
  });
  
  
  app.get('/api/pokemon/image', function(req,res) {
    db.images.findAll({}).then(function(result) {
      res.json(result)
    })
  })

// Display data for all pokemon
  app.get("/api/pokemon/", function(req, res) {
    db.pokemonstats.findAll()
      .then(function(PokeDb) {
        res.json(PokeDb);
      });
  });

// Display data for all pokemon of a certain type
  app.get("/api/type/:type_1", function(req, res) {
    db.pokemonstats.findAll({
      where: {
        type_1: req.params.type_1
      }
    });
  });

// Display pokemon data for a given name
  app.get("/api/name/:name", function(req, res){
    db.pokemonstats.findOne({
      where: {
        name: req.params.name
      }
    });
  })

  
  app.delete("/api/", function(req, res) {

  });

  
  app.put("/api/:anything", function(req, res) {

  });
}

