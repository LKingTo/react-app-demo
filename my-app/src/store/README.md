# 引用Redux状态管理

## 安装
```
yarn add -S redux react-redux
```

## 使用

### 1、封装store文件，见./store/index.js

### 2、要通过 react-redux 提供的 Provider 容器组件把 store 注入到应用中
```
// index.js
import {Provider} from 'react-redux';
import store from './store';

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <App />
        </Router>
    </Provider>, 
    document.getElementById('root')
);
```

### 3、通过 react-redux 提供的 connect 方法，把 store 注入到组件的 props 中，
见./components/storeDemo1.js和./components/storeDemo2.js

### 4、浏览器扩展插件：[Redux DevTools extension](https://link.zhihu.com/?target=https%3A//github.com/zalmoxisus/redux-devtools-extension)
设置：
```
const store = createStore(
    reducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
```




