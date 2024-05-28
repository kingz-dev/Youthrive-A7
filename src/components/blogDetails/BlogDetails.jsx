import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const BlogDetails = () => {
  let {id} = useParams();
  let redir = useNavigate();
  return (
    <div>
      <h2>Blog Details for Blog No.{id}</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem illo, qui nostrum ipsum sint consequuntur tempora, labore praesentium eum aut facilis aliquam iusto iure porro? Voluptate omnis tempore doloremque iure.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem illo, qui nostrum ipsum sint consequuntur tempora, labore praesentium eum aut facilis aliquam iusto iure porro? Voluptate omnis tempore doloremque iure.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem illo, qui nostrum ipsum sint consequuntur tempora, labore praesentium eum aut facilis aliquam iusto iure porro? Voluptate omnis tempore doloremque iure.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem illo, qui nostrum ipsum sint consequuntur tempora, labore praesentium eum aut facilis aliquam iusto iure porro? Voluptate omnis tempore doloremque iure.</p>
        <div className='btn'>
          <button onClick={() => redir('/blog')}>Blog</button>
        </div>
    </div>
  )
}

export default BlogDetails