# π Burger Lover
## π₯ Preview
<p align="center">
  <img width="600" height="350" alt="login" src="https://user-images.githubusercontent.com/56065130/199156583-1036fc6d-6338-4610-a5ec-e04fe0ba2041.gif">
</p>
<a href="https://burger-lover.netlify.app" target="_blank">μν κ΅¬κ²½κ°κΈ°</a>
<br /><br />

## π§Έ Description
μΈν°λν°λΈν μΉ νμ΄μ§μ κ΄μ¬μ΄ λ§μ΅λλ€. κ·Έλμ μ’μνλ μμ λ²κ±°λ₯Ό κ°μ§κ³  κΈ°λ³Έμ μΈ μ€ν¬λ‘€ μ λλ©μ΄μμ κ΅¬νν΄λ³΄μμ΅λλ€. λͺ¨λ  μ¬μ§λ€μ λ€μ΄νμ°λ, λννμ΄, λ―Έκ΅­μ μΈμ€νκ·Έλ¨ νΌλμμ κ°μ Έμμ΅λλ€.
<br /><br />

## π  Stacks
HTML CSS
<br /><br />

## π I learned
### β Intersection Observer API 
<a href="https://developer.mozilla.org/ko/docs/Web/API/Intersection_Observer_API" target="_blank">docs λ°λ‘κ°κΈ°</a>

μμ μ λΉκ·Ό κ²μμ λ§λ€ λμλ `Element.getBoundingClientRect()`λ₯Ό μ¬μ©νμ¬ κ²μ νλ λ΄μ intersection κ°μ§λ₯Ό κ΅¬ννμλ€. νμ§λ§ λ λ³΅μ‘ν μ¬μ΄νΈμ κ²½μ°, ν΄λΉ λ©μλλ₯Ό νΈμΆνλ μ¬λ¬ μ΄λ²€νΈ νΈλ€λ¬μ λ£¨νκ° μ½ν μμ κ²μ΄κ³  λͺ¨λ  μ½λκ° λ©μΈ μ€λ λμμ μ€νλλ―λ‘ μ΄μ€ μ΄λ κ² νλλΌλ μ±λ₯ λ¬Έμ λ₯Ό μΌμΌν¬ κ°λ₯μ±μ΄ μμλ€.

μ΄μ λν΄ λ©μΈ μ€λ λλ₯Ό μ¬μ©νμ§ μκ³ , κ΅μ°¨ μμ­μ μ΅μ μΌλ‘ κ΄λ¦¬νκΈ° μν΄ Intersection Observer APIλ₯Ό μ¬μ©νλ€.

μ΄ APIλ κ°μνκ³ μ νλ μμκ° μμ μμλ λ·°ν¬νΈμ κ΅μ°¨νλ μμ μ λΉλκΈ°μ μΌλ‘ κ°μ§νλ λ°©λ²μΌλ‘ νκ² μμκ° λ€λ₯Έ μμμ λ€μ΄κ°κ±°λ λκ°λ λ μμμ κ΅μ°¨λΆλΆμ΄ λ³κ²½λ  λ λ§λ€ μ€νλ  μ½λ°± ν¨μλ₯Ό λ±λ‘ν  μ μκ² νλ€. νμ§λ§ κ΅μ°¨ μμ μ μ νν pxλ¨μλ‘ κ°μ§νμ§λ λͺ»νκ³  threshold μ΅μμ μ¬μ©ν΄ %λ¨μλ‘ κ°μ§νλ€λ μμ¬μ΄ μ μ΄ μλ€.
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

## π©βπ» Improvement Directions