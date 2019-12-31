const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2');

const ServiceSchema = new mongoose.Schema({

    name: {
        // name of service
        type: String,
        required: true,
    },
    project: {
        // project of service
        type: String,
        required: true,
    },
    description: {
        // description of service
        type: String,
        required: true,
    },
    url: {
        // url of service
        type: String,
        required: true,
    },
    logo: {
        // logo of service
        type: String,
        required: true,
    },
    responseStatus: {
        // last status of service
        type: String,
        required: true,
    },
    active: {
        // if the service is active
        type: Boolean,
        required: true,
    },
    inProduction: {
        // if the service is in production 
        type: Boolean,
        required: true,
    },
    hasSupport: {
        // if the service has support contract
        type: Boolean,
        required: true,
    },
    createdAt: {
        // when it was created
        type: Date,
        default: Date.now,
    },
    
});

// paginacao
ServiceSchema.plugin(mongoosePaginate);

mongoose.model('Service', ServiceSchema)