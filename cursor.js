const circleEl = document.querySelector(".circle");
const currentPoint = { x: 0, y: 0 };
const targetPoint = { x: 0, y: 0 };

function lerp() {}
document.addEventListener("pointermove", (e) => {
  const { clientX, clientY } = e;
  targetPoint.x = clientX;
  targetPoint.y = clientY;

  circleEl.style.setProperty("--x", clientX);
  circleEl.style.setProperty("--y", clientY);
});
