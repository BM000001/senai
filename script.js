gsap.registerPlugin(ScrollTrigger);

// Animação inicial do título e descrição
gsap.from("#mainTitle", {
  duration: 1,
  y: 30,
  opacity: 0,
  ease: "power3.out",
  delay: 0.5,
});

gsap.from("#mainDesc", {
  duration: 1,
  y: 30,
  opacity: 0,
  ease: "power3.out",
  delay: 0.8,
});

// Animação da logo
gsap.from("#logo", {
  duration: 1,
  y: -20,
  opacity: 1,
  ease: "power3.out",
});

// Animação dos cards
gsap.utils.toArray(".team-card").forEach((card, i) => {
  gsap.from(card, {
    scrollTrigger: {
      trigger: card,
      start: "top bottom-=100",
      toggleActions: "play none none reverse",
    },
    duration: 1,
    y: 50,
    opacity: 0,
    rotation: 5,
    scale: 0.9,
    ease: "back.out(1.7)",
    delay: i * 0.1,
  });
});

// Animação das linhas tecnológicas
gsap.utils.toArray(".tech-line").forEach((line) => {
  gsap.from(line, {
    scrollTrigger: {
      trigger: line,
      start: "top bottom-=50",
      toggleActions: "play none none reverse",
    },
    duration: 1,
    width: 0,
    opacity: 0,
    ease: "power3.out",
  });
});

// Efeito de hover 3D nos cards
document.querySelectorAll(".team-card").forEach((card) => {
  card.addEventListener("mousemove", (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const xc = rect.width / 2;
    const yc = rect.height / 2;

    const dx = x - xc;
    const dy = y - yc;

    card.style.transform = `perspective(1000px) rotateY(${dx / 20}deg) rotateX(${-dy / 20}deg) translateZ(10px)`;
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform = "perspective(1000px) rotateY(0) rotateX(0) translateZ(0)";
  });
});