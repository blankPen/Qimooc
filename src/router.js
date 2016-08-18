/*
* @Author: pengzhen
* @Date:   2016-08-17 12:43:48
* @Desc: this_is_desc
* @Last Modified by:   pengzhen
* @Last Modified time: 2016-08-17 15:01:30
*/

'use strict';

import React, { Component } from 'react';
import {
    Router,
    Scene,
    TabBar,
    ActionConst,
} from 'react-native-router-flux';

import Launch from './containers/Launch';
import Login from './containers/Login';
import Main from './containers/Main';

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
    <Router sceneStyle={{ backgroundColor: 'white' }}>
        <Scene key="root" hideNavBar>
              
            <Scene key="Launch"
                component={Launch}
                title='Launch'
                type={ActionConst.REPLACE} 
                initial={true} />

            <Scene key="Login"
                title='Login'
                component={Login}
                type={ActionConst.REPLACE} />

            
            <Scene key="Main"
                tabs={true}
                hideNavBar={true}
                tabBarStyle={{height: 50}}>
                <Scene key="Logout"
                    title="Logout"
                    hideNavBar={true}
                    icon={TabIcon}
                    component={Main('red')}/>
                
                <Scene key="Home"
                    title="Home"
                    hideNavBar={true}
                    icon={TabIcon}
                    component={Main('blue')}
                    initial={true}/>

                <Scene key="Profile"
                    title="Profile"
                    hideNavBar={true}
                    icon={TabIcon}
                    component={Main('yellow')}/>
            </Scene>
           
        </Scene>
    </Router>
);

export default router;
