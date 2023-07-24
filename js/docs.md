## 실행 컨텍스트

자바스크립트가 실행되기위해 필요한 환경

1. 전역 실행 컨텍스트: 코드 실행 시 생성되는 컨텍스트로 전역에서 관리되는 값들을 관리
2. 함수 실행 컨텍스트: 함수가 호출될 때마다 생성되는 컨텍스트

### 콜 스택(실행 컨텍스트 스택)

LIFO 구조로 실행 컨텍스트가 관리된다. 이러한 구조를 통해 실행 순서를 관리하고, 현재 실행하는 코드를 파악할 수 있음.

[global] -> 전역 스코프에 선언된 변수 및 함수등의 정의

[global, foo] -> foo의 함수 컨텍스트가 생성되며 이 안의 식별자, 함수 정의 등을 평가함

[global, foo, bar] -> bar 실행 컨텍스트 생성

[global, foo] -> bar 동작 완료되어서 스택에서 꺼내고, foo를 이어서 실행

### 실행 컨텍스트 동작

1. 평가

- 실행 컨텍스트를 생성
- 현재 스코프 내에서 사용할 수 있는 모든 변수, 함수의 식별자를 실행 컨텍스트에 등록

2. 실행

- **선언문 제외한** 코드를 실행 ex) 변수에 값 할당, 함수 호출

### 실행 컨텍스트 내부

모든 실행 컨텍스트는 lexical enviornment라는 객체가 존재한다. 이는 스코프를 관리하는 역할을 하며, 변수, 함수 정의와 값들을 저장하는 역할이 있다.

그리고 또 그 밑에는 크게 두 가지 영역으로 분류되는 속성이 있다.

- EnvironmentRecord: 식별자 등록 및 관리
- OuterLexicalEnvironmentReference: 상위 스코프 참조

위에서 실행 컨텍스트는 평가 -> 실행 과정을 거친다고 했다.

평가하는 과정에서는 크게 식별자 생성, this binding, 참조할 외부 환경을 설정하는 등의 일이 발생한다. 그리고 이들은 컨텍스트에 기록된다. 그리고 이후 실행과정에서 변경된 값들은 컨텍스트에 기록된다.

여러 종류의 Context가 있다.

1. GlobalEnvironmentContext

자바스크립트 코드가 실행될 때 가장 먼저 GlobalContext가 먼저 생성된다. 전역에서 우리가 흔히 접근할 수 있는 빌트인 객체들이 글로벌 영역에 저장된다.

아래는 LexicalEnvironment의 구성요소

- DeclarativeEnvironmentRecord - let, const
- ObjectEnvirontmentRecord - var, 전역 함수, 빌트인 프로퍼티
- GlobalThisValue: global (this 값에 대한 참조를 전역객체인 global로 설정하게 됨)
- OuterLexcialEnvironmentReference: null (Global이 가장 바깥 scope이기 때문에)

2. FunctionEnvironmentContext

함수가 호출되면 Function 실행 컨텍스트가 생성되어 call stack에 쌓인다. 이때도 마찬가지로 평가 -> 실행 과정을 거친다.

아래는 LexicalEnvironment의 구성요소

- FunctionEnvironmnetRecord
  - 매개변수, 지역 변수, 함수 등록
  - this 바인딩 -> 함수 호출 방식에 따라 등록됨
- OuterEnvironmentReference

함수의 외부환경에 대한 참조는 함수가 **어디서 정의되었는지**에 따라 결정된다. 함수가 호출되기 전부터 외부 환경에 대한 정보는 알고있다는 얘기와도 같다고 볼 수 있다.

OuterEnvironemtReference는 함수가 정의되는 시점에 해당 함수에 대한 outer reference 정보를 상위 객체에서 저장하고 있다가, 함수를 호출하여 함수 실행 컨텍스트를 생성해야할 때 할당한다.

이를 통해 함수 실행 컨텍스트 생성 시, 외부 환경에 대한 참조값 할당이 가능한 것!

## 클로져(Closure)

함수 호출로 인해 반환되는 함수로, 반환된 함수는 선언될 당시의 외부 환경을 기억하고 있음

private field 사용, 실제로 react hooks api 구현할 때도 이 기술이 적용됨

```
function outer () {
  const x = 'hello, world'

  return function inner () {
    console.log("x", x)
  }
}

const inner = outer();
```

outer의 실행컨텍스트는 제거되지만, inner가 outer environment reference를 가지고 이를 통해 외부 환경에 접근한다.

⭐️ 실행 컨텍스트와 LexicalEnvironment 객체가 독립된 것이라는 것이 중요

> Garbage Collecting
>
> 매모리 관리를 자동화 하는 기술로, 고수준 프로그래밍 언어들은 이러한 과정을 엔진차원에서 자동으로 처리해줌
> 이때, 불필요한 정보들을 메모리에서 지운다
>
> 일반적으로 값이 더 이상 사용되지 않거나, 참조되지 않는다고 판단되면 해당 값을 제거하고 메모리를 점유 해제한다
