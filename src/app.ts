import helmet from 'helmet';
import express, { Request, Response, NextFunction } from 'express';
import cors from 'cors';
import favicon from 'serve-favicon';
import path from 'path';
import compression from 'compression';
import { PrismaClient } from '@prisma/client';
import UserRoute from './Routes/UserRoute'
import BatchRoute from './Routes/BatchRoute'
import SubscriptionRoute from './Routes/SubscriptionRoute'
import errorHandler from './error/errorHandler';

const app = express();
const PORT = process.env.SERVER_PORT || 8080;

export const prisma = new PrismaClient();

// serve static files
// app.use(favicon(path.join('../public', 'favicon.ico')));

// compresses all the responses
app.use(compression());

// adding set of security middlewares
app.use(helmet());

// parse incoming request body and append data to `req.body`
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// enable all CORS request
app.use(cors());


// routes
app.get('/', (req: Request, res: Response) => {
    res.send('Yoga Form API');
});

// user route
app.use('/user', UserRoute);

// batch route
app.use('/batch', BatchRoute);

// subscription route
app.use('/subscription', SubscriptionRoute)

// error handler
app.use(errorHandler);

app.listen(PORT, () => {
    console.log(`Yoga form API started on ${PORT}...`);
});

export default app;
