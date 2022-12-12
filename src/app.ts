import helmet from 'helmet';
import express, { Request, Response, NextFunction } from 'express';
import cors from 'cors';
import favicon from 'serve-favicon';
import path from 'path';
import compression from 'compression';
import { PrismaClient } from '@prisma/client';

const app = express();
const PORT = process.env.SERVER_PORT || 8080;

// create database pool
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
    res.send('Hello World!');
});

app.use((error: any, res: Response, next: NextFunction) => {
    try {
        res.status(404).send('Resource not found');
    } catch (error) {
        next(error);
    }
});

app.use((error: any, res: Response, next: NextFunction) => {
    try {
        const status = error.status || 500;
        const message =
            error.message ||
            'There was an error while processing your request, please try again';
        return res.status(status).send({
            status,
            message,
        });
    } catch (error) {
        next(error);
    }
});

app.listen(PORT, () => {
    console.log(`Application started on ${PORT}...`);
});

export default app;
