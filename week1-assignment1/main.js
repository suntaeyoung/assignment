// 1. 자바스크립트 함수 연습 - 객체의 복사

function deepClone(obj) {
  if (typeof obj !== 'object') {
    // 기본 자료형인 경우 그대로 반환
    return obj;
  }

  if (Array.isArray(obj)) {
    // 배열인 경우 map 활용
    return obj.map(deepClone);
  }

  // 객체인 경우 reduce 활용
  return Object.keys(obj).reduce((acc, cur) => {
    acc[cur] = deepClone(obj[cur]);
    return acc;
  }, {});
}

const originalObject = {
  x: 1,
  y: {
    z:2,
  }
};

const clonedObject = deepClone(originalObject);

clonedObject.y.z = 3;

console.log(originalObject);
console.log(clonedObject);
