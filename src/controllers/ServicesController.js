const mongoose = require('mongoose');

const Service = mongoose.model('Service');

module.exports = {
    // retorna todos os serviços
    async index(req, res){
        
        const { page = 1 } = req.query;
        const services = await Service.paginate({}, { page, limit:10 });
        
        return res.json(services);

    },

    // cria um serviço
    async create(req, res){
        
        const service = await Service.create(req.body);

        return res.json(service);
    },

    // retorna todos os serviços da six
    async servicesSix(req, res){
        
        const { page = 1 } = req.query;
        const services = await Service.paginate({project: 'six creative'}, { page, limit:10 });

        var setResponseStatus = services.docs.map(function(x) {

            x.responseStatus = 400;
            
        });

        return res.json(services);

    },

    // retorna todos os serviços dos clientes
    async servicesClients(req, res){
        
        const { page = 1 } = req.query;
        const services = await Service.paginate({project: { $ne: 'six creative' }}, { page, limit:10 });
        
        var setResponseStatus = services.docs.map(function(x) {
            x.responseStatus = 400;
        });

        return res.json(services);

    },

    // retorna todos os serviços de um cliente
    async servicesClient(req, res){
        
        const { page = 1 } = req.query;
        const client = req.params.project;
        const services = await Service.paginate({project: client }, { page, limit:10 });
        
        var setResponseStatus = services.docs.map(function(x) {
            x.responseStatus = 400;
        });   

        return res.json(services);

    }
}