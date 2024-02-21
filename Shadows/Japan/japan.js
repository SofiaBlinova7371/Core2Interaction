const windowElement = document.querySelector(".window");

document.addEventListener("mousemove", (e) => {
  const mouseX = e.clientX;
  const mouseY = e.clientY;

  const windowRect = windowElement.getBoundingClientRect();
  const windowCenterX = windowRect.left + windowRect.width / 2;
  const windowCenterY = windowRect.top + windowRect.height / 2;

  const distanceToLeftEdge = mouseX;

  const blurAmount = (distanceToLeftEdge / 100) * 3;

  windowElement.style.filter = `blur(${blurAmount}px)`;

  const mouseXPercentage = (mouseX / window.innerWidth) * -100;
  const mouseYPercentage = (mouseY / window.innerHeight) * -100;
  windowElement.style.transform = `translate(${
    mouseXPercentage * 0.03 - 1.5
  }%, ${mouseYPercentage * 0.03 - 1.5}%)`;
});

const isDesktop = window.matchMedia("(min-width: 850px)").matches;

if (isDesktop) {
  const arrow = document.querySelectorAll(".arrow");

  arrow.forEach((arrow) => {
    arrow.addEventListener("mouseover", () => {
      arrow.style.opacity = 1;
      setTimeout(() => {
        arrow.style.filter = "blur(0)";
      }, 200);
    });

    arrow.addEventListener("mouseout", () => {
      arrow.style.filter = "blur(10px)";
      setTimeout(() => {
        arrow.style.opacity = 0;
      }, 200);
    });
  });
} else {
  arrow.forEach((arrow) => {
    arrow.style.opacity = 1;
    arrow.style.filter = "blur(0)";
  });
}
