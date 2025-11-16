import db from "./db";

interface PostModel {
    id: number;
    title: string;
    content: string
}

class Post implements PostModel {
    public id: number;
    public title: string;
    public content: string;

    constructor (id: number, title: string, content: string) {
        this.id = id
        this. title = title
        this.content = content
    }

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

export default Post;