import express from 'express'
import 'dotenv/config'
import cors from 'cors'

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

const port = 3000;