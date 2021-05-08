const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY'

let store = {
    _state: {
        profilePage: {
            posts: [
                { id: 1, message: 'Good, take my money', likes: 11 },
                { id: 2, message: 'Hi guys, Im Andrew', likes: 22 },
                { id: 3, message: 'What??', likes: 211 },
                { id: 4, message: 'Hmmm', likes: 1 },
            ],
            newPostText: 'Your Text '
        },
        dialogsPage: {
            dialogs: [
                { id: 1, name: 'Dimych' },
                { id: 2, name: 'Andrew' },
                { id: 3, name: 'Sveta' },
                { id: 4, name: 'Sasha' },
                { id: 5, name: 'Viktor' },
                { id: 6, name: 'Valera' }
            ],
            messages: [
                { id: 1, message: 'hi' },
                { id: 2, message: 'How are you?' },
                { id: 3, message: 'Okey' },
                { id: 4, message: 'Give me money' },
                { id: 5, message: 'Ok, I buy your account' },
                { id: 6, message: 'Bye!' }
            ],
            newMessageBody: ''
        },
        sidebar: {}
    },
    _callSubscriber() {
        console.log('State changed!');
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer
    },
    dispatch(action) { // { type: 'ADD-POST' }
        if (action.type === ADD_POST) {
            let newPost = {
                id: 5,
                message: this._state.profilePage.newPostText,
                likes: 0
            }
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = ''
            this._callSubscriber(this._state);
        } else if (action.type === UPDATE_NEW_POST_TEXT){
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
        } else if (action.type === UPDATE_NEW_MESSAGE_BODY) {
        this._state.dialogsPage.newMessageBody = action.body;
        this._callSubscriber(this._state);
    }
    }
}

export const addPostActionCreator = () => {
    return{
      type: 'ADD-POST'
    }
  }
  
export const updateNewPostTextActionCreator = (text) => {
    return {type: 'UPDATE-NEW-POST-TEXT', newText: text }
  }
  

export default store;
window.store = store;