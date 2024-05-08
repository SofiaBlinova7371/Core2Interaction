document.addEventListener("DOMContentLoaded", function () {
  const windowElements = document.getElementsByClassName("window");
  const windowArray = Array.from(windowElements);

  windowArray.forEach((element) => {
    element.addEventListener("click", () => {
      toggleWindowClass(element);
      controlAudioVolume(element);
    });
  });

  function toggleWindowClass(element) {
    if (element.classList.contains("window-up")) {
      element.classList.remove("window-up");
    } else {
      element.classList.add("window-up");
      setTimeout(() => {
        element.classList.remove("window-up");
      }, 10000);
    }
  }

  function controlAudioVolume(windowElement) {
    const audioId = windowElement.getAttribute("data-audio-id");
    const audioElement = document.getElementById(audioId);

    if (audioElement) {
      // Set the volume to 50% for 7000ms
      audioElement.volume = 0.7;

      // After 7000ms, set the volume back to 10%
      setTimeout(() => {
        audioElement.volume = 0.05;
      }, 11000);
    }
  }

  function setDefaultVolumeForAll() {
    const audioElements = document.querySelectorAll("audio");

    audioElements.forEach((audioElement) => {
      audioElement.volume = 0.05;
    });
  }

  function controlAudio(windowId, audioId) {
    const windowElement = document.getElementById(windowId);
    const audioElement = document.getElementById(audioId);

    if (windowElement && audioElement) {
      windowElement.addEventListener("click", () => {
        // Set the volume to 50% for 7000ms
        audioElement.volume = 0.7;

        // After 7000ms, set the volume back to 10%
        setTimeout(() => {
          audioElement.volume = 0.05;
        }, 11000);

        // Toggle window class
        toggleWindowClass(windowElement);
      });
    }
  }

  controlAudio("school_window", "school");
  controlAudio("phone_window", "phone");
  controlAudio("bully_window", "bully");
  controlAudio("couple_window", "couple");

  // Call setDefaultVolumeForAll to set default volume for all audio elements
  setDefaultVolumeForAll();
});
