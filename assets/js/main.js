// Anime.js animations on load
anime({
  targets: "#title",
  translateY: [-50, 0],
  opacity: [0, 1],
  duration: 1500,
  easing: "easeOutElastic(1, .8)",
});

anime({
  targets: "#subtitle",
  translateY: [50, 0],
  opacity: [0, 1],
  delay: 500,
  duration: 1200,
  easing: "easeOutExpo",
});

let isDark = false;

function toggleDarkMode() {
  const body = document.body;
  const sun = document.getElementById("sunIcon");
  const moon = document.getElementById("moonIcon");
  const button = document.getElementById("modeToggle");

  // Rotate animation
  anime({
    targets: button,
    rotate: "1turn",
    duration: 800,
    easing: "easeInOutSine",
  });

  // Toggle dark class
  isDark = !isDark;
  body.classList.toggle("dark");

  // Crossfade
  if (isDark) {
    sun.classList.add("opacity-0");
    moon.classList.remove("opacity-0");
  } else {
    moon.classList.add("opacity-0");
    sun.classList.remove("opacity-0");
  }
}

// On load: match to current mode
window.addEventListener("DOMContentLoaded", () => {
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  if (prefersDark) {
    document.body.classList.add("dark");
    document.getElementById("sunIcon").classList.add("opacity-0");
    document.getElementById("moonIcon").classList.remove("opacity-0");
    isDark = true;
  }
});
