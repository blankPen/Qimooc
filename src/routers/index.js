/*
* @Author: pengzhen
* @Date:   2016-08-17 12:43:48
* @Desc: this_is_desc
* @Last Modified by:   pengzhen
* @Last Modified time: 2016-08-19 15:16:09
*/

'use strict';

import React, { Component } from 'react';
import {
    Router,
    Scene,
    TabBar,
    ActionConst,
} from 'react-native-router-flux';

import Launch from '../components/Launch';
import TodoList from '../components/TodoList';

import {
  StyleSheet,
  View,
  Text 
} from 'react-native';

class TabIcon extends React.Component {
  render(){
    var color = this.props.selected ? '#FF3366' : '#FFB3B3';
    return (
        <View style={{flex:1, flexDirection:'column', alignItems:'center', alignSelf:'center'}}>
            <Text style={{color: color}}>{this.props.title}</Text>
        </View>
    );
  }
}

const router = (
    <Router sceneStyle={{ backgroundColor: 'white',paddingTop: 20 }}>
        <Scene key="root" hideNavBar>
            <Scene key="Launch"
                component={Launch}
                title='Launch'
                type={ActionConst.REPLACE} 
            />

            <Scene key="TodoList"
                title='TodoList'
                component={TodoList}
                type={ActionConst.REPLACE} 
                initial={true} 
            />
        </Scene>
    </Router>
);

export default router;
