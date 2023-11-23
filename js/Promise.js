const type = 1

new Promise((resolve, reject) => {
  if (type === 0) {
    resolve('type is 0')
  } else {
    reject('type is 1')
  }
})
  .then(
    (onFullfilled) => {
      // resolve 호출 시 연쇄적으로 호출됨.
      console.log(onFullfilled)
    },
    (onRejected) => {
      console.log('error reason:', onRejected) // reject 호출 시 연쇄적으로 호출됨.
      throw 'code error ' + onRejected
    }
  )
  .catch((reason) => {
    console.log('error reason:', reason) // 이전
  })
  .finally(() => {
    console.log('successfully end') // 실행 보장
  })
