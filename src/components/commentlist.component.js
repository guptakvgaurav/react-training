/**
 * Created by ttn on 18/05/17.
 */
import React from 'react';
import { ListGroup, Button, Label } from 'react-bootstrap';
import Comment from './comment.component';


export default class CommentListing extends React.Component {

    constructor(props) {
        super(props);
        this.hasUsers = this.hasUsers.bind(this);
    }

    hasUsers(userList) {
        return Array.isArray(userList) && userList.length > 0;
    }

    render(){
        return (
            <div>
                <Button bsStyle={this.hasUsers(this.props.comments) ? 'primary': 'danger'} bsSize="large" block>
                    { this.hasUsers(this.props.comments) ? 'List of comments...': 'No users exists. Add some to see some.'}
                </Button>
                <ListGroup>
                    {
                        this.hasUsers(this.props.comments) && this.props.comments.map((comment, index) => (
                            <Comment key={index} comment={comment} ></Comment>
                        ))
                    }
                </ListGroup>
            </div>
        );
    }
}