/**
 * Created by ttn on 09/05/17.
 */

import React from 'react';
import FKHeader from  './fk.header';
import FKMenuBar from  '../components/fk.menubar';
import FKPromotionBar from '../components/fk.promotionbar';
import FKSectionList from './fk.sectionlist';

export default class Flipkart extends React.Component {
    render () {
        return (
            <div>
                <FKHeader></FKHeader>
                <FKMenuBar></FKMenuBar>
                <FKPromotionBar></FKPromotionBar>
                <FKSectionList></FKSectionList>
            </div>
        );
    }
}
