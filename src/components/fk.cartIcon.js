/**
 * Created by ttn on 09/05/17.
 */
import React from 'react';

const CartIconStyles = {
    CartBtn: {
        backgroundColor: '#5064FF',
        maxHeight: 40
    }
}

export default class FKCartIcon extends React.Component {
    render () {
        return (
            <button type="button" style={CartIconStyles.CartBtn} className="btn btn-default btn-lg">
                <span className="glyphicon glyphicon-star" aria-hidden="true"></span> Star
            </button>
        );
    }
}