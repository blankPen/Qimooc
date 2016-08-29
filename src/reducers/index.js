/*
 * @Author: pengzhen
 * @Date:   2016-08-17 12:02:19
 * @Desc: this_is_desc
 * @Last Modified by:   pengzhen
 * @Last Modified time: 2016-08-19 16:07:00
 */

'use strict';
import {
    combineReducers
} from 'redux';

import global from './global';
import todoList from './todoList';

export default combineReducers({
    global,
    todoList
});
