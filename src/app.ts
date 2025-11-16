import express from "express";
import { Request, Response } from "express";
import nunjucks from "nunjucks";
import path from "path";
import * as dotenv from 'dotenv';
import Post from "./posts.model";
import PostRepository from "./PostRepository";

dotenv.config();

const viewsPath = path.join(__dirname, "view");
const PORT = process.env.PORT || 3001
const app = express(); 

app.use(express.urlencoded({ extended: true }));

nunjucks.configure(viewsPath, {
    express: app,
    watch: true
});

app.get("/", (req: Request, res: Response) => {
   const posts = PostRepository.getAllPosts();
   res.render("index.html", { posts })
})

app.post("/", (req: Request, res: Response) => {
  const { title, content } = req.body
  PostRepository.createPost(title, content);
  res.redirect("/")
})

app.listen(PORT, () => console.log(`Port started ${PORT}`))