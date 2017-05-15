/**
 * Created by ttn on 09/05/17.
 */
import React from 'react';
import { withRouter } from 'react-router-dom';
import AuthComponent from '../components/auth.component';

class About extends AuthComponent {

    constructor(props) {
        super(props);
        this.onGoToBtnClick = this.onGoToBtnClick.bind(this);
    }

    onGoToBtnClick(e) {
        e.preventDefault();
        this.props.history.push('/')
    }

    render () {
        return (
            <div>
                In about page...
                <input type="button" value="Back to Index" onClick={ (e) => this.onGoToBtnClick(e)}/>
            </div>
        );
    }
}

export default withRouter(About);