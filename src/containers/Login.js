/*
* @Author: pengzhen
* @Date:   2016-08-17 13:09:19
* @Desc: this_is_desc
* @Last Modified by:   pengzhen
* @Last Modified time: 2016-08-17 15:01:14
*/

'use strict';

import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    StyleSheet,
    View,
    Text,
} from 'react-native';
import {
    Actions,
    ActionConst,
} from 'react-native-router-flux';
import Button from "react-native-button";

function mapStateToProps(state) {
  return {
      ...state
  };
};
class Login extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Button onPress={Actions.Main}>Main</Button>
                <Button onPress={Actions.pop}>Back</Button>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: "center",
    },
});


export default connect(mapStateToProps)(Login);
