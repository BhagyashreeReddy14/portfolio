// Typing effect
const texts = ["Web Developer", "Frontend Developer", "Full Stack Developer", "React Developer"];
let textIndex = 0, charIndex = 0, isDeleting = false;

function type() {
  const el = document.getElementById("typed");
  const current = texts[textIndex];
  el.textContent = isDeleting ? current.substring(0, charIndex--) : current.substring(0, charIndex++);
  if (!isDeleting && charIndex === current.length + 1) { isDeleting = true; setTimeout(type, 1500); return; }
  if (isDeleting && charIndex === 0) { isDeleting = false; textIndex = (textIndex + 1) % texts.length; }
  setTimeout(type, isDeleting ? 60 : 100);
}
type();

// Navbar scroll
window.addEventListener("scroll", () => {
  document.getElementById("navbar").style.background =
    window.scrollY > 50 ? "rgba(13,17,23,0.98)" : "rgba(13,17,23,0.85)";
});

// Hamburger
document.getElementById("hamburger").addEventListener("click", () => {
  document.getElementById("nav-links").classList.toggle("open");
});

// Close nav on link click
document.querySelectorAll(".nav-links a").forEach(a => {
  a.addEventListener("click", () => document.getElementById("nav-links").classList.remove("open"));
});

// Fade-in on scroll
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => { if (e.isIntersecting) e.target.classList.add("visible"); });
}, { threshold: 0.1 });

document.querySelectorAll(".project-card, .skill-category, .stat-card, .timeline-item, .contact-item").forEach(el => {
  el.classList.add("fade-in");
  observer.observe(el);
});

// Contact form
function handleSubmit(e) {
  e.preventDefault();
  const btn = e.target.querySelector("button");
  btn.textContent = "Message Sent! âœ…";
  btn.style.background = "#22c55e";
  setTimeout(() => { btn.innerHTML = 'Send Message <i class="fas fa-paper-plane"></i>'; btn.style.background = ""; e.target.reset(); }, 3000);
}
