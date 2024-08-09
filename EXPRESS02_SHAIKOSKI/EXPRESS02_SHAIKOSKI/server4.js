const express = require('express');
const app = express();

app.listen(3000,()=>{
    console.log('Olá povo abençoado, servidor está no ar')
})

//dados de clientes

const clientes = [
    {id:1, nome:'Atamiro', telefone:'12346789',email:'Alta@gmail.com'},
    {id:2, nome:'Beriginilda', telefone:'22222222',email:'Berin@gmail.com'},
    {id:3, nome:'Conegunes', telefone:'3333333',email:'Cone@gmail.com'},
    {id:4, nome:'Desidelio', telefone:'44444444',email:'Dz@gmail.com'},
    {id:5, nome:'Amenigarda', telefone:'555555555',email:'Enem@gmail.com'},    
]

//rota

app.get('/',(req,res)=>{
    res.send('API do clienete')
})

//rota 2 o total de clientes
app.get('/total_clientes',(req,res)=>{
    res.send('total de clientes: '+clientes.length)
})

//rota 3 apresentar dados de um cliente expecifico 
app.get('/clientes/:id',(req,res)=>{
    const cliente = clientes.find(c=>c.id===parseInt(req.params.id))
    //se o cliente não existir
    if(!cliente) res.status(404).send("Cliente não existe")
    //se o cliente existir,vamos apresentar uma frase de resposta
    res.send(`O cliente é: ${cliente.nome}, Telefone: ${cliente.telefone}, Email: ${cliente.email}`);
})