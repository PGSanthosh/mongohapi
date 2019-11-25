const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;
const url = "mongodb+srv://dbuser_2326:2326@cluster0-mhrw6.mongodb.net/Cluster0?retryWrites=true&w=majority";


let state = { db: null };

/**
 * Method to connect to the mongodb
 * @param {*} url
 * @returns connection object
 */

exports.connect = (callback) => {

    if (state.db) return callback();

    MongoClient.connect(url, {
        useUnifiedTopology: true,
        useNewUrlParser: true,
        }, (err, connection) => {
        if (err) {
            console.log(err);
            return callback(err);
        }

        state.db = connection;//assign the connection object

        console.log(`MongoDB Connected----------------------------`);

        return callback();
    })
}

/**
 * Method to get the connection object of the mongodb
 * @returns db object
 */
exports.get = () => { return state.db.db('mantat')}

/**
 * Method to close the mongodb connection
 */
exports.close = (callback) => {

    if (state.db) {
        state.db.close((err, result) => {
            state.db = null;
            state.mode = null;
            return callback(err);
        })
    }
}