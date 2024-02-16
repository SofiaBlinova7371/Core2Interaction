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
let offsetY, initialY;

icon.addEventListener("mousedown", (e) => {
  isDragging = true;
  const rect = slider.getBoundingClientRect();
  offsetY = e.clientY - rect.top - rect.height / 1.4;
});

document.addEventListener("mousemove", (e) => {
  if (isDragging) {
    const rect = slider.getBoundingClientRect();
    const newY = e.clientY - offsetY + rect.height / 4;
    const maxY = window.innerHeight - icon.offsetHeight / 4;
    const newOffsetY = Math.max(0, Math.min(newY, maxY));
    slider.style.top = newOffsetY + "px";
  }
});

document.addEventListener("mouseup", () => {
  isDragging = false;
});

icon.addEventListener("dragstart", (e) => {
  e.preventDefault();
});
