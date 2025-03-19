const Blog = require('../models/blogSchema');

// Using Find Operation to fetch all Blog Documents
const fetchAllPosts = async (req, res) => {
    try {
        const posts = await Blog.find();
        return res.status(200).json(posts);
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }
}

// Using Find By Id to fetch individual Post
const fetchPostById = async (req, res) => {
    try {
        const post = await Blog.findById(req.params.id);
        if (!post) return res.status(404).json({ message: 'Post not found' });
        return res.json(post);
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }
}

// Using .save method and Blog Schema Model to create and save a new Blog Document
const createBlogPost = async (req, res) => {
    try {
        const { title, content, author } = req.body;
        const newPost = new Blog({ title, content, author });
        await newPost.save();
        return res.status(201).json(newPost);
    } catch (err) {
        return res.status(400).json({ message: err.message });
    }
}

// Using FindByIdAndUpdate to find individual blog document and update it. 
const updateBlogPost = async (req, res) => {
    try {
        const updatedPost = await Blog.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedPost) return res.status(404).json({ message: 'Post not found' });
        return res.json(updatedPost);
    } catch (err) {
        return res.status(400).json({ message: err.message });
    }
}

module.exports = { fetchAllPosts, fetchPostById, createBlogPost, updateBlogPost }