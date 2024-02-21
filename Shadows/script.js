const button = document.querySelector(".button");
const links = document.querySelectorAll(".link");

button.addEventListener("mouseover", () => {
  links.forEach((link) => {
    link.style.opacity = 1;
    setTimeout(() => {
      link.style.filter = "blur(0)";
    }, 200);
  });
});

button.addEventListener("mouseout", () => {
  links.forEach((link) => {
    link.style.filter = "blur(10px)";
    setTimeout(() => {
      link.style.opacity = 0;
    }, 200);
  });
});

if (window.matchMedia("(min-width: 850px)").matches) {
  links.forEach((link) => {
    link.addEventListener("mouseover", () => {
      link.style.opacity = 1;
      setTimeout(() => {
        link.style.filter = "blur(0)";
      }, 200);
    });

    link.addEventListener("mouseout", () => {
      link.style.filter = "blur(10px)";
      setTimeout(() => {
        link.style.opacity = 0;
      }, 200);
    });
  });
}
