/**
 * Created by ttn on 17/05/17.
 */
import { combineReducers } from 'redux';

import comments from './comment.reducer';
import users from './user.reducer';
import dashboard from './dashboard.reducer';

export default combineReducers({ dashboard })

