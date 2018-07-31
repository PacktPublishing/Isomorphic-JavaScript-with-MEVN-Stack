import express from 'express';
const app = express();
import { registerRoutes } from './routes';

registerRoutes(app);

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(3000, () => console.log('MEVN app listening on port 3000!'))