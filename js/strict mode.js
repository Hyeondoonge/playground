// ES5부터 추가된 기능
// 𝙑 js 문법적 제한을 엄격히 적용함으로써, 잠재적인 오류나 JS 엔진의 최적화에 문제를
//   발생시킬 수 있는 코드에 명시적인 에러를 발생시킴
// 𝙑 전체 스크립트 뿐만 아니라 부분 함수에도 적용가능
// 𝙑 JS 모듈로서 사용시 자동으로 엄격모드로 설정됨

'use strict';

// 에러
// 1. 암묵적 전역
(function () {
  x = 1;
})();
console.log(x); // ReferenceError: x is not defined

// 2. 변수, 함수, 매개변수의 삭제
(function () {
  var x = 1;
  delete x; // SyntaxError: Delete of an unqualified identifier in strict mode.
})();

// 3. 중복된 매개변수 이름
(function () {
  function foo(x, x) {
    // SyntaxError: Duplicate parameter name not allowed in this context
    return x + x;
  }
  console.log(foo(1, 1));
})();

// 변화
// 1. 일반 함수의 this
// 원래 window or global을 참조하나, 일반함수 내에서 this를 사용할 필요가 없어 undefined로 설정
function f1() {
  console.log(this); // undefiend
}

// 2. arguments 객체
// arguments 객체에 변경된 인수 반영 X
function f2(a) {
  a = 3;
  console.log(a);
  console.log(arguments);
}

f2(1);

// 주의할 점
// 지원하지 않는 브라우저 (chreom 4~12, ie 6~9...)
// strict mode는 원래있던 기능이 아니기 때문에 이에 대해 대응해야한다.
