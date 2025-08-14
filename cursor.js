const circleEl = document.querySelector(".circle");
const currentPoint = { x: 0, y: 0 };
const targetPoint = { x: 0, y: 0 };

function lerp() {
  const dx = targetPoint.x - currentPoint.x;
  const dy = targetPoint.y - currentPoint.y;
  currentPoint.x += dx * 0.2;
  currentPoint.y += dy * 0.2;
  circleEl.style.setProperty("--x", currentPoint.x);
  circleEl.style.setProperty("--y", currentPoint.y);
  requestAnimationFrame(lerp);
}
lerp();
document.addEventListener("pointermove", (e) => {
  const { clientX, clientY } = e;
  targetPoint.x = clientX;
  targetPoint.y = clientY;
});
