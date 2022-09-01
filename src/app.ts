import express from "express";
import routes from './routes'
import connectionDataBase from './database/connection'
const app = express();

connectionDataBase()

app.use(express.json())
app.use(routes)

export default app;