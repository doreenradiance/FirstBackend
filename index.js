// const http = require('http');
const express = require('express')

const { request } = require('https');


const handleAllRequest = (requestObject, responseObject) => {
    const url = requestObject.url;
    responseObject.setHeader('content-type', 'text/html');
    if (url === '/register'){
        responseObject.send( '<h1>Welcome to Register page</h1>');
       
    }else if (url === '/login'){
        responseObject.send( '<h1>Login Page</h1>');
       
    }else if (url === '/home'){
        responseObject.send( '<h1>Home Page</h1>');
        
    }else if (url === '/contact'){
        responseObject.send( '<h1>Contact Page</h1>');
    
    }else {
        response( '404 page not found');
    }
}

// const server = http.createServer(handleAllRequest)
 
const server = express();


const handleGetRegister = (req,res) =>{
    res.send('This is register get');
};
const handleRegisterPut= (req,res) =>{
    res.send('This is register put');
};
const handleRegisterDelete = (req,res) =>{
    res.send('This is register delete');
};
const handleRegisterPost = (req,res) =>{
    res.send('This is register post');
};

// server.use(handleAllRequest)

server.get('/register',handleGetRegister)
server.put('/register',handleRegisterPut)
server.delete('/register',handleRegisterDelete)
server.post('/register',handleRegisterPost)


server.listen(2000,"127.0.0.1", () =>{
    console.log('server running');
})