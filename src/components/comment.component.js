/**
 * Created by ttn on 18/05/17.
 */
import React from 'react';
import { connect } from 'react-redux';
import { ListGroupItem, Glyphicon, Button, Row, Col } from 'react-bootstrap';
import { deleteComment } from '../actions/comments.actions';

class Comment extends React.Component {
    render() {
        console.log('Comment#Render ==>', this.props.dispatch);
        return (
            <ListGroupItem header={this.props.comment.email}>
                <Row>
                    <Col sm={8}> { this.props.comment.text } </Col>
                    <Col sm={4}>
                        <Button bsStyle="danger"
                                bsSize="xsmall"
                                onClick={e => this.props.dispatch(deleteComment(this.props.comment))}>
                            <Glyphicon glyph="minus" />
                            Delete
                        </Button>
                        <Button bsStyle="info"
                                bsSize="xsmall">
                            <Glyphicon glyph="pencil" /> Edit
                        </Button>
                    </Col>
                </Row>

            </ListGroupItem>
        );
    }
}

export default connect()(Comment);