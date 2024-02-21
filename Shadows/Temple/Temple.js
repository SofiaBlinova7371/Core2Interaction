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

const draggable = document.getElementById("draggable");
let isDragging = false;
let offsetX, initialX;

draggable.addEventListener("mousedown", (e) => {
  isDragging = true;
  const rect = draggable.getBoundingClientRect();
  offsetX = e.clientX - (rect.left + rect.width / 2);
});

document.addEventListener("mousemove", (e) => {
  if (isDragging) {
    const rect = draggable.getBoundingClientRect();
    const newX = e.clientX - offsetX + rect.width / 4;
    const maxX = window.innerWidth - draggable.offsetWidth / 4;
    const newOffsetX = Math.max(0, Math.min(newX, maxX));
    draggable.style.left = newOffsetX + "px";
  }
});

document.addEventListener("mouseup", () => {
  isDragging = false;
});

draggable.addEventListener("dragstart", (e) => {
  e.preventDefault();
});
