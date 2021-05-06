import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo'
import s from '../Profile/Profile.module.css'

const Profile = (props) => {
  return (
    <div className={s.profile}>
      <ProfileInfo />
      <MyPosts posts={props.profilePage.posts}
      newPostText={props.profilePage.newPostText}
      dispatch = {props.dispatch} />
    </div>
  )
}

export default Profile;