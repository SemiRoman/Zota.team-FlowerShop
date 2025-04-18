const blur = document.querySelector(".mouse-blur");

document.addEventListener("mousemove", (e) => {
  blur.style.left = `${e.clientX - 75}px`;
  blur.style.top = `${e.clientY - 75}px`;

  const hue = (e.clientX / window.innerWidth) * 360;
  const hue2 = (e.clientY / window.innerHeight) * 360;

  blur.style.background = `radial-gradient(circle, hsl(${hue}, 100%, 70%), hsl(${hue2}, 100%, 75%), hsl(${
    (hue + hue2) / 2
  }, 100%, 60%))`;
});
