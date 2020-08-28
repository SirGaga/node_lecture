const http = require('http');
const url = require('url');
const querystring = require('querystring');

const userService = require('./UserService');

const server = http.createServer(function (request,response){
   let data = '';
   request.on('data',function (chunk){
       data += chunk;
   });

   request.on('end',function (){
       const requestUrl = request.url;
       const requestMethod = request.method;

       if (requestUrl.includes('login') && requestMethod === 'GET'){
           const requestParams = url.parse(requestUrl);
           const queryObject = querystring.parse(requestParams.query);

           const loginResult = userService.login(queryObject.username,queryObject.password);
           response.writeHead(200,{'Content-Type':'text/plain'});
           response.end('username:' + queryObject.username + ',password:' + queryObject.password);
       }

   })
});

server.listen(3000,function (){
    console.log('Server is listening on port 3000');
})
