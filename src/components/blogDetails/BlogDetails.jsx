import axios from 'axios';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom'

const BlogDetails = () => {
    const {id} = useParams();
    const redir = useNavigate();
    const [blog, setBlog] = useState(null);

    useEffect(() => {
      axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then(res => {
        setBlog(res.data);
      })
      .catch(err => {
        console.log('Oop! error fetching the blogs', err);
      });
    },[id]);

    if (!blog) {
      return <div>Loading...</div>;
    }

  return (
    <div>
        <h2>{blog.title}</h2>
        <p>{blog.body}</p>
        <div className='btn'>
            <button onClick={() => redir('/blog')}>Back to Blogs</button>
        </div>
    </div>
  )
}

export default BlogDetails