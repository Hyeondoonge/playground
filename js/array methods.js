// 1. map
// ******************************
// 각 항목에 대해 callback을 수행하여 새로운 항목요소을 반환 => 새로운 배열

const arr = [1, 2, 3, 4, 5];
let mappedArr = arr.map((value) => arr.length - value + 1);
console.log(mappedArr); // [5, 4, 3, 2, 1]

const init = [0, 0, 0, 0, 0];
mappedArr = init.map((_, index) => index);
console.log(mappedArr); // [0, 1, 2, 3, 4]
// ******************************

// 2. filter
// ******************************
// 각 항목에 대해 callback을 수행후 결과값이 true인 항목만 반환 => 새로운 배열 반환
const user = [
  { id: '@_@', logged: true },
  { id: '^__^', logged: true },
  { id: 'T_T', logged: false }
];

const authUser = user.filter(({ id, logged }) => logged);
console.log(authUser); // [ { id: '@_@', logged: true }, { id: '^__^', logged: true } ]

// 3. forEach
// ******************************
// 위의 함수들과 달리 반환값이 없고, 배열을 순회하는 용도로 사용
const greets = ['안녕', 'hi', 'ゴンニチと'];
greets.forEach((greet) => console.log(greet));

// 순회 중 중단하도록 하려면, 에러를 던지거나, for, for...of, for...in를 사용하도록 해야함.

// 4. reduce
// ******************************
// "reducer" callback을 수행하고, 전체 실행 결과로 딘일값을 반환한다
// 사용 시 주의할 점은, 0번째 요소는 이전값이 없기 때문에, 초기값을 명시하지 않으면
// 0번째 요소가 초기값이 됨에따라 callback은 1번째 요소부터 수행한다.

let numbers = [1, 2, 3];
console.log(numbers.reduce((prev, cur) => prev + cur)); // 6

// reduce 동작에 따르면, 아래와 같이 빈배열을 전달할경우 초기값을 명시하지 않으면 에러가 발생한다.
numbers = [];
console.log(numbers.reduce((prev, cur) => prev + cur)); // TypeError: Reduce of empty array with no initial value

// 초기값은 reduce의 두번째 파라미터로 전달할 수 있다
console.log(numbers.reduce((prev, cur) => prev + cur, 0)); // 0
