let users = [
    {
        id: 0,
        username: 'baoge',
        password: '123'
    },{
        id: 1,
        username: 'asda',
        password: '1dq23'
    },{
        id: 2,
        username: 'oge',
        password: '0903'
    },{
        id: 3,
        username: 'sakd',
        password: '9989k'
    },{
        id: 4,
        username: '9ksd',
        password: 'oioj'
    },
];

export default (state = users, action) => {
    switch (action.type) {
        case 'ADD':
            return [...state, action.payload];
        default:
            return state;
    }
}
