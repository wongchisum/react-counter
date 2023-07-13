## react-counter

### 计时器组件 

Counter

| props    | 类型                         | 说明                       |
| -------- | ---------------------------- | -------------------------- |
| count    | number                       | 必填，需要倒数的秒数       |
| restView | (count: number) => ReactNode | 可选，倒数中的自定义渲染   |
| endView  | ReactNode                    | 可选，倒数完毕的自定义渲染 |

---

### 倒计时 hook 

useCountDown

| 入参  | 类型   | 说明                 |
| ----- | ------ | -------------------- |
| count | number | 必填，需要倒数的秒数 |

| 入参  | 类型   | 说明           |
| ----- | ------ | -------------- |
| count | number | 剩余倒数的秒数 |
