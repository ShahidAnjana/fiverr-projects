// 🔼 Back to Top Button
const topBtn = document.getElementById('topBtn');

window.onscroll = function () {
  if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
    topBtn.style.display = "block";
  } else {
    topBtn.style.display = "none";
  }
};

function topFunction() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// 🌟 Smooth scroll for all project links
document.querySelectorAll('a.project-link[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// 🎈 Optional: subtle scale animation for hero bubbles on scroll
const bubbles = document.querySelectorAll('.hero .bubbles span');
window.addEventListener('scroll', () => {
  const scrollPos = window.scrollY;
  bubbles.forEach((bubble, i) => {
    bubble.style.transform = `translateY(${scrollPos * 0.05 + i * 10}px) scale(1)`;
  });
});
