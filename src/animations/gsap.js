import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export const fadeUp = (selector) => {
  gsap.from(selector, {
    y: 50, // Reduced from 80 for a smoother feel
    opacity: 0,
    duration: 1.2,
    stagger: 0.3,
    ease: "power3.out", // Adds that premium, cinematic deceleration
    scrollTrigger: {
      trigger: selector,
      start: "top 90%", // Trigger slightly earlier
      toggleActions: "play none none none", // Ensures it plays immediately if in view
    },
  })
}
