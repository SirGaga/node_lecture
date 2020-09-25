const http = require('http');
const querystring = require('querystring');
const url = require('url');
const userController = require('./user/controller/UserController');

const server = http.createServer((req, res) => {
    let data = '';

    req.on('data',chunk => {
        data += chunk;
    });

    req.on('end',() => {
        const reqUrl = req.url;
        const reqMethod = req.method;
        console.log(reqUrl);

        if (reqUrl.includes('login') && reqMethod === 'GET'){
            const reqParams = url.parse(reqUrl);
            const queryObject = querystring.parse(reqParams.query);

            console.log(queryObject);

            userController.userLogin(queryObject.username,queryObject.password);

            res.writeHead(200,{'Content-Type':'text/plain'});
            res.end('username:' + queryObject.username + ', password:' + queryObject.password);
        } else if (reqUrl.includes('logout') && reqMethod === 'GET'){
            const reqParams = url.parse(reqUrl);
            const queryObject = querystring.parse(reqParams.query);

            console.log(queryObject);
            console.log(queryObject.userSessionId);
            userController.userLogout(queryObject.userSessionId);

            res.writeHead(200,{'Content-Type':'text/plain'});
            res.end('user logout,userSessionId:' + queryObject.userSessionId);
        } else if (!reqUrl.includes('favicon.ico')){
            const reqParams = url.parse(reqUrl);
            const queryObject = querystring.parse(reqParams.query);

            console.log(queryObject);
            console.log(queryObject.userSessionId);
            userController.userOtherOperation(queryObject.userSessionId);

            res.writeHead(200,{'Content-Type':'text/plain'});
            res.end('user other operation' + queryObject.userSessionId);
        }
    })
})

server.listen(3000,() =>{
    console.log('server started,listening 3000')
})