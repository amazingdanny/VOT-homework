
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function PostDetail() {
    const { id } = useParams();
    const [post, setPost] = useState(null);
    const [answers, setAnswers] = useState([]);
    const [newAnswer, setNewAnswer] = useState('');

    useEffect(() => {
        axios.get(`/posts/${id}`)
            .then(response => {
                setPost(response.data);
                setAnswers(response.data.answers);
            })
            .catch(error => console.error("Error fetching post:", error));
    }, [id]);

    const handleAddAnswer = () => {
        axios.post(`/posts/${id}/answers`, { content: newAnswer })
            .then(response => setAnswers([...answers, response.data]))
            .then(() => setNewAnswer(''))
            .catch(error => console.error("Error adding answer:", error));
    };

    if (!post) return <p>Loading...</p>;

    return (
        <div>
            <h2 className="text-2xl font-bold">{post.title}</h2>
            <p>{post.content}</p>
            <h3 className="text-xl font-bold mt-4">Answers</h3>
            {answers.map(answer => (
                <div key={answer.id} className="border p-2 mt-2">
                    <p>{answer.content}</p>
                </div>
            ))}
            <div className="mt-4">
                <textarea
                    value={newAnswer}
                    onChange={(e) => setNewAnswer(e.target.value)}
                    placeholder="Add a new answer"
                    className="border p-2 w-full"
                />
                <button onClick={handleAddAnswer} className="mt-2 bg-blue-500 text-white px-4 py-2">Submit Answer</button>
            </div>
        </div>
    );
}

export default PostDetail;
