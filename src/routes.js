const express = require('express');
const routes = express.Router();

const ServicesController = require('./controllers/ServicesController');

//rotas
routes.get('/services',ServicesController.index);                   // retorna dos os serviços 
routes.post('/services/create',ServicesController.create);           // retorna dos os serviços 
routes.get('/services/six',ServicesController.servicesSix);         // retorna dos os serviços utilizados por SIX CREATIVE  
routes.get('/services/clients',ServicesController.servicesClients); // retorna dos os serviços utilizados por todos os clientes  
routes.get('/services/client/:project',ServicesController.servicesClient);  // retorna dos os serviços utilizados por um client

module.exports = routes;