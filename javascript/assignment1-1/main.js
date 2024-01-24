// 깊은 복사
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