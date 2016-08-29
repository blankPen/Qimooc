import React from 'react';
import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux';
import router from './routers/';
import configureStore from './configureStore';


let initialState = {
    todoList: [
        { id: 1,text: 'TODO ITEM 1' },
        { id: 2,text: 'TODO ITEM 2' },
        { id: 3,text: 'TODO ITEM 3' },
        { id: 4,text: 'TODO ITEM 4' },
        { id: 5,text: 'TODO ITEM 5' },
        { id: 6,text: 'TODO ITEM 6' },
        { id: 7,text: 'TODO ITEM 7' },
    ]
};
const store = configureStore(initialState);
const Qimooc = () => (
    <Provider store={store}>
        {router}
    </Provider>
);

AppRegistry.registerComponent('Qimooc', () => Qimooc);
