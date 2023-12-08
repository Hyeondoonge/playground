// [비동기 요청에서 발생한 에러 핸들링]

// # 예제코드
// 다음 코드의 실행결과를 예측해보자.
function getError() {
  return new Promise((_, reject) => {
    reject('Boom!')
  })
}

try {
  getError()
} catch (error) {
  console.log(error)
}

// # 실행결과
// UnhandledPromiseRejection 에러 발생. 즉 비동기 함수에서 발생한 에러를 잡아서 처리하지 못함.
// why? 내부 동작에 의해, 비동기 함수의 (에러)결과를 반환되는 시점에
// 이미 try, catch 코드는 끝나있다. 즉 동기적인 코드의 실행이 끝난 후
// 비동기 함수가 실행되기 때문에 올바르게 처리하지 못한다.

// # 올바르게 처리하는 방법
// 1. Promise의 후속 메서드
getError().catch((error) => {
  console.log(error) // Boom!
})

// 2. Await 키워드
async function solutionWithAwait() {
  try {
    await getError()
  } catch (error) {
    console.log(error) // Boom!
  }
}

solutionWithAwait()
