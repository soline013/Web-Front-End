# CSS Basic.
## 문서.
일반적으로 마크업 언어를 사용하여 구성된 텍스트 파일.

e.g. HTML, SVG, XML.

## 문서 제공.
사용 가능한 형식으로 문서를 변환하는 것.

e.g. Browsers, Firefox, Chrome, Edge.

## CSS 구문.
```CSS
h1 {
  color: red;
  font-size: 5em;
}

p {
  color: black;
}
````

CSS는 규칙 기반 언어이다.

웹페이지의 특정 요소, 요소 그룹에 적용할 스타일을 지정하는 규칙을 정의한다.

## 문서에 CSS 추가하기.
  1. HTML.
     ```HTML
     <head>
     <link rel="stylesheet" href="styles.css">
     </head>
     
     <body>
     <h1>Hello! Sollie!</h1>
     </body>
     ```
     
     `<link>` : `rel` 속성을 사용하는 스타일 시트와, `href` 속성으로 스타일 시트의 위치를 알려줌.
     
  2. CSS.
     ```CSS
     h1 {
      color: red;
     }
     ```

## Class로 CSS 사용하기.
```HTML
<ul>
  <li>항목 하나</li>
  <li class="special">항목 둘</li>
  <li>항목 <em>셋</em></li>
</ul>
```
```CSS
.special {
  color: orange;
  font-weight: bold;
}
```

## 문서에서의 위치에 따라 CSS 사용하기.
```CSS
li em {
	color: rebeccapurple;
}

h1 + p {
	font-size: 200%;
}
```
  1. 위치가 하위 요소라면, Descendant Combinator라는 선택자를 사용한다.
     
     단순히 두 개의 선택자 사이에 공백을 두면 된다.
  
  2. 위치가 동일한 계층 구조라면, Adjacent Sibling Combinator라는 선택자를 사용한다.
     
     두 개의 선택자 사이에 '+'를 추가한다.
