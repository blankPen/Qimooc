/*
 * @Author: pengzhen
 * @Date:   2016-08-17 13:35:26
 * @Desc: this_is_desc
 * @Last Modified by:   pengzhen
 * @Last Modified time: 2016-08-17 15:00:11
 */

'use strict';
'use strict';

import React, {
    Component
} from 'react';
import {
    Actions,
    ActionConst,
} from 'react-native-router-flux';
import {
    StyleSheet,
    View,
    Text
} from 'react-native';
import Button from "react-native-button";

const Main = color => class extends Component {
    render() {
        console.log(ActionConst)
        return (
            <View style={[styles.container,{backgroundColor:color}]}>
                <Button onPress={()=>Actions.Profile({type: ActionConst.REPLACE})}>Profile</Button>
                <Button onPress={Actions.Home}>Home</Button>
                <Button onPress={Actions.Logout}>Logout</Button>
                <Button onPress={Actions.pop}>Back</Button>
                <Text style={styles.text}>{this.props.name}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: "center",
    },
    text: {
        color: '#fff',
        fontSize: 20
    }
});


export default Main;
