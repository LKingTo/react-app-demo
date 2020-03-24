import {createStore, combineReducers} from 'redux';
import user from './reducer/user';
import users from './reducer/users';
import items from './reducer/items';
import cart from './reducer/cart';

// 融合多个reducers
let reducers = combineReducers({
    user,
    users,
    items,
    cart,
});

// 创建store对象
const store = createStore(
    reducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

export default store;
