/**
 * Created by ttn on 09/05/17.
 */
import React from 'react';

const TopMenuStyles = {
    Listing: {
        listStyleType: "none",
        margin: 0,
        padding: 0,
        overflow: "hidden"
    },
    horizontalListing: {
        float: 'right'
    },
    listingText: {
        display: 'block',
        color: 'white',
        textAlign: 'center',
        padding: 16,
        textDecoration: 'none'
    }
};

const listItems = [{ displayText: 'Sell'}, { displayText: 'Advertise'}, { displayText: '24x7'}];

export default class FKTopMenu extends React.Component {
    render () {
        return (
            <div>
                <ul style={TopMenuStyles.Listing}>
                    {
                        listItems.map( (item, index) => (
                            <li key={index} style={TopMenuStyles.horizontalListing}>
                                <a style={TopMenuStyles.listingText}>
                                    { item.displayText }
                                </a>
                            </li>
                        ))
                    }
                </ul>
            </div>
        );
    }
}