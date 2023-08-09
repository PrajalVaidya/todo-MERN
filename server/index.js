import express from "express";
import cors from 'cors';
import bodyParser from 'body-parser';
import todolist from './routes/todolist.js'

const app = express();
app.use(cors());
app.use(bodyParser.json());
// app.use("/todo",todolist);

app.get("/api",(req,res)=>{
    res.json({
        message:"hello"
 })

const PORT = 8000;
app.listen(PORT,()=>console.log("Sucessfully Connected",PORT))