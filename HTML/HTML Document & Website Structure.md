# Document Basic Section.

1. Header

    일반적으로 큰 제목과 로고 등이 있는 부분이다.

2. Navigation Bar

    상단 메뉴바, 대부분 메뉴 버튼이나 링크로 표현된다.

    Header처럼 이 항목은 대부분 한 페이지에서 다른 페이지로 넘어가도 구성이 남아있다.

    많은 웹 디자이너들은 Navigation Bar를 개별적으로 사용하기 보다 Hearder의 일부로 다루지만 필수는 아니다.

    혹은 접근성을 위해 두 개로 나누는 것이 좋을 수도 있는데, 스크린 리더가 두 특징을 더 잘 읽을 수 있기 때문이다.

3. Main Content

    비디오, 이미지, 뉴스 등 중심 컨텐츠가 표시된다.

    각 페이지마다 다른 웹 사이트의 일부분이다.

4. Sidebar

    주변의 정보, 링크, 광고 등이 표시된다.

5. Footer

    페이지 바닥으로 작은 정보, 저작권, 연락처 등을 포함한다.

    Footer는 가끔 [SEO](https://developer.mozilla.org/ko/docs/Glossary/SEO) 목적으로 사용된다.

# Tag.

1. Header: `<header>`

    `<body>`의 자식일 때, Global Header가 된다.

    `<article>`, `<section>`의 자식일 때, Specific Header가 된다.

2. Navigation Bar: `<nav>`
3. Main Content: `<main>`

    Subsections: `<article>`, `<section>`, `<div>`

    `<article>` : encloses a block of related content that makes sense on its own without the rest of the page (e.g. a single blog post.) 

    `<section>` : is similar to <article>, but it is more for grouping together a single part of the page that constitutes one single piece of functionality (e.g. a mini map, or a set of article headlines and summaries.) It's considered best practice to begin each section with a heading;

4. Sidebar: `<aside>`, Often placed inside `<main>`.
5. Footer: `<footer>`

# 링크.

[Document and website structure](https://developer.mozilla.org/ko/docs/Learn/HTML/Introduction_to_HTML/Document_and_website_structure)