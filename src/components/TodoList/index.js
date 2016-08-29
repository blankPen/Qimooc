/*
 * @Author: pengzhen
 * @Date:   2016-08-17 13:35:26
 * @Desc: this_is_desc
 * @Last Modified by:   pengzhen
 * @Last Modified time: 2016-08-19 16:24:22
 */

'use strict';

import React, {
    Component
} from 'react';
import {
    connect
} from 'react-redux';
import {
    Actions,
    ActionConst,
} from 'react-native-router-flux';
import {
    StyleSheet,
    View,
    Text,
    Dimensions,
    ScrollView,
    ListView,
} from 'react-native';
import Button from "../../ui/Button";
import NavBar from "../../ui/NavBar";


const SCREEN = Dimensions.get('window');

@connect(
    state => ({
        list: state.todoList
    })
)
class TodoList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            dataSource: new ListView.DataSource({
                rowHasChanged: (r1, r2) => r1 !== r2
            }),
        };
    }
    handleEndReached() {

    }
    changeItemState(){

    }
    renderItem(data){
        return (
            <Button onPress={this.changeItemState.bind(this,data.id)}>
                <Text>{data.text}</Text>
            </Button>
        )
    }
    renderListView() {
        return (
            <ListView
                style={styles.list}
                onEndReached={this.handleEndReached}
                onEndReachedThreshold={1000}
                dataSource={this.state.dataSource.cloneWithRows(this.props.list)}
                renderRow={(item)=> this.renderItem(item) }
            />
        );
    }
    render() {
        return (
            <View style={styles.container}>
                <NavBar title={'首页'} />
                <ScrollView>
                    {this.renderListView()}
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    text: {
        fontSize: 20
    },
    list: {
        width: SCREEN.width,
        height: SCREEN.height,
        backgroundColor: '#fff',
        paddingBottom: 10
    },
});

export default TodoList;
