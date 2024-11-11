
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function PostList() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        axios.get('/posts')
            .then(response => setPosts(response.data))
            .catch(error => console.error("Error fetching posts:", error));
    }, []);

    return (
        <div>
            <h2 className="text-2xl font-bold mb-4">Posts</h2>
            {posts.map(post => (
                <div key={post.id} className="border p-4 mb-4">
                    <h3 className="text-xl font-bold">{post.title}</h3>
                    <p>{post.content}</p>
                    <Link to={`/posts/${post.id}`} className="text-blue-500">Read more</Link>
                </div>
            ))}
        </div>
    );
}

export default PostList;
