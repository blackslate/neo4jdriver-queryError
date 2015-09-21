Meteor.startup(function() {
  // Create the connection to the (remote) database. You may need to
  // edit the URL, username and password
  var db = new Neo4jDB(
    "http://localhost:7474"
  , { username: "neo4j"
    , password: "1234"
    }
  )
    
  var query = "INVALID CYPHER QUERY"
  var result

  try {
    result = db.query(query)
  } catch(error) {
    return console.log("Invalid query:", error)   
  }
  
  console.log("This code should never be executed")
})


// **** Error output in Terminal **** //
// Successfully connected to Neo4j on http://localhost:7474
// => Meteor server restarted
// => Started your app.

// => App running at: http://localhost:3000/
// Invalid input 'I': expected <init> (line 1, column 1 (offset: 0))
// "INVALID CYPHER QUERY"
//  ^
// {"code":"Neo.ClientError.Statement.InvalidSyntax"}
// Invalid input 'I': expected <init> (line 1, column 1 (offset: 0))
// "INVALID CYPHER QUERY"
//  ^
// This code should never be executed

