document.addEventListener("DOMContentLoaded", function () {
  const counters = document.querySelectorAll(".count");
  const animationDuration = 500;

  counters.forEach((counter) => {
    const target = +counter.getAttribute("data-target");
    const isPercentage = counter.innerText.includes("%");

    const speed = target / animationDuration;

    let currentCount = 0;

    const updateCount = () => {
      if (currentCount < target) {
        counter.innerText = isPercentage
          ? `${Math.ceil(currentCount)}%`
          : Math.ceil(currentCount);
        currentCount += speed;
        setTimeout(updateCount, 1);
      } else {
        counter.innerText = isPercentage ? `${target}%` : target;
      }
    };
    updateCount();
  });
});
