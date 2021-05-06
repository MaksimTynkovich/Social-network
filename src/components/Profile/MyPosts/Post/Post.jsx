import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
  return (
    <div className={s.item}>
      <img alt="logo" src='/avatar.png' />
    {props.message}
          <div>
        <span>like</span> 
        {props.likes}
      </div>
    </div>
  )

}

export default Post;