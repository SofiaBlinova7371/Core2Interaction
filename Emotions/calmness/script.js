var audio = document.getElementById("audio");
var audioButton = document.getElementById("audioButton");
var isAudioPlaying = false;

function toggleAudio() {
  if (isAudioPlaying) {
    audio.pause();
    audioButton.innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="icon">
              <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 9.75L19.5 12m0 0l2.25 2.25M19.5 12l2.25-2.25M19.5 12l-2.25 2.25m-10.5-6l4.72-4.72a.75.75 0 011.28.531V19.94a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.506-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.395C2.806 8.757 3.63 8.25 4.51 8.25H6.75z" />
            </svg>
          `;
  } else {
    audio.play();
    audioButton.innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="icon">
              <path stroke-linecap="round" stroke-linejoin="round" d="M19.114 5.636a9 9 0 010 12.728M16.463 8.288a5.25 5.25 0 010 7.424M6.75 8.25l4.72-4.72a.75.75 0 011.28.53v15.88a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75z" />
            </svg>
          `;
  }
  isAudioPlaying = !isAudioPlaying;
}

function starPlay() {
  var star = document.getElementById("star_audio");
  star.play();
}

function blue() {
  const backgroundTop = document.getElementById("background_top");
  backgroundTop.style.backgroundImage =
    "linear-gradient(#131781, #003B94, #24A7EE)";
  const backgroundBottom = document.getElementById("background_bottom");
  backgroundBottom.style.backgroundImage =
    "linear-gradient(#386A93, #003B94, #0E1D61)";
  const circleElements = document.getElementsByClassName("circle");
  Array.from(circleElements).forEach((circle) => {
    circle.style.backgroundColor = "#00CCFF";
  });

  if (isAudioPlaying) {
    audio.pause();
    audioButton.innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="icon">
              <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 9.75L19.5 12m0 0l2.25 2.25M19.5 12l2.25-2.25M19.5 12l-2.25 2.25m-10.5-6l4.72-4.72a.75.75 0 011.28.531V19.94a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.506-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.395C2.806 8.757 3.63 8.25 4.51 8.25H6.75z" />
            </svg>
          `;
  }
  isAudioPlaying = !isAudioPlaying;
  audio.src = "calmness/sounds/night.mp3";
  audio.load();
}

function purple() {
  const backgroundTop = document.getElementById("background_top");
  backgroundTop.style.backgroundImage =
    "linear-gradient(#1b1381, #650094, #ee5224)";
  const backgroundBottom = document.getElementById("background_bottom");
  backgroundBottom.style.backgroundImage =
    "linear-gradient(#933855, #650094, #1b1381)";
  const circleElements = document.getElementsByClassName("circle");
  Array.from(circleElements).forEach((circle) => {
    circle.style.backgroundColor = "#ff7000";
  });

  if (isAudioPlaying) {
    audio.pause();
    audioButton.innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="icon">
              <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 9.75L19.5 12m0 0l2.25 2.25M19.5 12l2.25-2.25M19.5 12l-2.25 2.25m-10.5-6l4.72-4.72a.75.75 0 011.28.531V19.94a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.506-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.395C2.806 8.757 3.63 8.25 4.51 8.25H6.75z" />
            </svg>
          `;
  }
  isAudioPlaying = !isAudioPlaying;
  audio.src = "calmness/sounds/mantra_music.mp3";
  audio.load();
}

function yellow() {
  const backgroundTop = document.getElementById("background_top");
  backgroundTop.style.backgroundImage =
    "linear-gradient(#F7BF3B, #E3346E, #EE8AA5)";
  const backgroundBottom = document.getElementById("background_bottom");
  backgroundBottom.style.backgroundImage =
    "linear-gradient(#BF3966, #CF5D7B, #F7A354)";
  const circleElements = document.getElementsByClassName("circle");
  Array.from(circleElements).forEach((circle) => {
    circle.style.backgroundColor = "#FFD9A1";
  });

  if (isAudioPlaying) {
    audio.pause();
    audioButton.innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="icon">
              <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 9.75L19.5 12m0 0l2.25 2.25M19.5 12l2.25-2.25M19.5 12l-2.25 2.25m-10.5-6l4.72-4.72a.75.75 0 011.28.531V19.94a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.506-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.395C2.806 8.757 3.63 8.25 4.51 8.25H6.75z" />
            </svg>
          `;
  }
  isAudioPlaying = !isAudioPlaying;
  audio.src = "calmness/sounds/Sunrise.mp3";
  audio.load();
}
