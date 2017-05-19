/**
 * Created by ttn on 17/05/17.
 */

import React from 'react';
import { connect } from 'react-redux';
import { Col, Row } from 'react-bootstrap';

import { addComment } from '../actions/comments.actions';
import UserListing from '../components/userlist.component';
import CommentListing from '../components/commentlist.component';

import CommentSubmissionForm from '../components/comment_submission_form.component';

class _UserDashboard extends React.Component{

    constructor(props) {
        super(props);
        this.state = {};
        this.onCommentSubmissionFormSubmitted = this.onCommentSubmissionFormSubmitted.bind(this);
        this.getComments = this.getComments.bind(this);
        this.onCommentDeleted = this.onCommentDeleted.bind(this);
    }

    onCommentDeleted(comment) {

    }

    onCommentSubmissionFormSubmitted(formData) {
        this.props.dispatch(addComment(formData))
    }

    getComments(users) {
        if(!Array.isArray(users) || users.length < 1){
            return [];
        }
        const comments = users.reduce((accumulatedComments, user) => {
            return accumulatedComments.concat(user.comments)
        }, []);
        return comments;
    }

    render() {
        console.log('Props are ---> ', this.props);
        return (
            <div>
                <Row>
                    <Col smOffset={1} sm={10} >
                        <CommentSubmissionForm onSubmit={this.onCommentSubmissionFormSubmitted}
                                               isSubmitting={this.props.dashboard.isSubmitting}>
                        </CommentSubmissionForm>
                    </Col>
                </Row>
                <Row>
                    <Col sm={5} smOffset={1}>
                        <UserListing userlist={this.props.dashboard.users}></UserListing>
                    </Col>
                    <Col sm={5}>
                        <CommentListing comments={this.getComments(this.props.dashboard.users)}
                                        onCommentDeleted={this.onCommentDeleted}
                        ></CommentListing>
                    </Col>
                </Row>
            </div>
        );
    }
}

// simply pass entire state to form.
let mapStateToProps = state => {
    // console.log('MapStateToProps --->', state);
    return state;
};
let UserDashboard = connect(mapStateToProps)(_UserDashboard);

export default UserDashboard;

