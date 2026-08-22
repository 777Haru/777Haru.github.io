const orbit = document.querySelector("#orbit");
const circle = document.querySelector("#circle");

const duration = 4000;
let startTime;

function animate(currentTime) {
  if (startTime === undefined) startTime = currentTime;

  const progress = ((currentTime - startTime) % duration) / duration;
  const angle = progress * Math.PI * 2 - Math.PI / 2;
  const radius = orbit.clientWidth / 2;
  const x = Math.cos(angle) * radius;
  const y = Math.sin(angle) * radius;

  circle.style.transform = `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`;
  requestAnimationFrame(animate);
}

requestAnimationFrame(animate);
