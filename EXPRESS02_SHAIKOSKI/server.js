const express = require('express');
const server = express();

server.listen(3000);
//middleware

// server.use((req,res) => {
//     console.log('teste');
// })


// server.use((req,res,next) => {
//     console.log('Teste');
//     next();
// })

server.use((req,res,next)=>{
    req.requestTime=Date.now();
    next();
})

server.get('/',(req,res)=>{
    console.log(req.requestTime);
    res.send('<h1>Teste de Conexão</h1>')
})
