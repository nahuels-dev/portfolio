class Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  s: number;
  c: string;
  sx: number;
  sy: number;

  constructor(x: number, y: number, c: string, s: number) {
      this.x = Math.random() * window.innerWidth;
      this.y = Math.random() * window.innerHeight;
      this.vx = 0;
      this.vy = 0;
      this.s = s;
      this.c = c;
      this.sx = x;
      this.sy = y;
  }

  update(width: number, height: number) {
      const fx = (this.sx - this.x) * 0.05;
      const fy = (this.sy - this.y) * 0.05;
      this.vx += fx;
      this.vy += fy;
      this.vx *= 0.9;
      this.vy *= 0.9;
      this.x += this.vx;
      this.y += this.vy;

      if (this.x < 0 || this.x > width) this.vx *= -1;
      if (this.y < 0 || this.y > height) this.vy *= -1;
  }

  render(context: CanvasRenderingContext2D) {
      context.fillStyle = this.c;
      context.beginPath();
      context.arc(this.x, this.y, this.s / 2, 0, Math.PI * 2);
      context.fill();
  }
}

export class ParticleCanvas {
  private canvas: HTMLCanvasElement;
  private context: CanvasRenderingContext2D;
  private particles: Particle[] = [];
  private particleSize: number;
  private particleGap: number;
  private isBW: boolean;
  private radiusEffect: number;
  private mouseX: number = 0;
  private mouseY: number = 0;

  constructor(
      canvas: HTMLCanvasElement,
      imageSrc: string,
      particleSize = 4,
      particleGap = 1,
      isBW = false,
      radiusEffect = 6
  ) {
      this.canvas = canvas;
      this.context = canvas.getContext('2d', { willReadFrequently: true })!;
      this.particleSize = particleSize;
      this.particleGap = particleGap;
      this.isBW = isBW;
      this.radiusEffect = radiusEffect;

      this.loadImage(imageSrc);
      this.canvas.addEventListener('mousemove', this.handleMouseMove.bind(this));
  }

  private loadImage(src: string) {
      const image = new Image();
      image.crossOrigin = 'Anonymous';
      image.src = src;

      image.onload = () => {
          const aspectRatio = image.height / image.width;
          const width = window.innerWidth <= 700 ? 400 : 700;
          const height = width * aspectRatio;

          this.canvas.width = width;
          this.canvas.height = height;

          this.context.drawImage(image, 0, 0, width, height);

          const idata = this.context.getImageData(0, 0, width, height);
          const data = idata.data;

          if (this.isBW) {
              for (let i = 0; i < data.length; i += 4) {
                  const grayscale = data[i] * 0.3 + data[i + 1] * 0.59 + data[i + 2] * 0.11;
                  data[i] = data[i + 1] = data[i + 2] = grayscale;
              }
              this.context.putImageData(idata, 0, 0);
          }

          this.context.clearRect(0, 0, width, height);

          for (let y = 0; y < height; y += this.particleSize * this.particleGap) {
              for (let x = 0; x < width; x += this.particleSize * this.particleGap) {
                  const o = x * 4 + y * 4 * idata.width;
                  if (data[o + 3] > 210) {
                      const c = `rgba(${data[o]},${data[o + 1]},${data[o + 2]},${data[o + 3]})`;
                      const p = new Particle(x, y, c, this.particleSize);
                      this.particles.push(p);
                  }
              }
          }

          this.update();
          this.render();
      };
  }

  private handleMouseMove(event: MouseEvent) {
      const rect = this.canvas.getBoundingClientRect();
      this.mouseX = event.clientX - rect.left;
      this.mouseY = event.clientY - rect.top;
  }

  private update() {
      for (const particle of this.particles) {
          const dx = this.mouseX - particle.x;
          const dy = this.mouseY - particle.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < this.radiusEffect * 10) {
              const effect = 1 - dist / (this.radiusEffect * 10);
              particle.vx -= effect * dx * 0.1;
              particle.vy -= effect * dy * 0.1;
          }
          particle.update(this.canvas.width, this.canvas.height);
      }
      setTimeout(() => this.update(), 1000 / 60);
  }

  private render() {
      this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
      for (const particle of this.particles) {
          particle.render(this.context);
      }
      requestAnimationFrame(() => this.render());
  }
}
