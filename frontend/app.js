// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import PostList from './components/PostList';
import PostDetail from './components/PostDetail';
import NewPost from './components/NewPost';

function App() {
    return (
        <Router>
            <div className="container mx-auto p-4">
                <h1 className="text-3xl font-bold text-center">Forum App</h1>
                <nav className="text-center my-4">
                    <Link to="/" className="text-blue-500 mr-4">Home</Link>
                    <Link to="/new" className="text-blue-500">New Post</Link>
                </nav>
                <Routes>
                    <Route path="/" element={<PostList />} />
                    <Route path="/posts/:id" element={<PostDetail />} />
                    <Route path="/new" element={<NewPost />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
