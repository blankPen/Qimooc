# 企慕课堂APP React-Native实现版nnn


### 学习点
- react-native
    - StyleSheet FlexBox
    - 各种组件
    - fetch
- react-native-router-flux
    - 路由配置，切换，TabRouter实现方案
- redux
    - 和react中基本一致~

--------

#### 工程结构分析
- src
    - **index.js** App入口文件，设置store及于路由绑定
    - **router/** 路由配置文件
    - **reducers/** 
    - **actions/** 组件所有的可执行操作 [考虑合并进reducers中]
    - **api/** 所有的ajax请求操作,具体怎么写没想好
    - **components/** 业务组件，负责业务逻辑实现，如：LoginFrom
    - **containers/** 容器组件，负责容器划分，如：Launch,Login,Main
    - **ui/** UI组件,不涉及任何业务逻辑，当做三方库开发，各自独立，如：Button之类
    - **utils** 工具类，存放常用工具，工程集成lodash.js

#### 遇到的坑



> 上次更新时间 2016-8-17
