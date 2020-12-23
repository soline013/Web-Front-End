# HTML Basic.
## Element의 구조.
![image](https://user-images.githubusercontent.com/66259854/102993698-fbe1fa80-4560-11eb-9941-3df5d459c219.png)

  1. 여는 태그(Opening Tag).
  2. 닫는 태그(Closing Tag).
  3. 내용(Content).
  4. 요소(Element).

## Element의 종류.
  1. 블록 레벨 요소(Block-level Elements)
     
     줄바꿈이 있다. 일반적으로 페이지의 구조적 요소를 나타낼 때 사용한다.
     
     블록 레벨 요소는 다른 블록 레벨 요소에 중첩할 수 있다.
  
  2. 인라인 요소(Inline Elements)
     
     줄바꿈이 없다. 항상 블록 레벨 요소에 포함된다.
     
  3. 빈 요소(Empty Elements)
     
     이미지 첨부 등의 단일 태그를 사용하는 요소.
     
  4. HTML5에서, Element 종류를 재정의하였다.

## 속성(Attributes).
![image](https://user-images.githubusercontent.com/66259854/102993726-0603f900-4561-11eb-8e10-41c7bae2ffb3.png)

요소에 실제로 나타내진 않으나, 추가적인 내용을 담을 때 사용.

  1. 요소 이름과 속성 사이에는 공백이 있어야 함.
  2. 속성 이름 다음에는 '='가 붙음.
  3. 속성 값은 ""로 감싸야 함.

## Boolean Attributes.
```HTML
<input type="text" disabled="disabled">
<input type="text" disabled>
```
값이 없는 속성이다. 예를 들어 양식 입력 요소 `<input>`에 할당하면 입력이 비활성화 된다.

## HTML 문서의 구조.
```HTML
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>My test page</title>
  </head>
  <body>
    <p>This is my page</p>
  </body>
</html>
```
  1. `<!DOCTYPE HTML>`
     
     > 하지만 요즘에는 아무도 신경쓰지 않으며, 그저 모든 것이 제대로 작동하기 위해 포함되어야 하는 역사적 유물일 뿐입니다. 유효한 문서 형식을 나타내는 짧은 문장입니다.
     
  2. `<html> </html>` : 전체 페이지의 컨텐츠를 포함하는 기본 요소.
  3. `<head> </head>` : HTML 페이지의 모든 내용을 포함.
  4. `<meta charset="utf-8">` : 문자 인코딩 설정을 UTF-8로 지정.
  5. `<title> </title>` : 브라우저 탭에 표시되는 제목 설정.
  6. `<body> </body>` : 텍스트, 이미지, 비디오, 게임 등 페이지에 표시되는 모든 컨텐츠를 포함.

## HTML의 특수 문자.
| Literal Character | Character Reference Equivalent |
|--|--|
| < | \&lt; |
| > | \&gt; |
| " | \&quot; |
| ' | \&apos; |
| & | \&amp; |

## HTML 주석.
```HTML
<!-- 주석을 사용하는 방법. -->
```

## 번외.
  1. HTML은 대소문자를 구분하지 않는다.
  2. 큰 따옴표와 작은 따옴표는 똑같이 작동한다.
  3. HTML 요소 내에서 많은 공백, 줄 바꿈을 사용해도 렌더링에서 단일 공백으로 줄인다.
