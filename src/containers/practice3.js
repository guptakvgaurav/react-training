/**
 * Created by ttn on 09/05/17.
 */

import React from 'react';
import Home from '../components/home.component';
import About from '../components/about.component';
import style from '../css/styles.css';

export default class Practice3 extends React.Component {
    render () {
        return (
            <div>
                <div className="about">
                    <About />
                </div>
                <div className="home">
                    <Home/>
                </div>
            </div>
        );
    }
}