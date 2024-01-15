// 기본 복사
// const a = { x : 1};
// const b = a;

// b.x = 2;

// console.log(a);
// console.log(b);

// 얕은 복사
// const c = { x : 1};
// const d = { ...c };

// d.x = 3;

// console.log(c);
// console.log(d);


// 깊은 복사
const obj = {
  x : 1,
  y : {
    z : 2,
  },
};

function copyObjDeep(obj) {
  const result = {};

  for(let key in obj){
    if(typeof obj[key] === 'object'){
      result[key] = copyObjDeep(obj[key]);
    }else {
      result[key] = obj[key];
    }
  }
  return result;
}

const copyDeep = copyObjDeep(obj);

copyDeep.y.z = 3;

console.log(obj);
console.log(copyDeep);
console.log(obj.y.z === copyDeep.y.z);


