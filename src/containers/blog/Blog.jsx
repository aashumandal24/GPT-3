import React from 'react';
import './blog.css';
import { blog01, blog02, blog03, blog04, blog05 } from './imports';
import { Article } from '../../components';

const Blog = () => {
  return (
    <div className='gpt3__blog section__padding' id='blog'>
      <div className='gpt3__blog-heading'>
        <h1 className='gradient__text'>
          A lot is happening, We are blogging about it.
        </h1>
      </div>
      <div className='gpt3__blog-container'>
        <div className='gpt3__blog-container_groupA'>
          <Article imgUrl={blog01} date="Sep 26, 2021" title="GPT-3 and Open  AI is the future. Let us exlore how it is?" />
        </div>
        <div className='gpt3__blog-container_groupB'>
          <Article imgUrl={blog02} date="Sep 26, 2021" title="GPT-3 and Open  AI is the future. Let us exlore how it is?" />
          <Article imgUrl={blog03} date="Mar 17, 2023" title="GPTs are GPTs: An early look at the labor market impact potential of large language models" />
          <Article imgUrl={blog04} date="July 21, 2021" title="GPT-3 — A revolution in AI" />
          <Article imgUrl={blog05} date="Feb 09, 2022" title="GPT-3 is like a fighter jet" />
        </div>
      </div>
    </div>
  )
}

export default Blog;
