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
