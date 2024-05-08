window.onload = function () {
  setTimeout(show, 8000);
};

function show() {
  document.getElementById("pop-up").style.display = "block";
}

function hide() {
  document.getElementById("pop-up").style.display = "none";
  setTimeout(show, 5000);
}

document.getElementById("video").onclick = function () {
  document.getElementById("video").play();
};
