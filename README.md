# 企慕课堂APP React-Native实现版


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

###### 关于路由切换
```

    import { Actions,ActionConst } from 'react-native-router-flux';

    Actions.pop(num) // 回退，回退num个场景, 默认为1

    Actions.Login({ type: ActionConst.REPLACE });
    // Actions.ROUTE_NAME(params);
    /* 
        跳转到登录页
        Login为路由配置的key
        参数params可为空,Actions会将params传到跳转的route中,在切换后的场景中this.props可取到
        固定参数:
            type 切换类型 在ActionConst中取
            unmountScenes 默认为false 为true时切换场景后会卸载当前场景 如 Launch欢迎页

    */
```


> 上次更新时间 2016-8-19
    添加devtools调试工具
    添加测试方案
    

> 上次更新时间 2016-8-17
