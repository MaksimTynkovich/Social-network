import React from 'react';
import { addPostActionCreator, updateNewPostTextActionCreator } from "../../../redux/profile-reducer";
import StoreContext from '../../../StoreContext';
import MyPosts from './MyPosts';

const MyPostsContainer = (props) => {

    return (
        <StoreContext.Consumer> {
            (store) => {
                let state = props.store.getState();
                let addPost = () => {
                    props.store.dispatch(addPostActionCreator())
                }
            
                let onPostChange = (text) => {
                    let action = updateNewPostTextActionCreator(text);
                    props.store.dispatch(action);
                }
                <MyPosts updateNewPostText={onPostChange} addPost={addPost} posts={state.getState().profilePage.posts} newPostText={state.profilePage.newPostText} />
            }
        }
        </StoreContext.Consumer>
    )
}

export default MyPostsContainer;