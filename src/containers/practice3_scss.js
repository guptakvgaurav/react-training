/**
 * Created by ttn on 09/05/17.
 */

import React from 'react';
import Home from '../components/home.component';
import About from '../components/about.component';
import style from '../css/styles_scss.scss';

export default class Practice3_Scss extends React.Component {
    render () {
        return (
            <div>
                <div className="home_1">
                    <Home/>
                </div>
                <div className="about_1">
                    <About />
                </div>
            </div>
        );
    }
}