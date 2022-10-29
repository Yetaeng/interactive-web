const options = {
  root: null,
  rootMargin: "0px",
  threshold: 0.4,
};

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      console.log(entry.target.children[0])
      entry.target.children[0].classList.add('active')
    } else {
      entry.target.children[0].classList.remove('active')
    }
  })
}, options);

const targets = document.querySelectorAll('.bg');
targets.forEach(el => { observer.observe(el)});