const button = document.querySelector(".button");
const appearElements = document.querySelectorAll(".bigger_text .words");
const arrows = document.querySelectorAll(".arrow");

button.addEventListener("mouseover", () => {
  appearElements.forEach((element) => {
    element.style.color = "rgb(151, 149, 182)";
  });

  const isDesktop = window.matchMedia("(min-width: 850px)").matches;
  if (isDesktop) {
    arrows.forEach((arrow) => {
      arrow.style.opacity = 1;
      arrow.style.filter = "blur(0)";
    });
  }
});

button.addEventListener("mouseout", () => {
  appearElements.forEach((element) => {
    element.style.color = "";
  });

  const isDesktop = window.matchMedia("(min-width: 850px)").matches;
  if (isDesktop) {
    arrows.forEach((arrow) => {
      arrow.style.opacity = 0;
      arrow.style.filter = "blur(10px)";
    });
  }
});

if (window.matchMedia("(min-width: 850px)").matches) {
  arrows.forEach((arrow) => {
    arrow.addEventListener("mouseover", () => {
      arrow.style.opacity = 1;
      arrow.style.filter = "blur(0)";
    });

    arrow.addEventListener("mouseout", () => {
      arrow.style.opacity = 0;
      arrow.style.filter = "blur(10px)";
    });
  });
}
