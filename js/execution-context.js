// 1. text 식별자 정의 (평가)
let text = 'hello';
// 4. string 할당 (실행)

function printText() {
  // outer => global
  // 2. global 환경에서 printText 함수 정의 (평가)
  console.log(text);
}

function changeText(target) {
  // outer => global
  // 3. global 환경에서 changeText 함수 정의 (평가) => 해당 평가 과정이 끝나면, 2번째 줄로 돌아가 실행 과정을 거친다.
  text = target;
}

printText();
// 5. printText 호출 (실행) => hello

changeText('bye');
// 6. changeText 호출 (실행) => text = 'bye'

printText();
// 7. printText 호출 (실행) => hello
