document.addEventListener("DOMContentLoaded", function () {
  const draggables = document.querySelectorAll(".draggable");
  const puzzleCells = document.querySelectorAll(".puzzleCell");
  let offsetX, offsetY;
  let activeDraggable = null;

  function setRandomPositions() {
    draggables.forEach((draggable) => {
      const maxX = window.innerWidth - draggable.clientWidth;
      const maxY = window.innerHeight - draggable.clientHeight;
      const randomX = Math.floor(Math.random() * maxX);
      const randomY = Math.floor(Math.random() * maxY);
      draggable.style.left = `${randomX}px`;
      draggable.style.top = `${randomY}px`;
    });
  }

  window.addEventListener("load", setRandomPositions);

  function calculateDistance(el1, el2) {
    const rect1 = el1.getBoundingClientRect();
    const rect2 = el2.getBoundingClientRect();

    const center1 = {
      x: rect1.left + rect1.width / 2,
      y: rect1.top + rect1.height / 2,
    };

    const center2 = {
      x: rect2.left + rect2.width / 2,
      y: rect2.top + rect2.height / 2,
    };

    const distance = Math.sqrt(
      Math.pow(center2.x - center1.x, 2) + Math.pow(center2.y - center1.y, 2)
    );

    return distance;
  }

  function snapToCell(draggable, cell) {
    const rect = cell.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    draggable.style.left = `${centerX - draggable.clientWidth / 2}px`;
    draggable.style.top = `${centerY - draggable.clientHeight / 2}px`;
  }

  function handleDraggableMouseDown(e) {
    e.preventDefault();
    activeDraggable = this;
    const boundingBox = activeDraggable.getBoundingClientRect();
    offsetX = e.clientX - boundingBox.left;
    offsetY = e.clientY - boundingBox.top;

    document.addEventListener("mousemove", handleMouseMove, false);
    document.addEventListener("mouseup", handleMouseUp, false);
  }

  function handleMouseMove(e) {
    if (activeDraggable) {
      const mouseX = e.clientX - offsetX;
      const mouseY = e.clientY - offsetY;
      activeDraggable.style.left = `${mouseX}px`;
      activeDraggable.style.top = `${mouseY}px`;

      puzzleCells.forEach((cell, index) => {
        const distance = calculateDistance(activeDraggable, cell);
        if (distance <= 50) {
          snapToCell(activeDraggable, cell);
        }
      });
    }
  }

  function handleMouseUp() {
    document.removeEventListener("mousemove", handleMouseMove, false);
    document.removeEventListener("mouseup", handleMouseUp, false);
    activeDraggable = null;
  }

  draggables.forEach((draggable) => {
    draggable.addEventListener("mousedown", handleDraggableMouseDown, false);
  });
});

document.getElementById("timer").innerHTML = "01" + ":" + "00";
startTimer();

function startTimer() {
  var presentTime = document.getElementById("timer").innerHTML;
  var timeArray = presentTime.split(/[:]+/);
  var m = timeArray[0];
  var s = checkSecond(timeArray[1] - 1);

  // Check if the timer has reached 0:00
  if (m == 0 && s == "00") {
    // Show the pop-up
    showPopup();
    return; // Stop further countdowns
  }

  if (s == 59) {
    m = m - 1;
  }

  document.getElementById("timer").innerHTML = m + ":" + s;
  setTimeout(startTimer, 1000);
}

function showPopup() {
  // Display the pop-up
  const popup = document.querySelector(".pop-up");
  popup.style.display = "flex";

  // Add click event to the reload button
  const reloadButton = document.getElementById("reload");
  reloadButton.addEventListener("click", reloadPage);
}

function reloadPage() {
  // Reload the webpage
  location.reload();
}

function checkSecond(sec) {
  if (sec < 10 && sec >= 0) {
    sec = "0" + sec;
  } // add zero in front of numbers < 10
  if (sec < 0) {
    sec = "59";
  }
  return sec;
}
