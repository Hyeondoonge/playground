// this 알아보기
// 객체, 인스턴스, DOM element 등을 가리키는 JS 키워드
// 함수가 호출되는 방식에 따라 결정됨

// 1️⃣ 일반 함수 호출
// Node 환경에서는 global, 브라우저 환경에서는 window

function myFunc() {
  console.log('this of myFunc', this === global);
}
myFunc(); // true

const obj1 = {
  func1: function () {
    console.log('this of obj1 - func1', this === global);
  }
};

const func1 = obj1.func1;
func1(); // true

// 2️⃣ 객체의 함수로 호출
// 객체 함수로 호출 시 this가 해당 객체가 할당되므로, this 키워드를 이용해 name 프로퍼티에도 접근할 수 있다.
const obj2 = {
  name: '현정',
  func1: function () {
    console.log(this, this.name);
  }
};

obj2.func1(); // obj2객체 현정

// 3️⃣ 클래스의 함수로 호출
class Person {
  constructor() {
    this.name = '현정';
  }
  printName() {
    console.log(this.name);
  }
}

const p1 = new Person();
p1.printName(); // 현정

// 4️⃣ 이벤트 핸들러 콜백 호출
// 아래 핸들러내의 this는 이벤트 바인딩대상인 element DOM이 된다.

// 노드 환경 동작이 불가능하므로 코드만 이해하자.
function example() {
  const element = document.querySelector('li');
  element.addEventListener('click', function clickHandler() {
    this.style = `color: 'yellow'`;
  });
}

// 🔥 주의점!!!
// 함수는 함수 선언식 또는 화살표함수를 통해 표현할 수 있다.
// 화살표함수의 경우 본인의 this를 가지지 않고, 외부 렉시컬 환경에 바인딩된 this를 참조한다.

// 아래 예제를 보면 화살표함수로 선언된 핸들러를 전달한다.
// 이때의 this는 global을 가리키게된다.
function wrongExample() {
  const element = document.querySelector('li');
  element.addEventListener('click', () => {
    this.style = `color: 'yellow'`;
  });
}
