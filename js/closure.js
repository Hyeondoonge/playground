function counter() {
  let count = 0;

  function setCount(newCount) {
    count = newCount;
  }

  function increase() {
    setCount(count + 1);
  }

  function decrease() {
    setCount(count - 1);
  }

  function print() {
    console.log(count);
  }

  return {
    increase,
    decrease,
    print
  };
}

const { increase, decrease, print } = counter();

increase();
decrease();
decrease();
print();

// count 변수, setCount 함수 각각에는 JS 코드의 내부 동작방식에 따라
// counter 호출로 반환된 increase, decrease, print 함수만 접근할 수 있다.
