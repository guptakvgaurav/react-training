/**
 * Created by ttn on 18/05/17.
 */
import React from 'react';
import User from './user.component';
import { ListGroup, Button, Label } from 'react-bootstrap';

export default class UserListing extends React.Component {

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
                <Button bsStyle={this.hasUsers(this.props.userlist) ? 'primary': 'danger'} bsSize="large" block>
                    { this.hasUsers(this.props.userlist) ? 'List of users...': 'No users exists. Add some to see some.'}
                </Button>
                <ListGroup>
                    {
                        this.hasUsers(this.props.userlist) && this.props.userlist.map((user, index) =>
                            (<User key={index} user={user}></User>)
                        )
                    }
                </ListGroup>
            </div>
        );
    }
}