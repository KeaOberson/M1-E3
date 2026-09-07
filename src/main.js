import gsap from "gsap";

const blocks = document.querySelectorAll(".color-block");

gsap.from("h1", {
  scale: 0,
  rotation: -120,
  duration: 1.4,
  ease: "bounce.out",
});

gsap.from(blocks, {
  y: 100,
  rotation: (index) => (index - 1) * 8,
  opacity: 0,
  duration: 1,
  stagger: 0.16,
  delay: 0.35,
  ease: "back.out(1.7)",
});

blocks.forEach((block, index) => {
  gsap.to(block, {
    y: index % 2 === 0 ? -14 : 14,
    rotation: index === 1 ? -3 : 3,
    duration: 2.4 + index * 0.25,
    delay: 1.4 + index * 0.18,
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut",
  });

  block.addEventListener("mouseenter", () => {
    gsap.to(block, {
      scale: 1.08,
      boxShadow: "14px 14px 0 #171717",
      duration: 0.35,
      ease: "power2.out",
    });
  });

  block.addEventListener("mouseleave", () => {
    gsap.to(block, {
      scale: 1,
      boxShadow: "8px 8px 0 #171717",
      duration: 0.45,
      ease: "power2.out",
    });
  });
});
