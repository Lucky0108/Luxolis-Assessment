const express = require('express');
const router = express.Router();

const { fetchAllPosts, fetchPostById, createBlogPost, updateBlogPost } = require('../controllers/blogController');

// Fetch All Posts
router.get('/posts', fetchAllPosts);
// Fetch Individual Posts by id params
router.get('/posts/:id', fetchPostById);
// Create Post
router.post('/posts', createBlogPost)
// Update Individual Post by id params
router.put('/posts/:id', updateBlogPost)

module.exports = router;