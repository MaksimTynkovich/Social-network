import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

let addPostActionCreator = () => {
  return{
    type: 'ADD-POST'
  }
}

const MyPosts = (props) => {
  let postElements = props.posts.map(p => <Post message={p.message} likes={p.likes} />)

  let newPostElement = React.createRef()

  let addPost = () => {
    props.dispatch({ type: 'ADD-POST'});
  }

  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.dispatch({ type: 'UPDATE-NEW-POST-TEXT', newText: text});
    props.dispatch(action);
  }

  return (
    <div>
      <div className={s.div}>
        My posts
      </div>
      <div>
        <input placeholder="comment" onChange={onPostChange} ref={newPostElement} value={props.newPostText} className={s.text} />
        <button className={s.btn} onClick={addPost}>Add post</button>

      </div>
      <div className={s.posts}>
        {postElements}
      </div>
    </div>
  )

}

export default MyPosts;