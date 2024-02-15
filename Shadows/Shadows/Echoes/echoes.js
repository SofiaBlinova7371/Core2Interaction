const button = document.querySelector(".button");
const appearElements = document.querySelectorAll(".bigger_text .words");
const arrows = document.querySelectorAll(".arrow");

button.addEventListener("mouseover", () => {
  appearElements.forEach((element) => {
    element.style.color = "white";
  });
  arrows.forEach((arrow) => {
    arrow.style.opacity = 1;
    arrow.style.filter = "blur(0)";
  });
});

button.addEventListener("mouseout", () => {
  appearElements.forEach((element) => {
    element.style.color = "";
  });
  arrows.forEach((arrow) => {
    arrow.style.opacity = 0;
    arrow.style.filter = "blur(10px)";
  });
});

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
