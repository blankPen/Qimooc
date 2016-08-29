/*
 * @Author: pengzhen
 * @Date:   2016-08-19 13:38:22
 * @Desc: this_is_desc
 * @Last Modified by:   pengzhen
 * @Last Modified time: 2016-08-19 15:12:50
 */

'use strict';

import React, {
    Component
} from 'react';

import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
} from 'react-native';
import Icon from './Icon';
import Button from './Button';
import THEME from '../config/styleConfig.js';

class NavBar extends Component {
    static propTypes = {
        title: React.PropTypes.oneOfType([
            React.PropTypes.string,
            React.PropTypes.node
        ]),
    };
    static defaultProps = {
    };
    getNode(node){
        if(typeof node === 'string'){
            return <Text style={[styles.titleText,{color: '#fff'}]}>{node}</Text>;
        }else{
            return node;
        }
    }
    render() {
        return (
            <View style={[styles.navbar,this.props.wrapStyle]}>
                <Button>
                    <Icon name='menu' size={24} style={[styles.icon,{color: '#fff'}]} />
                </Button>
                <View style={styles.title}>
                    {this.getNode(this.props.title)}
                </View>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    navbar: {
        height: 56,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: THEME.primary
    },
    title: {
        flex: 1,
        marginLeft: 16,
    },
    titleText: {
        fontSize: 24,
    },
    icon: {
        margin: 16,
    }
});


export default NavBar;
