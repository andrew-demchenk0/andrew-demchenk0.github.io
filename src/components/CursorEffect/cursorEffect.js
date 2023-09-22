import { TweenLite, Circ } from 'gsap';

document.addEventListener('DOMContentLoaded', function() {
  let width, height, canvas, ctx, points, target, animateHeader = true;

  // Main
  initHeader();
  initAnimation();
  addListeners();

  function initHeader() {
    width = window.innerWidth;
    height = Math.max(
      document.body.scrollHeight,
      document.documentElement.scrollHeight,
      document.body.offsetHeight,
      document.documentElement.offsetHeight,
      document.body.clientHeight,
      document.documentElement.clientHeight
    );
    target = { x: width / 2, y: height / 2 };

    canvas = document.getElementById('canvas');
    canvas.width = width;
    canvas.height = height;
    ctx = canvas.getContext('2d');

    // create points
    points = [];
    for (let x = 0; x < width; x = x + width / 20) {
      for (let y = 0; y < height; y = y + height / 20) {
        const px = x + Math.random() * (width / 20);
        const py = y + Math.random() * (height / 20);
        const p = { x: px, originX: px, y: py, originY: py };
        points.push(p);
      }
    }

    // for each point find the 5 closest points
    for (let i = 0; i < points.length; i++) {
      const closest = [];
      const p1 = points[i];
      for (let j = 0; j < points.length; j++) {
        const p2 = points[j];
        if (p1 !== p2) {
          let placed = false;
          for (let k = 0; k < 5; k++) {
            if (!placed) {
              if (closest[k] === undefined) {
                closest[k] = p2;
                placed = true;
              }
            }
          }

          for (let k = 0; k < 5; k++) {
            if (!placed) {
              if (getDistance(p1, p2) < getDistance(p1, closest[k])) {
                closest[k] = p2;
                placed = true;
              }
            }
          }
        }
      }
      p1.closest = closest;
    }

    // assign a circle to each point
    for (const p of points) {
      const c = new Circle(p, 2 + Math.random() * 2, 'rgba(255,255,255,0.3)');
      p.circle = c;
    }
  }

  // Event handling
  function addListeners() {
    if (!('ontouchstart' in window)) {
      window.addEventListener('mousemove', mouseMove);
    }
    window.addEventListener('scroll', scrollCheck);
    window.addEventListener('resize', resize);
  }

  function mouseMove(e) {
    const posx = e.pageX || (e.clientX + document.body.scrollLeft + document.documentElement.scrollLeft);
    const posy = e.pageY || (e.clientY + document.body.scrollTop + document.documentElement.scrollTop);
    target.x = posx;
    target.y = posy;
  }

  function scrollCheck() {
    animateHeader = document.body.scrollTop <= height;
  }

  function resize() {
    width = window.innerWidth;
    height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;
  }

  // animation
  function initAnimation() {
    animate();
    for (const p of points) {
      shiftPoint(p);
    }
  }

  function animate() {
    if (animateHeader) {
      ctx.clearRect(0, 0, width, height);
      for (const p of points) {
        // detect points in range
        if (Math.abs(getDistance(target, p)) < 4000) {
          p.active = 0.3;
          p.circle.active = 0.6;
        } else if (Math.abs(getDistance(target, p)) < 20000) {
          p.active = 0.1;
          p.circle.active = 0.3;
        } else if (Math.abs(getDistance(target, p)) < 40000) {
          p.active = 0.02;
          p.circle.active = 0.1;
        } else {
          p.active = 0;
          p.circle.active = 0;
        }

        drawLines(p);
        p.circle.draw();
      }
    }
    requestAnimationFrame(animate);
  }

  function shiftPoint(p) {
    TweenLite.to(p, 1 + Math.random(), {
      x: p.originX - 50 + Math.random() * 100,
      y: p.originY - 50 + Math.random() * 100,
      ease: Circ.easeInOut,
      onComplete: () => {
        shiftPoint(p);
      },
    });
  }

  // Canvas manipulation
  function drawLines(p) {
    if (!p.active) return;
    for (const closestP of p.closest) {
      ctx.beginPath();
      ctx.moveTo(p.x, p.y);
      ctx.lineTo(closestP.x, closestP.y);
      ctx.strokeStyle = `rgba(102,187,106,${p.active})`;
      ctx.stroke();
    }
  }

  function Circle(pos, rad, color) {
    this.pos = pos || null;
    this.radius = rad || null;
    this.color = color || null;

    this.draw = () => {
      if (!this.active) return;
      ctx.beginPath();
      ctx.arc(this.pos.x, this.pos.y, this.radius, 0, 2 * Math.PI, false);
      ctx.fillStyle = `rgba(102,102,187,${this.active})`;
      ctx.fill();
    };
  }

  // Util
  function getDistance(p1, p2) {
    return Math.pow(p1.x - p2.x, 2) + Math.pow(p1.y - p2.y, 2);
  }
});
