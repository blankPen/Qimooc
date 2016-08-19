/*
 * @Author: pengzhen
 * @Date:   2016-08-18 14:04:02
 * @Desc: this_is_desc
 * @Last Modified by:   pengzhen
 * @Last Modified time: 2016-08-19 10:37:58
 */

'use strict';

import React, {
    Component
} from 'react';

import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity
} from 'react-native';

class Button extends Component {
    renderChildren(){
        let children = this.props.children;
        if(typeof children === 'string'){
            return <Text>{children}</Text>
        }else{
            return children;
        }
    }
    render() {
        let touchableProps = {};
        if (!this.props.disabled) {
            touchableProps.activeOpacity = this.props.activeOpacity || 0.2;
            touchableProps.onPress = this.props.onPress;
            touchableProps.onPressIn = this.props.onPressIn;
            touchableProps.onPressOut = this.props.onPressOut;
            touchableProps.onLongPress = this.props.onLongPress;
        }else{
            touchableProps.activeOpacity = 1;
        }
        return (
            <TouchableOpacity {...touchableProps} >
                {this.renderChildren()}
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({

});


export default Button;
