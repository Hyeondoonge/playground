// JS에서 값을 비교하기위한 비교연산에는
// 동등연산(==), 일치연산(==)이 있다.
// 공통점은 두 개의 비교 대상이 필요하고, 결과값으로 boolean타입의 값을 반환한다는 것이다.
// 조건문 작성시 유용하게 사용된다.

// 동등연산
// 동일한 타입으로 변환한 후, 값을 비교한다.

let a = '5';
let b = 5;

console.log(a == b); // true

// 일치연산
// 타입과 값을 비교한다. 따라서 동등연산에 비해 비교가 까다롭기 떄문에 안전하다.
// 위에서는 통과했던 게, 통과하지 않게된다.
console.log(a === b); // false

// 아래 예제는 값은 같지만, 타입이 string과 object로 차이가 있다.
a = 'string';
b = new String('string');

console.log(a === b); // false

// 아래 예제는 false를 반환하기 떄문에 주의해야한다.
a = NaN;
console.log(a === NaN); // false
// NaN과 일치하는지 확인하려면 빌트인 isNaN 함수를 사용하도록하자.
console.log(isNaN(a)); // true
