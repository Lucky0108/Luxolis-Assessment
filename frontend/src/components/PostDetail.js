import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from "react-router-dom";

// Fetch, update, and display post details
const PostDetail = ({ fetchPosts }) => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [post, setPost] = useState(null);
    const [loading, setLoading] = useState(true);
    const [editMode, setEditMode] = useState(false);
    const [updatedPost, setUpdatedPost] = useState({ title: "", content: "", author: "" });

    useEffect(() => {
        const fetchPost = async () => {
            try {
                const response = await axios.get(`${process.env.REACT_APP_API_URL}/posts/${id}`);
                setPost(response.data);
                setUpdatedPost({ title: response.data.title, content: response.data.content, author: response.data.author });
            } catch (error) {
                console.error("Error fetching post details:", error);
            } finally {
                setLoading(false);
            }
        };
        fetchPost();
    }, [id]);

    const handleUpdate = async () => {
        try {
            await axios.put(`${process.env.REACT_APP_API_URL}/posts/${id}`, updatedPost);
            setPost(updatedPost);
            setEditMode(false);
        } catch (error) {
            console.error("Error updating post:", error);
        }
    };

    if (loading) return <p className="text-gray-500">Loading post...</p>;
    if (!post) return <p className="text-red-500">Post not found</p>;

    return (
        <div className="p-6 bg-white shadow-md rounded-lg">
            {editMode ? (
                <>
                    <input
                        type="text"
                        value={updatedPost.title}
                        onChange={(e) => setUpdatedPost({ ...updatedPost, title: e.target.value })}
                        className="w-full p-2 border rounded mb-2"
                        required
                    />
                    <textarea
                        value={updatedPost.content}
                        onChange={(e) => setUpdatedPost({ ...updatedPost, content: e.target.value })}
                        className="w-full p-2 border rounded mb-2"
                        required
                    />
                    <input
                        type="text"
                        value={updatedPost.author}
                        onChange={(e) => setUpdatedPost({ ...updatedPost, author: e.target.value })}
                        className="w-full p-2 border rounded mb-2"
                        required
                    />
                    <button onClick={handleUpdate} className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-700">Save</button>
                    <button onClick={() => setEditMode(false)} className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-700 ml-2">Cancel</button>
                </>
            ) : (
                <>
                    <h2 className="text-2xl font-bold mb-2">{post.title}</h2>
                    <p className="text-gray-700 mb-4">{post.content}</p>
                    <p className="text-gray-700 mb-4">- By {post.author}</p>
                    <button onClick={() => setEditMode(true)} className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-700">Update</button>
                    <button onClick={() => { fetchPosts(); navigate("/"); }} className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-700 ml-2">Back</button>                </>
            )}
        </div>
    );
}

export default PostDetail
