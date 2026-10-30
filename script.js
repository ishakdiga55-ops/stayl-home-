gsap.registerPlugin(ScrollTrigger);

document.addEventListener("DOMContentLoaded", () => {
  
  // =========================
  // 1. حركة دخول النصوص في الهيرو
  // =========================
  const tl = gsap.timeline();
  tl.to(".hero-subtitle", { opacity: 1, visibility: "visible", y: 0, duration: 1, startAt: { y: 20 }, ease: "power3.out", delay: 0.2 })
    .to(".hero-title", { opacity: 1, visibility: "visible", y: 0, duration: 1.2, startAt: { y: 50 }, ease: "power4.out" }, "-=0.8")
    .to(".hero-btn", { opacity: 1, visibility: "visible", y: 0, duration: 0.8, startAt: { y: 20 }, ease: "power3.out" }, "-=0.6");

  // =========================
  // 2. تأثير Parallax (تحرك الصور ببطء عند التمرير)
  // =========================
  gsap.utils.toArray(".parallax-img").forEach((img) => {
    gsap.to(img, {
      yPercent: 20,
      ease: "none",
      scrollTrigger: {
        trigger: img.parentElement,
        start: "top bottom",
        end: "bottom top",
        scrub: true
      }
    });
  });

  // =========================
  // 3. تأثير كشف الصور (Clip-Path Reveal)
  // =========================
  gsap.utils.toArray(".image-reveal").forEach((container) => {
    gsap.to(container, {
      clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
      duration: 1.2,
      ease: "power4.inOut",
      scrollTrigger: {
        trigger: container,
        start: "top 85%",
        toggleActions: "play none none none"
      }
    });
  });

  // =========================
  // 4. المؤشر المخصص (Custom Cursor Logic)
  // =========================
  const cursorDot = document.querySelector(".cursor-dot");
  const cursorOutline = document.querySelector(".cursor-outline");
  
  // التحقق من أن المستخدم يستخدم ماوس وليس شاشة لمس
  if (window.matchMedia("(pointer: fine)").matches) {
    window.addEventListener("mousemove", (e) => {
      const posX = e.clientX;
      const posY = e.clientY;

      // حركة النقطة السريعة
      cursorDot.style.left = `${posX}px`;
      cursorDot.style.top = `${posY}px`;

      // حركة الدائرة مع تأخير بسيط (Smooth)
      gsap.to(cursorOutline, {
        left: `${posX}px`,
        top: `${posY}px`,
        duration: 0.15,
        ease: "power2.out"
      });
    });
  }
});