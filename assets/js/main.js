// GSAP
// Preloader
window.addEventListener('DOMContentLoaded', () => {
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  if (prefersDark) {
    document.body.classList.add('dark');
    document.getElementById('sunIcon').classList.add('opacity-0');
    document.getElementById('moonIcon').classList.remove('opacity-0');
    isDark = true;
  }
});

window.addEventListener('load', () => {
  gsap.to('.loader', {
    y: -30,
    repeat: -1,
    yoyo: true,
    duration: 0.6,
    ease: 'power1.inOut',
    stagger: {
      each: 0.2,
      repeat: -1,
      yoyo: true,
      ease: 'power1.inOut',
    }
  });
});
