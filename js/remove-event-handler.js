const greet = () => {
  console.log('hello, world');
};

// 1. 전역객체에 이벤트 바인딩하는 경우
window.addEventListener('click', fn);

// 더 이상 이벤트 호출이 필요하지 않다면,
// removeEventListener로 명시적으로 제거하는 것이 좋다.

// 그렇지 않으면 메모리 누수를 유발한다
// 또한 원하지 않는 이벤트가 호출되어 동작에 이상이 있을 수 있다.

window.removeEventListener('click', fn);

// 2. 하위 요소에 이벤트 바인딩하는 경우
const $li = document.querySelector('li');
$li.addEventListener('click', fn);

// 이 요소는 window와 다르게, 특정 동작으로인해
// DOM에서 사라질 수도 있다. 이때 더 이상 이벤트는 필요하지않게된다
// 그러면 요소에 바인딩된 이벤트도 제거가 되야하는데 이는 GC에 의해 처리된다.

// 단, 브라우저마다 GC의 동작방식이 달라 구 브라우저에서는 다르게 처리될 수 있다.
// 요소가 제거됐음에도 이벤트가 제거되지 못하고 메모리 누수가 발생할 수 있다고 한다.
// 이런 경우 아래처럼 명시적으로 이벤트를 제거해주면 문제를 방지할 수 있다.

$li.removeEventListener('click', fn);
