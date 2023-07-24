const returnCallback = () => {
  let a = 3;

  function changeA(d) {
    a = d;
  }

  function printA() {
    console.log(a);
  }

  return { changeA, printA };
};

const { changeA, printA } = returnCallback();

// printA();
// changeA(6);
// printA();

const callback = () => printA();
callback(); // callback이 호출되면 선언된 코드를 수행한다
changeA(6);
callback();
