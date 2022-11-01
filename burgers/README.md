# 🍔 Burger Lover
## 🖥 Preview
<p align="center">
  <img width="600" height="350" alt="login" src="https://user-images.githubusercontent.com/56065130/199156583-1036fc6d-6338-4610-a5ec-e04fe0ba2041.gif">
</p>
<a href="https://burger-lover.netlify.app" target="_blank">작품 구경가기</a>
<br /><br />

## 🧸 Description
인터랙티브한 웹 페이지에 관심이 많습니다. 그래서 좋아하는 수제버거를 가지고 기본적인 스크롤 애니메이션을 구현해보았습니다. 모든 사진들은 다운타우너, 더프타운, 미국식 인스타그램 피드에서 가져왔습니다.
<br /><br />

## 🛠 Stacks
HTML CSS
<br /><br />

## 🖍 I learned
### ✅ Intersection Observer API 
<a href="https://developer.mozilla.org/ko/docs/Web/API/Intersection_Observer_API" target="_blank">docs 바로가기</a>

예전에 당근 게임을 만들 때에는 `Element.getBoundingClientRect()`를 사용하여 게임 필드 내의 intersection 감지를 구현하였다. 하지만 더 복잡한 사이트의 경우, 해당 메서드를 호출하는 여러 이벤트 핸들러와 루프가 얽혀 있을 것이고 모든 코드가 메인 스레드에서 실행되므로 이중 어느 것 하나라도 성능 문제를 일으킬 가능성이 있었다.

이에 대해 메인 스레드를 사용하지 않고, 교차 영역을 최적으로 관리하기 위해 Intersection Observer API를 사용한다.

이 API는 감시하고자 하는 요소가 상위 요소나 뷰포트와 교차하는 시점을 비동기적으로 감지하는 방법으로 타겟 요소가 다른 요소에 들어가거나 나갈때 두 요소의 교차부분이 변경될 때 마다 실행될 콜백 함수를 등록할 수 있게 한다. 하지만 교차 시점을 정확한 px단위로 감지하지는 못하고 threshold 옵션을 사용해 %단위로 감지한다는 아쉬운 점이 있다.
``` javascript
const options = {
  root: null,
  rootMargin: "0px",
  threshold: 0.4,
};

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.children[0].classList.add('active')
    } else {
      entry.target.children[0].classList.remove('active')
    }
  })
}, options);

const targets = document.querySelectorAll('.bg');
targets.forEach(el => { observer.observe(el)});
```
<br /><br />

## 👩‍💻 Improvement Directions