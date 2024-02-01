function useState(curValue) {
  // 현재 값을 state에 저장
  let state = curValue;

  // 현재 값을 새로운 값으로 업데이트 해주는 함수
  const setState = (newValue) => {
    state = newValue;
    console.log("새로운 값: ", state);
  }

  return [state, setState];

}

// useState 함수의 리턴 값을 [count, setCount]에 저장
const [count, setCount] = useState(0);
console.log("현재 값: ", count);

setCount(1);
setCount(10);