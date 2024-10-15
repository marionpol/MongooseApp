import express, { Express, Request, Response } from "express";
import mongoose from "mongoose"
import articleController from "./controllers/articleController"
import commentController from "./controllers/commentController"
import authorController from "./controllers/authorController"



const app: Express = express();
app.use(express.json())


mongoose.connect("mongodb+srv://marionpoljakov:5dSxS8tEaQbzOpCz@appdb.tklz4.mongodb.net/?retryWrites=true&w=majority&appName=AppDB")

const database = mongoose.connection;

database.on('error', (error) => {
    console.log(error)
})

database.once('connected', () => {
    console.log('Database connected')
})

app.use('/', articleController)
app.use('/', commentController);
app.use('/', authorController);

app.get('/', (req: Request, res: Response) => {
  res.send('Express + TypeScript Server');
});

app.listen(3000,() => {
  console.log(`[server]: Server is running at http://localhost:3000`);
});