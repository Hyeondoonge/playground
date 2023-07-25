## 실행 컨텍스트

자바스크립트가 실행되기위해 필요한 환경이다. **전역 실행 컨텍스트**와 **함수 실행 컨텍스트** 두 가지로 분류된다.

1. 전역 실행 컨텍스트: 코드 실행 시 생성되는 컨텍스트로 전역에서 관리되는 값들을 관리
2. 함수 실행 컨텍스트: 함수가 호출될 때마다 생성되는 컨텍스트

<br>

### 콜 스택(실행 컨텍스트 스택)

LIFO 구조로 실행 컨텍스트가 관리된다. 이러한 구조를 통해 실행 순서를 관리하고, 현재 실행하는 코드를 파악할 수 있음.

[global] -> 전역 스코프에 선언된 변수 및 함수등의 정의

[global, foo] -> foo의 함수 컨텍스트가 생성되며 이 안의 식별자, 함수 정의 등을 평가함

[global, foo, bar] -> bar 실행 컨텍스트 생성

[global, foo] -> bar 동작 완료되어서 스택에서 꺼내고, foo를 이어서 실행

<br>

### 실행 컨텍스트의 동작

평가 후 실행하는 것을 기억하면 된다. 먼저 내부 코드를 쓱 훑어본다음 함수를 실행하는 것이다.

1. 평가

- 실행 컨텍스트를 생성
- 현재 스코프 내에서 사용할 수 있는 모든 변수, 함수의 식별자를 실행 컨텍스트에 등록

2. 실행

- **선언문 제외한** 코드를 실행 ex) 변수에 값 할당, 함수 호출

<br>

### 실행 컨텍스트를 구성하는 것

모든 실행 컨텍스트는 lexical enviornment라는 객체가 존재한다. 이는 스코프를 관리하는 역할을 하며, 변수, 함수 정의와 값들을 저장하는 역할이 있다.

그리고 또 그 밑에는 크게 두 가지 영역으로 분류되는 속성이 있다.

- EnvironmentRecord: 식별자 등록 및 관리
- OuterLexicalEnvironmentReference: 상위 스코프 참조

위에서 실행 컨텍스트는 평가 -> 실행 과정을 거친다고 했다.

평가하는 과정에서는 크게 식별자 생성, this binding, 참조할 외부 환경을 설정하는 등의 일이 발생한다. 그리고 이들은 컨텍스트에 기록된다. 그리고 이후 실행과정에서 변경된 값들은 컨텍스트에 기록된다.

여러 종류의 Context가 있다.

1. GlobalEnvironmentContext

자바스크립트 코드가 실행될 때 가장 먼저 GlobalContext가 먼저 생성된다. 전역에서 우리가 흔히 접근할 수 있는 빌트인 객체들이 글로벌 영역에 저장된다.

아래는 LexicalEnvironment의 구성요소이다.

- DeclarativeEnvironmentRecord - let, const
- ObjectEnvirontmentRecord - var, 전역 함수, 빌트인 프로퍼티
- GlobalThisValue: global (this 값에 대한 참조를 전역객체인 global로 설정하게 됨)
- OuterLexcialEnvironmentReference: null (Global이 가장 바깥 scope이기 때문에)

2. FunctionEnvironmentContext

함수가 호출되면 Function 실행 컨텍스트가 생성되어 call stack에 쌓인다. 이때도 마찬가지로 평가 -> 실행 과정을 거친다.

아래는 LexicalEnvironment의 구성요소이다.

- FunctionEnvironmnetRecord
  - 매개변수, 지역 변수, 함수 등록
  - this 바인딩 -> 함수 호출 방식에 따라 등록됨
- OuterEnvironmentReference

함수의 외부환경에 대한 참조는 함수가 **어디서 정의되었는지**에 따라 결정된다. 함수가 호출되기 전부터 외부 환경에 대한 정보는 알고있다는 얘기와도 같다고 볼 수 있다.

OuterEnvironemtReference는 함수가 정의되는 시점에 해당 함수에 대한 outer reference 정보를 상위 객체에서 저장하고 있다가, 함수를 호출하여 함수 실행 컨텍스트를 생성해야할 때 할당한다.

이를 통해 함수 실행 컨텍스트 생성 시, 외부 환경에 대한 참조값 할당이 가능한 것!

<br>

## 클로져(Closure)

> 클로저는 함수와 함수가 선언된 어휘적 환경의 조합이다. - mdn web docs

클로져라고 하는 것은 함수 호출로 인해 반환되는 함수이고, 반환된 함수는 선언될 당시의 외부 환경을 기억하고 있다.
이러한 동작이 가능한 것은 지금까지 살펴본 자바스크립트 동작 방식 때문이다.

```javascript
function outer() {
  const greet = 'hello, world';

  return function inner() {
    console.log('greet: ', greet);
  };
}

const inner = outer();
inner(); // greet: hello, world
```

함수의 호출이 끝나면 함수에 대한 실행 컨텍스트가 콜스택에서 제거된다. 그리고 이 실행컨텍스트에는 식별자, this 정보, outer reference 등에 대한 정보가 있다.

근데 어떻게 inner함수 내부에서 greet 식별자에 접근할 수 있는가 하면, outer 함수에 대한 실행 컨텍스트가 제거되지만 lexcial environment에 대한 정보는 사라지지 않기 때문이다.

아래는 실행 컨텍스트 객체의 예시코드로 Outer, Inner 각 prefix는 위에서 정의한 함수들의 환경임을 편의상 표현한 것이다.

Lexical environment가 context에 의존하지 않는 것을 볼 수 있다.
해당 값은 outer 실행 컨텍스트가 내부 코드를 읽으며 식별자, 함수 등을 정의할 때 그들의 environment로서 할당된다.

```javascript
const outer = {
  inner: {
    [[Environment]]: OuterFunctionLexicalEnvironment
  }
};

const OuterFunctionLexicalEnvironment = {
  // record, outer reference 정보 포함
};

const OuterFunctionContext = {
  lexicalEnvironment: OuterFunctionLexicalEnvironment
};
```

이를 통해 현재 lexical environment를 참조하고 있는 곳은 inner의 environment와 실행 컨텍스트 내부인 것을 알 수 있다.

중요한 것은 JS 가비지 컬렉터는 일반적으로 더이상 참조되지 않는 값은 메모리에서 제거한다는 점이다. 이러한 이유로
Outer 함수 실행이 끝나서 실행 컨텍스트가 제거되어 lexical environment에 대한 참조가 제거되더라도, inner 함수가 참조를 갖고있기 때문에 outer의 lexical environment가 유지되어 접근할 수 있는 것이다.

만약 실행컨텍스트가 제거될 때 lexical environment가 제거된다면 하위 스코프에서 상위 스코프의 데이터에 접근하지 못하게 될 것이다.

<br>

### 클로져의 활용

프라이빗하게 사용할 수 있는 메소드 또는 변수를 위해 클로져를 사용할 수 있다. 이를 통해 제한적인 접근 또는 전역 네임 스페이스 관리가 가능하다.

또한 실제로 React의 hooks API들은 클로져를 이용해 내부적으로 동작한다고 한다.

---
