import Mock from 'mockjs';

export const fetchClientsList = () => {
    const clientList = Mock.mock({
        'list|20': [
            {
                key: '@id()',
                name: '@cname(10, 20)',
                img: '@img(64x64)',
                asset: '@float(0.01, 999999.99)',
                number: '@string("number", 13)',
                createTime: '@date(yyyy-MM-dd HH:mm:ss)',
                updateTime: '@date(yyyy-MM-dd HH:mm:ss)',
            }
        ],
        total: 100
    });

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(clientList)
        }, Mock.Random.integer(500, 1000));
    })
};
