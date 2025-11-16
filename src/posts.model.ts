import db from "./db";

export interface PostModel {
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
        this.title = title
        this.content = content
    }
}

export default Post;