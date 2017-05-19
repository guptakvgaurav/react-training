/**
 * Created by ttn on 18/05/17.
 */
import React from 'react';
import { ListGroupItem, Glyphicon, Button, Row, Col, Badge } from 'react-bootstrap';

const Styles = {
    MoveRight: {
        float: 'right'
    }
}
export default class User extends React.Component {
    render() {
        return (
            <ListGroupItem header={ this.props.user.email }>
                <Row>
                    <Col sm={10}>
                        { this.props.user.email }
                        <Badge style={Styles.MoveRight}>{ this.props.user.comments.length }</Badge>
                    </Col>
                    <Col sm={2}>
                        <Button bsSize="xsmall"><Glyphicon glyph="arrow-right" /></Button>
                    </Col>
                </Row>

            </ListGroupItem>
        );
    }
}