var MongoClient = require('mongodb').MongoClient
 var url = "";
var state = {
  db: null,
}

// MongoClient Connection Method
exports.connect = (url, done)=> {
  if (state.db) return done()

  MongoClient.connect(url, {useNewUrlParser: true} , (err, client)=> {
    if (err) return done(err)

    // Set Database Name
    let dbName = 'mongoClient'

    // Store Database to state.db variable so we can return that variable with get() method.
    state.db = client.db(dbName)
    done()
  })
}

// Return Database Obj
exports.get = ()=> {
  return state.db
}

// Close the connection
exports.close = (done)=> {
  if (state.db) {
    state.db.close((err, result)=> {
      state.db = null
      state.mode = null
      done(err)
    })
  }
}