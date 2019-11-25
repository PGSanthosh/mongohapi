'use strict';

const Hapi = require('@hapi/hapi');
const db = require('./mongoConfig');

db.connect(function( err, client ) {
    if (err) console.log(err);
    // start the rest of your app here



const server = Hapi.Server({
    host: 'localhost',
    port: 5000
});

// const url = "mongodb://localhost/killer";
// const options = {
//     db:{native_parser :true},
//     server:{poolsize:5}
// };

server.route({
    path: '/',
    method: 'GET',
    handler: (request, h) => {
        return h.response('Killll').code(200);
    }
});
    server.route({
    path: '/post',
    method: 'POST',
    handler: (request, h) => {
        let datatoinsert = {
            start : request.payload.start,
            hello : request.payload.Hello,
        }
        db.get().collection('customers').insertOne(datatoinsert);

    return request.payload;
}
});

server.route({
    path: '/post',
    method: 'GET',
    
        handler: (request, h) => {
         db.get().collection('customers').find().toArray((err, res1)=>{
                       console.log (res1);
                       //return res1;
                       //return h
                       
                    })

            //var don = [{"Hello": "hai", "hae":"bye"}]
            //return  h.send(res1).code(200)
            return h.response('hi').code(200);
                
    }
});


async function start() {
    try{
        await server.start();
    } catch(err) {
        console.log(err);
        process.exit(1)
    }
    console.log('Server running at ' + server.info.uri);
};
start()

});