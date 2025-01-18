import Lenis from 'lenis';

const lenis = new Lenis({
  duration: 1,
  easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
});

export default lenis;
