
var express  = require("express");
var colors   = require("colors");
var blocks   = require("./blocks.js");
var Database = require("./database.js");

console.log("*&=> SERIOUS ENTERPRISE-TIER MINECRAFT RESTFULLESSNESS API <=&*".rainbow);

/*
 * Step 1, command line arguments
 */
var args = process.argv.slice(2);
var argv = {
  dbhost : false,
  dbuser : false,
  dbpass : false,
  dbname : false,
  port : false
}
// loop across the command line arguments to check of everything has been filled
for( var argIndex = 0; argIndex < args.length; argIndex++ ) {
  var currentArg = args[argIndex];
  if( currentArg.indexOf("dbhost=") > -1 ) {
    argv.dbhost = currentArg.split("=")[1];
  }
  else if( currentArg.indexOf("dbuser=") > -1 ) {
    argv.dbuser = currentArg.split("=")[1];
  }
  else if( currentArg.indexOf("dbpass=") > -1 ) {
    argv.dbpass = currentArg.split("=")[1];
  }
  else if( currentArg.indexOf("dbname=") > -1 ) {
    argv.dbname = currentArg.split("=")[1];
  }
  else if( currentArg.indexOf("port=") > -1 ) {
    argv.port = parseInt(currentArg.split("=")[1]);
  }
}

// If the parameters are wrong, kill the process
if ( argv.dbhost === false ||
     argv.dbuser === false ||
     argv.dbpass === false ||
     argv.dbname === false ||
     argv.port   === false ||
     isNaN(argv.port) === true ) {
  console.log("* Command-line argument errors".red);
  console.log(argv);
  console.log("* Stopping process.".red);
  process.exit(1);
}

var http = express();
var db = Database.Connect( 
    argv.dbhost, 
    argv.dbuser, 
    argv.dbpass, 
    argv.dbname, 
    argv.port );

http.get("/", function(rq,rs) {
  rs.send("There is nothing to see here.");
});

http.get("/player", function(rq,rs) {
  function display(out) { 
    rs.send(out); 
  }
  function error(err) {
    rs.status(500);
    rs.send(err);
  }
  db.getPlayers( error, display );
});

http.get("/player/:id", function(rq,rs) {
  function error(err) {
    rs.status(500);
    rs.send(err);
  }
  function result(res) {
    var player = res[0];
    if(player.name === null) {
      rs.status(404);
      rs.send("Player Not Found.");
    }
    else {
      rs.send(player);
    }
  }
  db.getPlayer( rq.params.id, error, result );
});

http.get("/player/:id/distance", function(rq,rs) {
  function error(err) {
    rs.send(err);
  }  
  function result(res) {
    if(res.length === 0) {
      rs.status(204);
      rs.send("");
    }
    else {
      rs.send(res);
    }
  }
  db.getDistance( rq.params.id, error, result );
});

http.get("/player/:id/block", function(rq,rs) {
  function error(err) {
    rs.status(500);
    rs.send(err);
  }
  function result(res) {    
    if(res.length === 0) {
      rs.status(204);
      rs.send("");
    }
    else {
      var pblocks = blocks.create();
      for( var i = 0; i < res.length; i++ ) {
        var pb = pblocks.get( res[i].id, res[i].data );
        if ( pb !== false ) {
          pb.placed += res[i].placed;
          pb.broken += res[i].broken; 
        }
      }
      rs.send( pblocks.output() );
    }
  }
  db.getBlocks( rq.params.id, error, result );
});

http.get("/player/:id/kill", function(rq,rs) {
  function error(err) {
    rs.status(500);
    rs.send(err);
  }
  function result(res) {
    if(res.length === 0) {
      rs.status(204);
      rs.send("");
    }
    else {
      rs.send(res);
    }
  }
  db.getKills( rq.params.id, error, result );
});

http.get("/player/:id/death", function(rq,rs) {
  function error(err) {
    rs.status(500);
    rs.send(err);
  }
  function result(res) {
    if(res.length === 0) {
      rs.status(204);
      rs.send("");
    } 
    else {
      rs.send(res);
    }
  }
});

http.listen(argv.port);
