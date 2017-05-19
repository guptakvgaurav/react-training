/**
 * Created by ttn on 17/05/17.
 */

import { createStore } from 'redux';
import combinedReducers from '../reducers/index';
import middlewares from '../middlewares/index';

const store = createStore(combinedReducers, middlewares);

export default store;