const express = require('express');
const app = express();

app.listen(3000,()=>{
    console.log('Olá povo abençoado, servidor está no ar')
})

//dados de clienetes

const clientes = [
    {id:1, nome:'Atamiro', telefone:'12345-6789',email:'Alta@gmail.com'},
    {id:2, nome:'Beriginilda', telefone:'22222222',email:'Berin@gmail.com'},
    {id:3, nome:'Conegunes', telefone:'3333333',email:'Cone@gmail.com'},
    {id:4, nome:'Desidelio', telefone:'44444444',email:'Dz@gmail.com'},
    {id:5, nome:'Amenigarda', telefone:'555555555',email:'Enem@gmail.com'},    
]

//rota

app.get('/',(res,req)=>{
    res.send('API do clienete')
})

//rota 2 o total de clientes
app.get('/total_clienets',(res,req)=>{
    res.send('total de clientes: '+clieetes.length)
})

//rota 3 apresentar dados de um cliente expecifico 
app.get('/clientes/:id',(req,res)=>{
    
})