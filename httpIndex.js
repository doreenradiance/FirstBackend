const http = require('http');
const { request } = require('https');


const handleAllRequest = (requestObject, responseObject) => {
    const url = requestObject.url;
    responseObject.setHeader('content-type', 'text/html');
    if (url === '/register'){
        responseObject.write( '<h1>Welcome to Register page</h1>');
        responseObject.end();
    }else if (url === '/login'){
        responseObject.write( '<h1>Login Page</h1>');
        responseObject.end();
    }else if (url === '/home'){
        responseObject.write( '<h1>Home Page</h1>');
        responseObject.end();
    }else if (url === '/contact'){
        responseObject.write( '<h1>Contact Page</h1>');
        responseObject.end();
    }else {
        responseObject.write( '404 page not found');
        responseObject.end();
    }
}

const server = http.createServer(handleAllRequest)

server.listen(2000,"127.0.0.1", () =>{
    console.log('server running');
})