import express from "express";
import { Request, Response } from "express";
import * as dotenv from 'dotenv';

dotenv.config();

const PORT = process.env.PORT || 3001
const app = express(); 

app.get("/", (req: Request, res: Response) => {
    res.send("start server")
})

app.listen(PORT, () => console.log(`Port started ${PORT}`))