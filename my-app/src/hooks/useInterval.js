import { useEffect, useRef } from 'react';

const useInterval = (callback, delay) => {
    const saveCallback = useRef();

    // 保存新回调
    useEffect(() => {
        saveCallback.current = callback;
    });

    // 建立 interval
    useEffect(
        () => {
            function tick() {
                saveCallback.current();
            }
            if (delay !== null) {
                let id = setInterval(tick, delay);
                return () => clearInterval(id);
            }
        },
        [delay]
    )
};

export default useInterval;
