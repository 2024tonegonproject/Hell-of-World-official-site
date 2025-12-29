const targets = document.querySelectorAll('.fade-up');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
      // 一度だけアニメさせたい場合は unobserve
      observer.unobserve(entry.target);
    }
  });
});

targets.forEach(target => observer.observe(target));