const button = document.querySelector(".button");
const links = document.querySelectorAll(".link");

button.addEventListener("mouseover", () => {
  links.forEach((link) => {
    link.style.opacity = 1;
    setTimeout(() => {
      link.style.filter = "blur(0)";
    }, 200); // Delay of 0.5 seconds (500 milliseconds)
  });
});

button.addEventListener("mouseout", () => {
  links.forEach((link) => {
    link.style.filter = "blur(10px)";
    setTimeout(() => {
      link.style.opacity = 0;
    }, 200); // Delay of 0.5 seconds (500 milliseconds)
  });
});

links.forEach((link) => {
  link.addEventListener("mouseover", () => {
    link.style.opacity = 1;
    setTimeout(() => {
      link.style.filter = "blur(0)";
    }, 200); // Delay of 0.5 seconds (500 milliseconds)
  });

  link.addEventListener("mouseout", () => {
    link.style.filter = "blur(10px)";
    setTimeout(() => {
      link.style.opacity = 0;
    }, 200); // Delay of 0.5 seconds (500 milliseconds)
  });
});
