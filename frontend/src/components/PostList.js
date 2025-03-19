import { Link } from "react-router-dom";

const PostList = ({ posts }) => {
    return (
        <div className="container mt-4">
        {posts.length === 0 ? (
          <p className="text-gray-500">No posts available.</p>
        ) : (
          posts.map((post) => (
            <Link to={`/post/${post._id}`} key={post._id} className="block">
              <div className="bg-white shadow-md rounded-lg p-4 mb-4 hover:bg-gray-100 cursor-pointer">
                <h2 className="text-xl font-semibold">{post.title}</h2>
                <p className="text-gray-700">{post.content.substring(0, 100)}...</p>
                <p className="text-gray-700">-By {post.author}</p>
              </div>
            </Link>
          ))
        )}
      </div>
    );
}

export default PostList 