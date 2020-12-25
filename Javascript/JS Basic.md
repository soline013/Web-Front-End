# JS Basic.

## 문(Statement).

문법 구조(Syntax Structure), 명령어(Command)를 의미한다.

문은 세미클론으로 구분한다.

## 세미클론(Semicolon).

줄 바꿈이 있다면 세미클론을 생략할 수 있다.

JS는 줄 바꿈의 경우 암시적 세미클론으로 해석하는데, 이를 세미클론 자동 삽입이라 한다.

따라서 많은 경우, 줄 바꿈은 세미클론을 의미한다.

## 주석(Comment).

주석은 C와 구조가 같다.

## 엄격 모드(Strict Mode).

JS는 기존의 기능을 변경하지 않으면서 새로운 기능이 추가되었다.

긴 시간 호환성 이슈가 없었지만, 2009년 ES5가 나오며 기존 기능의 변화가 생겼고, 호환성 이슈 또한 발생했다.

그래서 ES5를 기본 모드로 사용할 때는 기존 기능의 변화가 적용되지 않는다.

대신, `use strict`라는 지시자로 엄격 모드를 활성화하면, 기존 기능의 변화가 적용된다.

## `use strict`

```jsx
"use strict"
'use strict'

//해당 코드는 모던한 방식으로 실행됩니다.
...
```

주의사항.
1. `"use strict"`는 반드시 최상단에 있어야 한다.
2. 함수 본문 상단에 있다면 해당 함수만 적용된다.
3. `"use strict"`를 취소할 방법은 없다.
4. 브라우저 콘솔의 디폴트는 기본 모드이다.
5. 클래스와 모듈을 사용하면 `"use strict"`가 자동 적용된다.

## 변수(Variable).

```jsx
//let 키워드를 사용하여 변수를 생성한다. '='으로 값을 할당한다.
let message;
message = 'Hello';

//변수 선언와 값 할당을 한 줄에 작성할 수 있다.
let message = 'Hello';

//한 줄에 여러 변수를 선언할 수 있다.
let message = 'Hello', user = 'Sollie';

//var 키워드도 동일하게 작동한다. 그러나 오래된 방식이다.
var message = 'Hello';
```

## 변수 명명 규칙.

1. 문자와 숫자, 기호 `$`와 `_`만 들어갈 수 있다.
2. 첫 글자는 숫자가 올 수 없다.
3. 대소문자를 구분한다.
4. 비 라틴계 언어도 사용할 순 있다.
5. 예약어는 사용할 수 없다.

- 번외. 카멜 표기법(camelCase).

    여러 단어를 조합하여 변수명을 만들 때 흔히 사용되는 방식.

    userName처럼 첫 단어를 제외한 단어의 첫 글자가 대문자.

## 상수(Constant).

```jsx
//const 키워드를 사용하여 변화하지 않는 변수, 상수를 생성한다.
//주로 대문자와 밑줄을 사용한다.
const START_MESSAGE = 'Hello';
```

## 자료형.

```jsx
//No Error.
let message = "Hello";
message = 123456;
```

자료형은 있지만 변수에 저장되는 값의 타입은 바뀔 수 있으므로 동적 타입(Dynamically Typed) 언어이다.

- 숫자형.

    ```jsx
    //정수 및 실수를 나타낸다.
    let n = 123;
    n = 123.45;

    //Infinity, NaN과 같은 특수 숫자 값을 포함한다.
    alert(1 / 0); //Infinity.
    alert(Infinity); //Infinity 직접 참조.
    alert("숫자가 아님" / 2); //NaN. NaN은 잘 바뀌지 않는다.
    ```

    > 말도 안 되는 수학 연산을 하더라도 스크립트는 치명적인 에러를 내뿜으며 죽지 않습니다. `NaN`을 반환하며 연산이 종료될 뿐입니다.

- BigInt.

    ```jsx
    //끝에 'n'이 붙이면 BigInt 자료형이다.
    const bigInt = 123456789012345678901234567890n;
    ```

    내부 표현 방식의 한계로 JS는 $(2^{53}-1)(9007199254740991)$ 보다 큰 값,

    $-(2^{53}-1)$ 보다 작은 값은 숫자형으로 표현할 수 없다.

    `BigInt`형은 표준으로 채택된 지 얼마 안 된 자료형으로, 길이에 상관없이 정수를 나타낼 수 있다.

- 문자형.

    ```jsx
    //"", ''는 차이를 두지 않는다.
    let str = "Hello";
    let str2 = 'world';

    //백틱(Backtict)은 ${...}에 원하는 변수, 표현식을 쉽게 넣을 수 있다.
    let name = "Sollie";
    let str3 = `Hello, ${name}`;
    ```

- 불린형.

    ```jsx
    //True나 False 값을 저장한다.
    let yes = true;
    let no = false;

    //비교 결과를 저장할 때도 사용된다.
    let isGreater = 4 > 1;
    alert(isGreater); //true.
    ```

- null 값.

    ```jsx
    let i = null;
    ```

    JS의 `null`은 존재하지 않는 값(Nothing), 비어 있는 값(Empty), 알 수 없는 값(Unknown)을 의미한다.

- undefined 값.

    ```jsx
    let i;
    alert(i); //undefined가 출력된다.

    //undefined를 명시적으로 할당할 수 있지만 null을 사용하자.
    let i = 100;
    i = undefined; //undefined를 명시적으로 할당.
    alert(i); //undefined.
    ```

- 객체형.

    다른 자료형은 문자열이나 숫자나 한 가지만 표현할 수 있어 원시 자료형이라 부른다.

    하지만 객체는 데이터 컬렉션이나 개체를 표현할 수 있다.

- 심볼형.

    객체의 고유한 식별자(unique identifier)를 만들 때 사용된다.

## `typeof` 연산자.

`typeof`는 인수의 자료형을 반환한다.

두 가지 형태의 문법을 지원한다.

1. 연산자: `typeof x`
2. 함수: `typeof(x)`

```jsx
typeof undefined // "undefined"

typeof 0 // "number"

typeof 10n // "bigint"

typeof true // "boolean"

typeof "foo" // "string"

typeof Symbol("id") // "symbol"

typeof Math // "object"  1.

typeof null // "object"  2.

typeof alert // "function"  3.
```

1. Math는 수학 연산을 제공하는 내장 객체이므로 "object"가 출력된다.
2. `null`은 별도의 고유한 자료형을 갖지만, 하위 호환성 유지를 위해 남겨둔 것이다.
3. `typeof`는 피연산자가 함수면 "function"을 출력한다. 함수는 객체형에 속하지만, 하위 호환성 유지를 위해 남겨두었다.
