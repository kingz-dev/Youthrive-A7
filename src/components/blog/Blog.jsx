import React, { useState } from 'react'
import { useEffect } from 'react';
import Blognav from '../blogNav/Blognav'
import axios from 'axios';
import { Link } from 'react-router-dom';

const Blog = () => {
const [blogs, setBlogs] = useState([]);

useEffect(() => {
  axios.get('https://jsonplaceholder.typicode.com/posts')
  .then(res => {
    console.log(res);
    setBlogs(res.data);
  })
  .catch(err => {
    console.log('Oop! error fetching the blogs', err);
  });
}, []);

  return (
    <div>
      <Blognav />
      <h1>All blogs</h1>
      <ul>
        {blogs.map(blog => (
        <li key={blog.id}>
          <Link to={`/blogs/${blog.id}`}>{blog.title}</Link>
        </li>
        ))}
      </ul>
    </div>
  )
}

export default Blog