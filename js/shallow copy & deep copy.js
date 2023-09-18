// 얕은 복사(shallow copy)
// 메모리주소에 해당하는 값을 복사한다.
// 대입연산자를 통해 얕은복사할 수 있다.

let a = 5;
let b = a;

// 아래는 참조타입의 변수를 얕은 복사하는 코드이다.
let user1 = { name: '현정', age: 23 };
let user2 = user1;

user2.name = '율무';
console.log(user1.name); // 율무
// 얕은 복사를 할 경우, 위와 같은 케이스를 주의해야한다.
// 결과user2는 user1의 참조값을 복사하기 때문에 user2의 값에 변경은 user1에도 반영이된다.
// 이 두 변수는 메모리 주소값에 같은 참조를 가지기 떄문이다.

// 위 방식처럼 작성할 경우, 디버깅에 어려움이 있을 수 있다.
// 변경이 일어나면 연관된 변수들이 뭐가있는지 찾고 어디서 변경을 발생했는지 파악해야하는 번거로움이 있기 떄문이다.

// 깊은 복사(deep copy)
// 새로운 힙 메모리 공간을 할당받아 데이터를 복사하는 방식이다.
// 1차원 데이터는 spread, Object.assign을 그 이상은 JSON API, structuredClone, 재귀적 복사를 통해
// 복사 대상 데이터와 독립된 데이터를 할당할 수 있다.

// spread
const arr = [1, 2, 3];
const newArr = [...arr];

const user3 = { ...user1 };
user3.name = '코코아';
console.log(user1.name); // 율무 (=> user1의 name은 변하지 않았다)

// Object.assign
const cat = { name: '율무' };
const target = Object.assign({}, cat);
target.name = '녹차';
console.log(cat.name); // 율무 (=> cat의 name은 변하지 않는다)

// 1차원 데이터까지는 위 연산들로 무난하게 깊은복사할 수 있다.
// 그 이상은 아래처럼한다.

// 1. JSON API
const animal = [{ name: '현정' }, { name: '율무' }];
const copyed = JSON.parse(JSON.stringify(animal));
copyed[0].name = '바다';
console.log(animal[0].name); // 현정

// 2. structuredClone
// bulit in 메소드이다. 모든 웹 브라우저에서 지원하고, Node.js 환경에서도 사용가능하다.

const original = { name: '현정', friend: { name: '율무' } };
const clone = structuredClone(original);
clone.friend.name = '바다';
console.log(original.friend.name); // 율무 (original은 변하지 않았다)

// 이밖에도 재귀적으로 복사하는 코드를 직접 구현하거나, 라이브러리가 제공해주는 기능을 사용할 수 있다.
// 각자 장단점이 있기 때문에 입맛에 더 맞는걸 선택하면된다.
