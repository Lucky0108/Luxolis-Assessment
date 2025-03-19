// import { useEffect, useState } from "react";
// import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
// import axios from "axios";
// import PostList from "./PostList";
// import PostDetail from "./PostDetail";
// import PostForm from "./PostForm";

// export default function BlogApp() {
//   const [posts, setPosts] = useState([]);
//   const [selectedPost, setSelectedPost] = useState(null);

//   useEffect(() => {
//     fetchPosts();
//   }, []);

//   const fetchPosts = async () => {
//     try {
//       const response = await axios.get("http://localhost:5000/posts");
//       setPosts(response.data);
//     } catch (error) {
//       console.error("Error fetching posts:", error);
//     }
//   };

//   const handlePostClick = async (id) => {
//     try {
//       const response = await axios.get(`http://localhost:5000/posts/${id}`);
//       setSelectedPost(response.data);
//     } catch (error) {
//       console.error("Error fetching post:", error);
//     }
//   };

//   return (
//     <div className="p-4 max-w-3xl mx-auto">
//       <h1 className="text-2xl font-bold mb-4">Blog Posts</h1>
//       <PostForm fetchPosts={fetchPosts} />
//       <PostList posts={posts} onPostClick={handlePostClick} />
//       {selectedPost && <PostDetail post={selectedPost} onClose={() => setSelectedPost(null)} />}
//     </div>
//   );
// }

import { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import axios from "axios";
import PostList from "./components/PostList";
import PostDetail from "./components/PostDetail";
import PostForm from "./components/PostForm";

export default function BlogApp() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_API_URL}/posts`);
      setPosts(response.data);
    } catch (error) {
      console.error("Error fetching posts:", error);
    }
  };

  return (
    <Router>
      <div className="p-4 max-w-3xl mx-auto">
        <h1 className="text-2xl font-bold mb-4">Blog Posts</h1>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <PostForm fetchPosts={fetchPosts} />
                <PostList posts={posts} />
              </>
            }
          />
          <Route path="/post/:id" element={<PostDetail fetchPosts={fetchPosts} />} />
        </Routes>
      </div>
    </Router>
  );
}
