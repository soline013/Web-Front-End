# HTML Tag & Attribution Achive

Ctrl + F를 눌러 원하는 Tag를 찾을 수 있습니다.

1. `<html> </html>` : 전체 페이지의 컨텐츠를 포함하는 기본 요소.

---

2. `<head> </head>` : HTML 페이지의 Metadata를 포함. e.g. title, script, stylesheets, etc.

    1. `<meta>` : 공식적인 Metadata 적용.
        - `<meta>`의 속성.

            `charset` : "utf-8"로 문자 인코딩 설정을 UTF-8로 지정.

            `name` : 정보를 알아보기 위한 이름. "author", "description"

            `content` : 실제 Metadata의 컨텐츠.

    2. `<script> </script>` : HTML에서 Javascript를 설정할 수 있다.
        - `<script>`의 속성.

            `src` : 링크에 해당하는 JS 파일을 가져온다.

            현업에서는 거의 사용하지 않는다고 한다.

    3. `<style>` : HTML에서 CSS를 설정할 수 있다.
    4. `<title> </title>` : 브라우저 탭에 표시되는 제목 설정.

---

3. `<body> </body>` : 텍스트, 이미지, 비디오, 게임 등 페이지에 표시되는 실제 문서 내용을 포함.

    - Block Level.
        1. `<p> </p>` : 블록 레벨 요소. 단락. 평문 텍스트.
        2. `<blockquote> </blockquote>` : 블록 레벨 인용구. 들여쓰기 할 때 사용할 수 있다.
        3. `<h1> </h1>` : 대제목.
        4. `<h2> </h2>` : 중제목.
        5. `<h3> </h3>` : 소제목.
        6. `<h4> </h4>` : 소소제목.
        7. `<h5> </h5>` : 소소소제목.
        8. `<h6> </h6>` : 소소소소제목.
        9. `<div> </div>` : Container Tag. 태그 자체에 의미가 없다. 사용 빈도가 매우 높아졌는데, 현재 웹은 문서 형태에서 많이 벗어났기 때문이다.
        10. `<pre> </pre>` : 공백과 줄바꿈을 그대로 출력한다.

    - Inline Level.
        1. `<em> </em>`, `<i> </i>` : Italic 강조 효과.
        2. `<strong> </strong>`, `<b> </b>` : Bold 강조 효과.
        3. `<mask> </mask>` : Highlighter 강조 효과.
        4. `<del> </del>`, `<s> </s>` : Strikeout 강조 효과.
        5. `<ins> </ins>`, `<u> </u>` : Underline 강조 효과.
        6. `<sub> </sub>` : 아래 첨자.
        7. `<sup> </sup>` : 위 첨자.
        8. `<q> </q>` : 인라인 인용구. 쌍 따옴표.
        9. `<br>` : 줄바꿈.
        10. `<hr>` : 구분선.
        11. `<span> </span>` : 인라인 요소. 자체는 어떠한 의미가 없이 사용된다.
        12. `<li> </li>` : 글머리 기호.

4. `<dl> </dl>` : Description Lists. 용어 및 정의, 질문 및 답변.
5. `<dt> </dt>` : 용어, 질문 등 상위 항목.
6. `<dd> </dd>` : 정의, 답변 등 하위 항목.
7. `<ul> </ul>` : 순서가 없는 목록.
8. `<ol> </ol>` : 순서가 있는 목록.
9. `<abbr> </abbr>` : 약어를 나타낸다.
    - `<abbr> </abbr>`의 속성.

        `title` : 마우스를 올리면 표현되는 원래 용어를 정의한다.

10. `<a> </a>` : Hyperlink 정의. 내부 링크.
    - `<a> </a>`의 속성.

        `href` : 연결하고자 하는 문서의 위치 지정. "mailto:"로 이메일 주소 입력. #id 속성값으로 내부 링크 지정.

        `title` : 링크에 대한 추가 정보 제공. 링크 위로 마우스를 옮기면 표현된다.

        `target` : 링크가 어떻게 열리는지 지정. _self, _blank, _parent, _top.

11. `<cite> </cite>` : \<a>에 같이 사용되어 출처를 표시할 수 있다.

12. `<link>` : 문서 간 연결, 외부 리소스 연결. Favicon. CSS Stylesheets.
    - `<link>`의 속성.

        `rel` : 연결된 문서와의 관계 정의.

        `href` : 연결하고자 하는 문서의 위치 지정.

        `type` : "image/x-icon"

        `size` : 크기 지정.

     

13. `<img>` : 이미지 첨부.
    - `<img>`의 속성.

        `src` : 링크에 해당하는 사진을 가져온다.

        `alt` : 아마도 설명.

14. `<input>` : 양식 입력.
    - `<input>`의 속성.

        `type` : "text", "number"

15. `<address> </address>` : 연락처 세부 정보를 표시한다.
16. `<time> </time>` : 기계가 읽을 수 있는 형식으로 시간과 날짜를 표시한다.
    - `<time> </time>`의 속성.

        `datetime` : 여러 방식으로 날짜를 표기한다.

17. `<code> </code>` : 코드를 표시한다.
18. `<var> </var>` : 변수 이름을 특별하게 표시한다.
19. `<kbd> </kbd>` : 키보드 및 기타 유형의 입력을 표시한다.
20. `<samp> </samp>` : 컴퓨터 프로그램의 출력을 표시한다.

21. `<header>` : Header Structure.
22. `<nav>` : Navigation Bar Structure.
23. `<main>` : Main Content Structure.
24. `<article>`, `<section>`, `<div>` : Subsections of Main Content.
25. `<aside>` : Sidebar Structure. Often placed inside `<main>`.
26. `<footer>` : Footer Structure.

---

1. `style=""` 속성으로 CSS를 설정할 수 있다.
2. `lang=""` 페이지의 언어를 설정할 수 있다.
3. `id=""` 문서 내부의 특정 부분에 연결할 수 있다.

    ```html
    <h2 id="Mailing_address">Mailing address</h2>

    <!--contact.html의 #Mailing_address로 이동.-->
    <p>Want to write us a letter? Use our <a href="contacts.html#Mailing_address">mailing address</a>.</p>

    <!--동일한 문서의 #Mailing_address로 이동.-->
    <p>The <a href="#Mailing_address">company mailing address</a> can be found at the bottom of this page.</p>
    ```

4. `class=""`

# Attribution

1. 속성의 선언 순서는 태그에 영향을 미치지 않는다.
2. 모든 태크에 사용할 수 있는 글로벌 속성과, 특정 태그에 사용할 수 있는 속성이 있다.
3. 선택적 속성과, 특정 태그에 필수 속성이 있다.