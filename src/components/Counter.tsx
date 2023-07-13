/*
 * @Author: shimori
 * @Date: 2023-07-13 10:10:16
 * @Last Modified by: shimori
 * @Last Modified time: 2023-07-13 10:28:22
 */
import type { ReactNode } from "react";
import { useCountDown } from "../hooks";

export interface ICounterProps {
  count: number; // 需要倒数的秒数
  restView?:(count: number) => ReactNode ;
  endView?: ReactNode;
}

const Counter = ({ count: initCount, restView, endView }: ICounterProps) => {
  const count = useCountDown(initCount);
  const hasRestView = typeof restView === "function";

  if (count === 0) {
    return endView || "Time end!";
  }
  return hasRestView ? (
    restView(count)
  ) : (
    <div>{`Rest time:${count} seconds.`}</div>
  );
};

export default Counter;
