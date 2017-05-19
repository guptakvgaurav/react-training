import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import store from './store/create.store';


import Practice1 from './containers/practice1';
import Practice2 from './containers/practice2';
import Practice2_Auth from './containers/practice_auth';
import Practice3 from './containers/practice3';
import Practice3_Scss from './containers/practice3_scss';
import Flipkart from './containers/flipkart';
import Practice4_Redux from './containers/userdashboard';


import { BrowserRouter as Router, Link, Route } from 'react-router-dom';

const elem = document.getElementById('app');

class App extends React.Component {
    render () {
        return (
                <Router>
                    <div>
                        <ul>
                            <li>
                                <Link to="/session1"> PracticeSession - Validations</Link>
                            </li>
                            <li>
                                <Link to="/session2"> PracticeSession - Routing</Link>
                            </li>
                            <li>
                                <Link to="/session2_homework"> PracticeSession - Routing - Advance (Auth and Role based)</Link>
                            </li>
                            <li>
                                <Link to="/session3"> PracticeSession - Styling ( CSS ) ( We need css-loader for importing css and style-loader for applying style in html)</Link>
                            </li>
                            <li>
                                <Link to="/session3_scss"> PracticeSession - Styling ( SCSS ) ( We need sass-loader and node-loader for compiling scss to css)</Link>
                            </li>
                            <li>
                                <Link to="/flipkart"> PracticeSession - Redirect to flipkart page</Link>
                            </li>
                            <li>
                                <Link to="/session4_Redux"> PracticeSession - Redux in action</Link>
                            </li>
                        </ul>
                        <hr/>
                        <Route exact
                               path="/session1"
                               component={Practice1}
                               authRequired="true"
                               allowedTo="admin" >

                        </Route>
                        <Route path="/session2" component={Practice2}/>
                        <Route path="/session2_homework" component={Practice2_Auth} />
                        <Route path="/session3" component={Practice3} />
                        <Route path="/session3_scss" component={Practice3_Scss} />
                        <Route path="/flipkart" component={Flipkart} />
                        <Route path="/session4_Redux" component={Practice4_Redux} />

                    </div>
                </Router>
        ) ;
    }
}

render(
    <Provider store={store}>
        <App/>
    </Provider>
    , elem);
