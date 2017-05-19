/**
 * Created by ttn on 16/05/17.
 */
import fetch from 'isomorphic-fetch'
import Constants from '../constants';

const CommentActions = {
    IsSubmitting: 'isSubmittingComments',
    SubmitSuccess: 'commentSubmittedSuccessfully'
};

let addComment = (payload) => {
    return (dispatch) => {
        dispatch({type: Constants.CommentSubmissionForm.IsSubmitting, payload: payload});
        setTimeout(() => {
            console.log('After timeout is over...', dispatch);
            dispatch({type: Constants.CommentSubmissionForm.SubmitSuccess, payload: payload});
        }, 1000);
    }
};

let deleteComment = (payload) => {
    return (dispatch) => {
        dispatch({type: Constants.CommentListing.IsDeletingComment, payload: payload});
        setTimeout(() => {
            dispatch({ type: Constants.CommentListing.DeleteCommentSuccessfully, payload: payload})
        }, 1000);
    }
};

export { addComment, deleteComment };