gsap.registerPlugin(ScrollTrigger);

document.addEventListener("DOMContentLoaded", () => {
  
  // =========================
  // Hero Section Animations
  // =========================
  const tl = gsap.timeline();

  tl.to(".hero-subtitle", {
    opacity: 1,
    visibility: "visible",
    y: 0,
    duration: 1,
    startAt: { y: 20 },
    ease: "power3.out",
    delay: 0.2
  })
  .to(".hero-title", {
    opacity: 1,
    visibility: "visible",
    y: 0,
    duration: 1.2,
    startAt: { y: 50 },
    ease: "power4.out"
  }, "-=0.8")
  .to(".hero-btn", {
    opacity: 1,
    visibility: "visible",
    y: 0,
    duration: 0.8,
    startAt: { y: 20 },
    ease: "power3.out"
  }, "-=0.6");

  // حركة بطيئة لصورة الخلفية (Parallax)
  gsap.to(".hero-bg img", {
    y: "15%",
    ease: "none",
    scrollTrigger: {
      trigger: ".hero-section",
      start: "top top",
      end: "bottom top",
      scrub: true
    }
  });

  // =========================
  // Product Cards Animations (Scroll)
  // =========================
  gsap.utils.toArray(".fade-up").forEach((element) => {
    gsap.to(element, {
      opacity: 1,
      visibility: "visible",
      y: 0,
      duration: 0.8,
      startAt: { y: 50 },
      ease: "power3.out",
      scrollTrigger: {
        trigger: element,
        start: "top 85%", // يبدأ الأنيميشن عندما يظهر العنصر بنسبة 85% من الشاشة
        toggleActions: "play none none none"
      }
    });
  });
});