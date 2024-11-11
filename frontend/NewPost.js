// components/NewPost.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function NewPost() {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const navigate = useNavigate();

    const handleSubmit = () => {
        axios.post('/posts', { title, content })
            .then(() => navigate('/'))
            .catch(error => console.error("Error creating post:", error));
    };

    return (
        <div>
            <h2 className="text-2xl font-bold">New Post</h2>
            <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Title"
                className="border p-2 w-full my-2"
            />
            <textarea
                value={content}
                onChange={(e) => setContent(e.target.value)}
                placeholder="Content"
                className="border p-2 w-full my-2"
            />
            <button onClick={handleSubmit} className="bg-blue-500 text-white px-4 py-2">Create Post</button>
        </div>
    );
}

export default NewPost;
