// reduce?
// reduce는 JS array method 이다.
// 배열의 요소들을 합쳐서 하나의 값을 반환할 떄 사용된다.
// 이전 연산의 결과값과 현재 배열 원소에 접근하여 작업할 수 있다.

// 흔히 SUM을 구할 때 사용할 수 있다
const arr = [1, 2, 3, 4, 5];
console.log(arr.reduce((prev, cur) => prev + cur));

// 🔥 주의 🔥
// reduce 사용 시 자동으로 초기값을 0번째 인덱스 원소로 지정하기 때문에
// callback을 1번째 인덱스 원소부터 적용한다.
// 따라서 아래의 예제는 에러를 방출한다.
const empty = [];
// console.log(empty.reduce((prev, cur) => prev + cur)); // TypeError: Reduce of empty array with no initial value

// 이러한 문제를 해결하기 위해서 reduce의 2번째 파라미터에 초기값을 명시적으로 전달하면
// callback을 0번째 인덱스 원소부터 적용한다.
console.log(empty.reduce((prev, cur) => prev + cur, 0));

// 1. filter 구현을 통해, 짝수 필터링
console.log(arr.reduce((prev, cur) => (cur % 2 ? [...prev, cur] : prev), []));

// 2.flatten
const higherArr = [
  [1, 2],
  [3, 4]
];

console.log(higherArr.reduce((prev, cur) => [...prev, ...cur], []));

// 3. 함수 결합
function withStyle(inner) {
  console.log('procee style');
  return inner;
}
function withAuth(inner) {
  console.log('process auth');
  return inner;
}
function Component() {
  console.log('component');
  return 'ui';
}

withStyle(withAuth(Component()));
[withAuth, withStyle].reduce((prev, hoc) => hoc(prev), Component());
// component
// process auth
// procee style

// #Reference: https://steemit.com/javascript/@rouka/reduce
