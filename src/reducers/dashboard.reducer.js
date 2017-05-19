/**
 * Created by ttn on 17/05/17.
 */
import Constants from '../constants';

const initialState = {
    isSubmitting: false,
    users: []
};

const dashboardReducer = (state = initialState, action = {}) => {
    console.log(`dashboardReducer#${action.type} === ${Constants.CommentSubmissionForm.SubmitSuccess}`);
    let _stringifiedState = JSON.stringify(state);
    let _updatedState = JSON.parse(_stringifiedState);
    switch(action.type) {
        case Constants.CommentSubmissionForm.IsSubmitting:
            _updatedState.isSubmitting = true;
            break;
        case Constants.CommentSubmissionForm.SubmitSuccess:
            _updatedState.isSubmitting = false;
            let alreadyExistingUser = _updatedState.users.find(user => user.email === action.payload.email);
            if(!alreadyExistingUser){
                _updatedState.users.push({
                    email: action.payload.email,
                    comments: [action.payload]
                });
            }else{
                alreadyExistingUser.comments.push(action.payload);
            }
            break;
        case Constants.CommentListing.IsDeletingComment:
            _updatedState.isDeleting = true;
            break;
        case Constants.CommentListing.DeleteCommentSuccessfully:
            _updatedState.isDeleting = false;
            let user = _updatedState.users.find(user => user.email === action.payload.email);
            user.comments = user.comments.filter(comment => (comment.text != action.payload.text))
            if(user.comments.length < 1) {
                _updatedState.users = _updatedState.users.filter(user => user.email != action.payload.email);
            }
            break;
        default:
            break;
    }
    return _updatedState ;
};

export default dashboardReducer;