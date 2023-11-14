// // prototype
// // JS는 프로토타입 기반 언어이다.
// // 즉 모든 객체들이 메소드와 속성들을 상속받기 위한 프로토타입 객체를 가진다.
// // 프로토타입을 통해 JS에서의 상속이 구현된다

// // 모든 객체는 '프로토타입'을 갖고, 프로토타입 체인의 끝은 최상위 객체인 Object이다.
// // 따라서 다른 객체들과 달리 Object 프로토타입에대한 프로토타입은 null이다.
// console.log(Object.prototype.__proto__); // null
// // 이러한 특징으로 모든 객체는 Object의 속성 및 메소드에 접근할 수 있다

// // prototype에는 3가지 구성요소가 관여한다.

// // 1. 생성자 함수
function Person(age, name) {
  this.age = age;
  this.name = name;
  this.print = function () {
    console.log(this.age + this.name);
  };
}

// 생성자 함수 객체는 프로토타입 속성을 가지는데, 이는 생성자 함수를 통해 만들어진 '프로토타입'이다.
// 동시에 '객체'이기 때문에 함수 본인에 대한 프로토타입을 가진다
Person.prototype.greet = function () {
  console.log('hi!');
};

// 2. 프로토타입
// 생성자 함수를 통해 만들어진 인스턴스들이 참조하는 원형 객체이다.
// 이는 생성자 함수의 'prototype' 속성과
// 생성자 함수로 만들어진 인스턴스의 '__proto__' 속성 또는 내부 슬록 [[Prototype]]으로 접근할 수 있다
const p1 = new Person(24, '현정');
console.log(Person.prototype === p1.__proto__);

// 3. 생성자 함수를 통해 만들어지는 인스턴스
