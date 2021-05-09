import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";

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

        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);


            this._callSubscriber(this._state);
    }
}

export default store;
window.store = store;