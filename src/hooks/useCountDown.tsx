import { useState,useEffect,useCallback } from "react"

export const useCountDown = (initCount:number) =>{
    const [count, setCount] = useState(initCount);

    // 进行倒数操作
    const handleCountDown = useCallback(() => {
      setCount((prev: number) => (prev > 0 ? prev - 1 : prev));
    }, []);
  
    // initCount变化清除定时器
    useEffect(() => {
      setCount(initCount);
      const interval = setInterval(handleCountDown, 1000);
      return () => {
        interval && clearInterval(interval);
      };
    }, [initCount, handleCountDown]);


    return count
}