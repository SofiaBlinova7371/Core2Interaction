document.addEventListener("DOMContentLoaded", function () {
  // Function to update image container with JSON data
  function updateImageContainer(container, data) {
    const info = container.querySelector(".info");

    // Update image source
    const image = container.querySelector(".image");
    image.src = `images/${data["Image"]}`;

    // Update location
    const location = info.querySelector(".location p");
    location.textContent = data["Location"];

    // Update time
    const time = info.querySelector(".time p");
    time.textContent = data["Time"];

    // Update finish
    const finish = info.querySelector(".finish p");
    finish.textContent = data["Finish"];

    // Update personal rating
    const rating = info.querySelector(".rating h3");
    rating.textContent = data["Personal rating"];

    // Update feeling
    const feeling = info.querySelector(".feeling p");
    feeling.textContent = data["Feeling"];
  }

  // Fetch the JSON data
  fetch("test1.json")
    .then((response) => response.json())
    .then((data) => {
      const imageContainers = document.querySelectorAll(".image_container");

      // Iterate over each image container
      imageContainers.forEach((container, index) => {
        // Update image container with corresponding JSON data
        updateImageContainer(container, data[index % data.length]);
      });
    })
    .catch((error) => console.error("Error fetching JSON:", error));

  // Check screen width
  function isDesktop() {
    return window.innerWidth > 800;
  }

  // Functionality for desktop version
  if (isDesktop()) {
    const imageContainersDesktop =
      document.querySelectorAll(".image_container");

    imageContainersDesktop.forEach((container) => {
      container.addEventListener("mouseover", function () {
        // Add classes to the parent row and corresponding column
        const parentRow = container.parentElement;
        const rowIndex = Array.from(parentRow.parentElement.children).indexOf(
          parentRow
        );
        const columnClass = container.classList[1];
        const columns = document.querySelectorAll(`.${columnClass}`);

        parentRow.classList.add("expanded");
        columns.forEach((column) => column.classList.add("expanded"));

        // Remove expanded class from other rows
        const allRows = document.querySelectorAll(".row");
        allRows.forEach((row, index) => {
          if (index !== rowIndex) {
            row.classList.add("shrunk");
          }
        });
      });

      container.addEventListener("mouseout", function () {
        // Remove expanded class from active element and elements of the same class
        container.classList.remove("expanded");
        const columnClass = container.classList[1];
        const columns = document.querySelectorAll(`.${columnClass}`);
        columns.forEach((column) => column.classList.remove("expanded"));

        // Remove shrunk class from other rows
        const allRows = document.querySelectorAll(".row");
        allRows.forEach((row) => row.classList.remove("shrunk"));
      });

      const info = container.querySelector(".info");

      container.addEventListener("click", function () {
        info.classList.toggle("show");
      });

      container.addEventListener("mouseleave", function () {
        info.classList.remove("show");
      });
    });
  }

  // Functionality for mobile version
  if (!isDesktop()) {
    const rowElements = document.querySelectorAll(".row");

    // Function to adjust row height based on position
    function adjustRowHeight() {
      const viewportHeight = window.innerHeight;

      // Iterate over each row element
      rowElements.forEach((row) => {
        const rect = row.getBoundingClientRect();
        const rowCenter = (rect.top + rect.bottom) / 2;
        const distanceToCenter = Math.abs(rowCenter - viewportHeight / 2);

        // Adjust row height based on distance to viewport center
        const maxHeight = viewportHeight * 0.5; // Maximum height when row is at center
        const minHeight = viewportHeight * 0.1; // Minimum height when row is at top/bottom
        const heightRatio = 1 - distanceToCenter / (viewportHeight / 2);
        const newHeight = minHeight + heightRatio * (maxHeight - minHeight);

        row.style.height = `${newHeight}px`;
      });
    }

    // Initial adjustment on page load
    adjustRowHeight();

    // Adjust row height when scrolling
    window.addEventListener("scroll", adjustRowHeight);

    // Click function for .info elements
    const infoElements = document.querySelectorAll(".info");

    infoElements.forEach((info) => {
      info.addEventListener("click", function () {
        // Toggle the 'show' class to display/hide the info element
        info.classList.toggle("show");
      });
    });
  }
});
