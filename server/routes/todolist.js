import express from "express";
import cors from 'cors';
import bodyParser from 'body-parser';
import { getTodo } from "../controller/todo-list-controller.js";

const route = express.Router();

route.get("/",getTodo)


export default route;
