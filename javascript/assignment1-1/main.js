// 1. 자바스크립트 함수 연습 - 객체의 복사

// cloneDeep 함수를 라이브러리 없이 구현해보세요.
const originalObj = {
  x: 1,
  y: {
    z: 2,
  }
}

function cloneDeep(obj) {
  // 기본형일때
  if(typeof obj !== 'object'){
    return obj;
  }

  // 배열일때
  if(Array.isArray(obj)){
    return obj.map(cloneDeep);
  }

  // 객체일때
  return Object.keys(obj).reduce((acc, cur) => {
    acc[cur] = cloneDeep(obj[cur]);
    return acc
  }, {})
}

const cloneObj = cloneDeep(originalObj);

cloneObj.y.z = 3;

console.log(originalObj);
console.log(cloneObj);