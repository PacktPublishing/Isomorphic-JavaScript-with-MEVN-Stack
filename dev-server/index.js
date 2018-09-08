import express from 'express';
const app = express();
import { registerRoutes } from './routes';
import { setEnvironment } from './config/env';

setEnvironment(app);
registerRoutes(app);

app.get('/', (req, res) => {
    if (process.env.NODE_ENV !== 'production') {
        return res.send(
            'Running server in development mode.'
        );
    } else {
        // Returns the main index file in production environment
        return res.sendFile('index.html', { root: __dirname + '/../dist/' });
    }
})

app.listen(3000, () => {
    console.log('MEVN app listening on port 3000 in ' + process.env.NODE_ENV + ' mode!');
});