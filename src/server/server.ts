import express from 'express';
import config from './config';
import router from './api-router';

console.log(express);
const server = express();


//add middlewares using server.use method. 
server.use(express.static("dist"));

server.set('view engine', 'ejs');

//path to go and function to handle that path
// server.use('/', (request, response) => {
//    // response.send("Hello Express");
//    response.render("index", {
//     initialContent: "Loading..."
//    });
// });

server.use('/api', router);

server.get('/', (request, response) => {
   // response.send("Hello Express");
   response.render("index", {
    initialContent: "Loading..."
   });
});


//8080 - is the PORT our server listening and local host is the IP address of server
server.listen( config.PORT , config.HOST, () => {
    console.info(`express server listening at ${config.SERVER_URL}`);
})