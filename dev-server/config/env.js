import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import bodyParser from 'body-parser';

export function setEnvironment(app) {
    if (process.env.NODE_ENV !== 'production') {
        setDevEnv(app);
    } else {
        setProdEnv(app);
    }
}

function setDevEnv(app) {
    process.env.NODE_ENV = 'development';
    process.env.DB_URL = 'mongodb://localhost:27017/vue-db';
    process.env.TOKEN_SECRET = '27946982a9a4408996607fe95a6299f9';
    app.use(bodyParser.json());
    app.use(morgan('dev'));
    app.use(cors());
}

function setProdEnv(app) {
    process.env.DB_URL = 'mongodb://user:password123@ds133642.mlab.com:33642/vue-db';
    process.env.TOKEN_SECRET = '9f4d50bfa6b2450a9ec766fc5104948e';
    app.use(bodyParser.json());
    app.use(express.static(__dirname + '/../../dist'));
}