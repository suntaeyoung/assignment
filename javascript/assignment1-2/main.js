function memoize(func) {
  const cache = {};

  return function (...args) {
    // 함수의 인자들을 문자열로 받아서 키로 사용
    const key = JSON.stringify(args);

    // 캐시에 해당 키에 대한 값이 이미 존재한다면 캐시에서 값을 가져와서 반환
    return cache[key] || (cache[key] = func(...args));
  }
}

const slowFunction = (n) => {
  let result = 0;

  for(let i = 1; i <= n; i++) {
    for(let j = 1; j <= n; j++) {
      result += 1;
    }
  }

  return result;
}

const memoizeFunction = memoize(slowFunction);

console.log(memoizeFunction(10));
console.log(memoizeFunction(10));