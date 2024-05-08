function before() {
  document.getElementById("gift").src = "Surprise/Images/gift.svg";
  document.getElementById("message").innerHTML =
    "You recieved 1 anonymous<br />SURPRISE!!!";
}

function after() {
  document.getElementById("gift").src = "Surprise/Images/gift_opened.svg";
  document.getElementById("message").innerHTML =
    "You are amazing!<br> And so will be your day!";
}

var draggable = document.getElementById("draggable");

var posX = 0,
  posY = 0,
  mouseX = 0,
  mouseY = 0;

draggable.addEventListener("mousedown", mouseDown, false);
window.addEventListener("mouseup", mouseUp, false);

function mouseDown(e) {
  e.preventDefault();
  posX = e.clientX - draggable.offsetLeft;
  posY = e.clientY - draggable.offsetTop;
  window.addEventListener("mousemove", moveElement, false);
}

function mouseUp() {
  window.removeEventListener("mousemove", moveElement, false);
}

function moveElement(e) {
  mouseX = e.clientX - posX;
  mouseY = e.clientY - posY;
  draggable.style.left = mouseX + "px";
  draggable.style.top = mouseY + "px";
}
