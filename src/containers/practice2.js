/**
 * Created by ttn on 09/05/17.
 */

import React from 'react';
import Home from '../components/home.component';
import About from '../components/about.component';

export default class Practice2 extends React.Component {
    render () {
        return (
            <div>
                <About/>
                <Home/>
            </div>
        );
    }
}