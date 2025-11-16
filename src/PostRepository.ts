import db from "./db";
import { PostModel } from "./posts.model";


class PostRepository {
     static getAllPosts(): PostModel[] { 
        const stmt = db.prepare(`SELECT * FROM posts`)
        const posts = stmt.all() as PostModel[];
    
        return posts;
    }
    
    static createPost(title: string, content: string) {
        const stmt = db.prepare(`INSERT INTO posts(title, content) VALUES (?, ?)`)
        return stmt.run(title, content)
    }
}

export default PostRepository;