/*
 * @Author: pengzhen
 * @Date:   2016-08-17 12:01:36
 * @Desc: this_is_desc
 * @Last Modified by:   pengzhen
 * @Last Modified time: 2016-08-17 15:04:44
 */

'use strict';

import React, {
    Component
} from 'react';
import {
    connect
} from 'react-redux';
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
class Launch extends Component {
    constructor(props) {
        super(props);

        this.state = {
            time: 3
        };
    }

    componentDidMount() {
        console.log(ActionConst)
        this.timer = setInterval(()=>{
            let time = this.state.time - 1;
            console.log(time)
            if(time == 0){
                Actions.Login({ type: ActionConst.PUSH_OR_POP });
                clearInterval(this.timer);
            }else{
                this.setState({
                    time 
                });
            }
        },1000);
    }
    componentWillUnmount() {
         
    }
    render() {
        return (
            <View style={styles.container}>
                <Text style={{fontSize: 20}}>Welcome to Qimooc</Text>
                <Text style={{fontSize: 20}}>{this.state.time}秒后跳转页面</Text>
                <Button onPress={()=>Actions.Login({ type: ActionConst.POP_TO })}>skip</Button>
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


export default connect(mapStateToProps)(Launch);
