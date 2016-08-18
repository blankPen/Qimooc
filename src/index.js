/*
 * @Author: pengzhen
 * @Date:   2016-08-17 12:00:32
 * @Desc: this_is_desc
 * @Last Modified by:   pengzhen
 * @Last Modified time: 2016-08-17 12:48:55
 */

'use strict';
import React, {
    Component
} from 'react';
import {
    StyleSheet,
    View,
} from 'react-native';
import {
    createStore,
    combineReducers
} from 'redux';
import {
    Provider,
    connect
} from 'react-redux';
import * as reducers from './reducers';
import router from './router';

const reducer = combineReducers(reducers);
const store = createStore(reducer);

export default class AppContainer extends Component {
    render() {
        return (
            <Provider store={store}>
                {router}
            </Provider>
        );
    }
}
