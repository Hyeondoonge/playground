## 실행 컨텍스트

자바스크립트가 실행되기위해 필요한 환경

1. 전역 실행 컨텍스트: 코드 실행 시 생성되는 컨텍스트로 전역에서 관리되는 값들을 관리
2. 함수 실행 컨텍스트: 함수가 호출될 때마다 생성되는 컨텍스트

### 콜 스택(실행 컨텍스트 스택)

LIFO 구조로 실행 컨텍스트가 관리된다

[global] -> 전역 스코프에 선언된 변수 및 함수등의 정의

[global, foo] -> foo의 함수 컨텍스트가 생성되며 이 안의 식별자, 함수 정의 등을 평가함

[global, foo, bar] -> bar 실행 컨텍스트 생성

[global, foo] -> bar 동작 완료되어서 스택에서 꺼내고, foo를 이어서 실행

이러한 구조를 통해 실행 순서를 관리함. 현재 실행하는 코드를 파악할 수 있음.

### 실행 컨텍스트 동작

1. 평가

   현재 스코프 내에서 사용할 수 있는 모든 변수, 식별자를 실행 컨텍스트에 등록

2. 실행

   선언문 제외한 코드를 실행 ex) 변수에 값 할당, 함수 호출

### 실행 컨텍스트 내부

LexicalEnvironment: 스코프 관리! 변수, 함수 정의와 값들 저장

- EnvorinmentRecord: 식별자 등록 및 관리
- OuterLexicalEnvironmentReference: 상위 스코프 참조

GlobalLexicalEnvironment

- DeclarativeEnvironmentRecord - let, const
- ObjectEnvirontmentRecord - var, 함수선언
- GlobalThisValue: global
- OuterLexcialEnvironmentReference: null (Global이 가장 바깥 scope)

FunctionExecutionContext (실행 시 생성)

- LexicalEnvironment
  - FunctionEnvironmnetRecord
    - 매개변수, 지역 변수, 함수 등록
    - this value 등록 -> 함수 호출 방식
  - OuterEnvironmentReference (평가될 때 알 수 있음)

실행 컨텍스트 평가 과정에서 식별자 생성, this binding, 참조할 외부 환경을 설정

OuterEnvironmentReference가 어떻게 컨텍스트의 실행 전 평가 시점에 결정이될 수 있는건지..?

함수의 외부환경에 대한 참조가 어디서 정의되었는지에 따라 결정되는 것, 함수가 정의되는 시점에 상위 슼콮에 참조 정보를 저장한 후에 이후 실행 시간에 context에서 참조할 수 있게 됨!
