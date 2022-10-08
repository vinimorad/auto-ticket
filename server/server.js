const express = require('express');
const server = express();
require('dotenv').config();
const cors = require('cors');
const connection = require('./database/database');
const events = require('./models/events.model');

connection
  .authenticate()
  .then(() => console.log("Connected with the database")) 
  .catch(error => console.log(error))

server.use(cors())

server.use(express.json())


server.get('/event', (request, response) => {
  events.findAll({order: [['id', 'ASC']]}).then(events => {
    response.send(events)
  })
})


server.delete('/event/:id', (request, response) => {
  const { id } = request.params 

  events.destroy({
    where: {
      id: id
    }
  })

  response.send().status(200)
})


server.post('/event', async(request, response) => {
  const { event_name, date, client_name, cpf, ticket_price } = request.body


  
  if( event_name == undefined || date == undefined || client_name == undefined || cpf == null || ticket_price == null ) {
    response.send('teste')
  }


  const responsedb = await events.create({
    event_name: event_name,
    date: date,
    client_name: client_name,
    cpf: cpf,
    ticket_price: ticket_price
  })

  
  return response.status(200).send("Operação efetuada com sucesso!");


})

server.put('/event', async(request, response) => {
  const { id, event_name, date, client_name, cpf, ticket_price } = request.body



  await events.update({
    event_name: event_name,
    date: date,
    client_name: client_name,
    cpf: cpf,
    ticket_price: ticket_price
  }, {
    where: {
      id: id
    }
  })

  
  response.send().status(200)


})





server.listen('3033', () => console.log('Server started on http://localhost:3033 🚀'))