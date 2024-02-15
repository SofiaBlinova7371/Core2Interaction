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

const slider = document.querySelector(".slider");
const icon = document.querySelector(".icon");
let isDragging = false;
let startY, startTop, maxTop;

icon.addEventListener("mousedown", (e) => {
  isDragging = true;
  startY = e.clientY;
  startTop = slider.getBoundingClientRect().top;
  maxTop = document.documentElement.clientHeight - slider.clientHeight;
});

document.addEventListener("mousemove", (e) => {
  if (isDragging) {
    const mouseY = e.clientY;
    const deltaY = mouseY - startY;
    const newTop = startTop + deltaY;
    const clampedTop = Math.max(0, Math.min(newTop, maxTop));
    slider.style.top = clampedTop + "px";
  }
});

document.addEventListener("mouseup", () => {
  isDragging = false;
});
