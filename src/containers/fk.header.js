/**
 * Created by ttn on 09/05/17.
 */

import React from 'react';
import FKLogo from '../components/fk.logo';
import FKTopMenu from '../components/fk.topmenu';
import FKSearchBar from '../components/fk.searchbar';
import FKCartIcon from '../components/fk.cartIcon';

const HeaderStyles = {
    Container : {
        backgroundColor: '#2874f0'
    },
    SearchBarStyleContainer: {
        display: 'inline-flex'
    }
};

export default class FKHeader extends React.Component {
    render () {
        return (
            <div style={HeaderStyles.Container}>
                <FKTopMenu></FKTopMenu>
                <span style={HeaderStyles.SearchBarStyleContainer}>
                    <FKLogo></FKLogo>
                    <FKSearchBar></FKSearchBar>
                    <FKCartIcon></FKCartIcon>
                </span>
            </div>
        );
    }
}
