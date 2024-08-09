//criar rotas com . e hifens

const express = require('express');
const app = express();

app.listen(3000,()=>{
    console.log('Servidor no ar!!!')
})

//rota base

app.get('/',(req,res)=>{
    res.send('Testes com parâmetros');
})

//rota com hifen

app.get('/distancia1/:pontoA-:pontoB',(req,res)=>{
    const pontoA = req.params.pontoA;
    const pontoB = req.params.pontoB;
    const distancia = pontoB - pontoA;
    res.send(`À distância, usando hifen ${pontoA} e ${pontoB} é ${distancia}`);

})

//rota com ponto

app.get('/distancia2/:pontoA.:pontoB',(req,res)=>{
    const pontoA = req.params.pontoA;
    const pontoB = req.params.pontoB;
    const distancia = pontoB - pontoA;
    res.send(`À distância, usando hifen ${pontoA} e ${pontoB} é ${distancia}`);

})