/**
 * Created by ttn on 17/05/17.
 */
import Constants from '../constants';

const initialState = {
    isSubmitting: false,
    list: []
};

const commentReducer = (state = initialState, action = {}) => {
    console.log(`CommentReducer#${action.type} === ${Constants.CommentSubmissionForm.SubmitSuccess}`);
    let _stringifiedState = JSON.stringify(state);
    let _updatedState = JSON.parse(_stringifiedState);
    switch(action.type) {
        case Constants.CommentSubmissionForm.IsSubmitting:
            _updatedState.isSubmitting = true;
            break;
        case Constants.CommentSubmissionForm.SubmitSuccess:
            _updatedState.list.push({
                email: action.payload.email,
                text: action.payload.comment
            });
            _updatedState.isSubmitting = false;
            break;
        default:
            break;
    }
    return _updatedState ;
};

export default commentReducer;