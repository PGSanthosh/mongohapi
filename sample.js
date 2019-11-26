const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;
const url = "mongodb+srv://dbuser_2326:*********@cluster0-mhrw6.mongodb.net/Cluster0?retryWrites=true&w=majority";


module.exports = {
    FindinCol1: function() {
    return MongoClient.connect(url, {
        useUnifiedTopology: true,
        useNewUrlParser: true,
    }
        ).then(function(db){
            var collection = db.FindinCol1();
            return collection.find().toArray(err, items);
        }).then(function(items){
            console.log(items);
            return items;
        })
    }
};

