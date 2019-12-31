const express = require('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir');
const cors = require('cors');

// iniciando app
const app =  express();
app.use(express.json());
app.use(cors());

//conexão com mondo db atlas
mongoose.connect(
    'mongodb+srv://victor:ykRoVBszJ26Q60qu@cluster0-zm5z2.mongodb.net/service-watcher?retryWrites=true&w=majority', 
    {   
        useUnifiedTopology: true,
        useNewUrlParser: true
    }
);

// models
requireDir('./src/models');

// rota api importando suas rotas
app.use('/api', require('./src/routes'));

// rodando na porta :3001
app.listen(3001);   