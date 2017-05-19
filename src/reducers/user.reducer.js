/**
 * Created by ttn on 17/05/17.
 */

import Constants from '../constants';

const initialState = {
    isSubmitting: false,
    list: []
};

const userReducer = (state = initialState, action = {}) => {
    console.log(`UserReducer#${action.type}`);
    let _stringifiedState = JSON.stringify(state);
    let _updatedState = JSON.parse(_stringifiedState);
    switch(action.type) {
        case Constants.CommentSubmissionForm.IsSubmitting:
            _updatedState.isSubmitting = true;
            break;
        case Constants.CommentSubmissionForm.SubmitSuccess:
            _updatedState.isSubmitting = false;
            let alreadyExistingUser = _updatedState.list.find(user => user.email === action.payload.email);
            if(!alreadyExistingUser){
                _updatedState.list.push({
                    email: action.payload.email,
                    comments: [action.payload.comment]
                });
            }else{
                alreadyExistingUser.comments.push(action.payload.comment);
            }
            break;
        default:
            break;
    }
    return _updatedState ;
};

export default userReducer;