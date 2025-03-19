import { useState } from "react";
import axios from "axios";

const PostForm = ({ fetchPosts }) => {
    const [newPost, setNewPost] = useState({ title: "", content: "", author: "" });

    const handleCreatePost = async (e) => {
        e.preventDefault();
        try {
            await axios.post(`${process.env.REACT_APP_API_URL}/posts`, newPost);
            setNewPost({ title: "", content: "", author: "" });
            fetchPosts();
        } catch (error) {
            console.error("Error creating post:", error);
        }
    };

    return (
        <form onSubmit={handleCreatePost} className="mb-4 p-4 border rounded-lg shadow-sm">
            <input
                type="text"
                placeholder="Title"
                value={newPost.title}
                onChange={(e) => setNewPost({ ...newPost, title: e.target.value })}
                className="block w-full p-2 mb-2 border rounded"
                required
            />
            <textarea
                placeholder="Content"
                value={newPost.content}
                onChange={(e) => setNewPost({ ...newPost, content: e.target.value })}
                className="block w-full p-2 mb-2 border rounded"
                required
            />
            <input
                type="text"
                placeholder="Author"
                value={newPost.author}
                onChange={(e) => setNewPost({ ...newPost, author: e.target.value })}
                className="block w-full p-2 mb-2 border rounded"
                required
            />
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
                Create Post
            </button>
        </form>
    );
}

export default PostForm
