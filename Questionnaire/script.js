function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

document.addEventListener("DOMContentLoaded", function () {
  var scrollToTopBtn = document.querySelector(".button");
  scrollToTopBtn.addEventListener("click", scrollToTop);
});
