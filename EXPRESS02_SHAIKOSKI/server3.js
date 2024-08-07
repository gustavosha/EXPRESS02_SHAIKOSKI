const express = require('express');
const app =  express()

app.listen(3000,()=>{
    console.log('Servidor em execução')
});

//rotas com parâmetros

app.get('/',(req,res)=>{
    res.send('Olá, mundo!')
})

//Rota com um parâmetro
app.get('/ola/:nome',(req,res)=>{
    console.log(req.params.nome)
    res.send('Olá '+req.params.nome)
} )

//Rota com 2 parãmetros
app.get('/ola/:nome/:empresa',(req,res)=>{
    res.send('Ola '+req.params.nome+ " da empresa "+req.params.empresa)
})

//Rota com soma de dois parâmetros
app.get('/soma/:a/:b',(req,res)=>{
    res.send('O resultado da soma de: '+req.params.a+' é
    
    
    
    
    
    
    '+ req.params.b+ ' e: '+(parseInt(req.params.b)))
})