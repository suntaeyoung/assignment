// 3. 자바스크립트의 객체

// 오브젝트를 생성하는 세가지 방법에 대해 공부하고 각각에 대한 예시 코드를 작성해주세요.

// 객체 리터럴
const obj1 = {
  name: 'Sun',
  age: 28,
  gender: 'male',
}

console.log(obj1);


// new
const obj2 = new Object();
obj2.name = 'apple';
obj2.price = 2000;
obj2.color = 'red';

console.log(obj2);


// 함수
function Fruit (name, price, color) {
  this.name = name;
  this.price = price;
  this.color = color;
}
const fruit = new Fruit('banana', 1000, 'yellow');
console.log(fruit);