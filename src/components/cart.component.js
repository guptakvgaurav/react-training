/**
 * Created by ttn on 09/05/17.
 */
import React from 'react';
import PropTypes from 'prop-types';

export default class Cart extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <table className="table table-striped">
                    <thead>
                    <tr>
                        <td> S.No </td>
                        <td> Item </td>
                        <td> Quantity </td>
                        <td> - </td>
                        <td> - </td>
                        <td> Unit Price</td>
                        <td> Total Price</td>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        this.props.items.map((item, index) => (
                            <tr key={index}>
                                <td> { index + 1}</td>
                                <td> { item.name }</td>
                                <td> { item.qty }</td>
                                <td>
                                    <div className="btn btn-error" value="Dec"/>
                                </td>
                                <td>
                                    <input className="btn btn-success" value="Inc"/>
                                </td>
                                <td> { item.price }</td>
                                <td> { item.price*item.qty }</td>
                            </tr>
                        ))

                    }
                    </tbody>
                </table>
            </div>
        );
    }
}

Cart.PropTypes = {
    items: PropTypes.shape({
        name:   PropTypes.string,
        qty:    PropTypes.number,
        price:  PropTypes.number
    })
};