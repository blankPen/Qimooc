import React from 'react';
import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux';
import router from './routers/';
import configureStore from './configureStore';

const store = configureStore();

const Qimooc = () => (
  <Provider store={store}>
    {router}
  </Provider>
);

AppRegistry.registerComponent('Qimooc', () => Qimooc);
