
var mysql   = require('mysql');

/*
 * Use a connection pool so that we recycle the connections
 * which have already been established
 */
var Database = function( host, user, pass, db ) {
  this.pool = mysql.createPool({
    host     : host,
    user     : user,
    password : pass, 
    database : db
  });
}

/*
 * I've created stored procedures for accessing the data
 */
Database.prototype.Procedures = {
  getPlayer       : "call getPlayer( ? )",
  getBlocks       : "call getBlocks( ? )",
  getDistance     : "call getDistance( ? )",
  getKills        : "call getKills( ? )",
  getDeaths       : "call getDeaths( ? )",
  getPlayers      : "call getPlayers()"
};

/*
 * Open a pool connection and execute a query
 * @query = query object
 *  -> string = query string to be evaluated
 *  -> params = array of parameters
 * @fc = failure callback
 * @rc = result callback
 */
Database.prototype.doQuery = function( query, fc, rc ) {
  this.pool.getConnection( function( error, sql ) {
    if(error)
      fc(error);
    else {
      sql.query( query.string, query.params, function( error, result ) {
        if(error)
          fc(error);
        else
          rc(result[0]);
        sql.release();
      });
    }
  });
}

Database.prototype.getPlayers = function( fc, rc ) {
  var proto = this;
  var query = {
    string : proto.Procedures.getPlayers,
    params : null
  };
  this.doQuery( query, fc, rc );
}

/*
 * Get the player details
 * @id = the numerical ID of the player
 * @fc = failure callback in the event of database error
 * @rc = result callback, has the captured result
 */
Database.prototype.getPlayer = function( id, fc, rc ) {
  var proto = this;
  var query = {
    string : proto.Procedures.getPlayer,
    params : [ id ]
  }; 
  this.doQuery( query, fc, rc );
}

/*
 * Get the distance a player has moved through the world
 * @id = the numerical ID of the player
 * @fc = the failure callback
 * @rc = the result callback
 */
Database.prototype.getDistance = function( id, fc, rc ) {
  var proto = this;
  var query = {
    string : proto.Procedures.getDistance,
    params : [ id ]
  };
  this.doQuery( query, fc, rc );
}

/*
 * Get the blocks a player has mined and acquired
 * @id = the numerical ID of the player
 * @fc = the failure callback
 * @rc = the result callback
 */
Database.prototype.getBlocks = function( id, fc, rc ) {
  var proto = this;
  var query = {
    string : proto.Procedures.getBlocks,
    params : [ id ]
  };
  this.doQuery( query, fc, rc );
}

/*
 * Get the NPC's a player has killed
 * @id = the numerical ID of the player
 * @fc = the failure callback
 * @rc = the result callback
 */
Database.prototype.getKills = function( id, fc, rc ) {
  var proto = this;
  var query = {
    string : proto.Procedures.getKills,
    params : [ id ]
  };
  this.doQuery( query, fc, rc );
}

/*
 * Get the amount of times a player has died
 * @id = the numerical ID of the player
 * @fc = the failure callback
 * @rc = the result callback
 */
Database.prototype.getDeaths = function( id, fc, rc ) {
  var proto = this;
  var query = {
    string : proto.Procedures.getDeaths,
    params : [ id ]
  };
  this.doQuery( query, fc, rc );
}

module.exports = {
  Connect : function( hostname, user, password, database ) {
    return new Database( hostname, user, password, database );
  }
};

