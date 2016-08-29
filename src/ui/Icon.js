/*
 * @Author: pengzhen
 * @Date:   2016-08-19 14:01:47
 * @Desc: this_is_desc
 * @Last Modified by:   pengzhen
 * @Last Modified time: 2016-08-19 14:53:31
 */

'use strict';

import React, {
    Component
} from 'react';

import {
    StyleSheet,
    View,
    TouchableOpacity,
} from 'react-native';
import Button from './Button';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default class extends Component {
    render() {
        return (
            <Icon {...this.props} />
        );
    }
}
