// useService为自定义的一个 server hook，该 hook 封装了 ajax 请求中的 { loading, error, response } 三个基础逻辑；
// 有了这个 hook 我们就能很轻松的在每次网络请求里面去处理各种异常逻辑

import { useEffect, useRef, useState, useCallback } from 'react';
import { isEqual } from 'lodash';

const useService = (service, params) => {
    const prevParams = useRef(null);    // 跨渲染周期，缓存数据
    const [callback, { loading, error, response }] = useServiceCallback(service);

    useEffect(() => {
        console.log(prevParams.current);     // 打印了多次（多个周期），
        if (!isEqual(prevParams.current, params)) {
            prevParams.current = params;
            callback(params);
        }
    });

    return { loading, error, response };
};

export const useServiceCallback = (service) => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [response, setResponse] = useState(null);

    // 使用 useCallback，来判断 services 是否改变
    const callback = useCallback(
        params => {
            setLoading(true);
            setError(null);
            service(params).then(response => {
                console.log('response', response);
                setLoading(false);
                setResponse(response);
            }).catch(error => {
                setLoading(false);
                setError(error);
            })
        },
        [service]
    );

    return [callback, { loading, error, response }];
};

export default useService;
