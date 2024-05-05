document.addEventListener("DOMContentLoaded", function () {
  fetch("DOE.txt")
    .then((response) => response.json())
    .then((data) => {
      console.log(data); // Ensure data is loaded correctly
      initializeBuildingNames(data);
    });
});

function initializeBuildingNames(data) {
  const buildingList = document.getElementById("buildingList");

  // Function to filter building names based on borough
  function filterBuildingNames(borough) {
    // Clear any existing list items
    buildingList.innerHTML = "";

    // Keep track of names already added to avoid repetition
    const addedNames = {};

    // Loop through each entry in the JSON data
    data["working sheet"].forEach((entry) => {
      // Extract the building name and borough
      const buildingName = entry["Name"];
      const entryBorough = entry["Borough"];

      // Add the building name to the list if it's in the selected borough and not already added
      if (entryBorough === borough && !addedNames[buildingName]) {
        const listItem = document.createElement("li");
        const link = document.createElement("a");
        link.textContent = buildingName;
        link.href = "#"; // Prevent the link from navigating
        listItem.appendChild(link);
        buildingList.appendChild(listItem);
        // Mark the name as added
        addedNames[buildingName] = true;

        // Add click event listener to calculate percentages when building name is clicked
        link.addEventListener("click", (event) => {
          event.preventDefault(); // Prevent the link from navigating
          calculatePercentages(buildingName, data);
        });
      }
    });
  }

  // Add event listeners to the area filter buttons
  const buttons = document.querySelectorAll(".area");
  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      buttons.forEach((btn) => btn.classList.remove("active"));
      button.classList.add("active");

      // Get the borough value based on the button's text content
      const borough = button.textContent.toLowerCase();
      // Map the borough to its corresponding number
      const boroughNumberMap = {
        manhattan: 1,
        bronx: 2,
        brooklyn: 3,
        queens: 4,
      };
      // Filter building names based on the selected borough
      filterBuildingNames(boroughNumberMap[borough]);
    });
  });

  // Calculate max values for each measurement category
  const maxValues = {};
  data["working sheet"].forEach((entry) => {
    const measurement = entry["Measurement"];
    const value = entry["Average"];
    if (!(measurement in maxValues)) {
      maxValues[measurement] = value;
    } else {
      maxValues[measurement] = Math.max(maxValues[measurement], value);
    }
  });

  console.log("Max values:", maxValues);

  // Function to calculate percentages when building name is clicked
  function calculatePercentages(buildingName, data) {
    console.log("Calculating percentages for:", buildingName);

    // Initialize percentage object
    const percentages = {};

    // Initialize values for KW, KWH, THERMS, and TOTAL
    let KW_value = parseFloat(document.getElementById("KW_value").textContent);
    let KWH_value = parseFloat(
      document.getElementById("KWH_value").textContent
    );
    let THERMS_value = parseFloat(
      document.getElementById("THERMS_value").textContent
    );
    let TOTAL_value = parseFloat(
      document.getElementById("TOTAL_value").textContent
    );

    // Loop through each entry in the JSON data
    data["working sheet"].forEach((entry) => {
      // Check if the entry corresponds to the clicked building
      if (entry["Name"] === buildingName) {
        // Extract measurement and average value
        const measurement = entry["Measurement"];
        const average = entry["Average"];
        // Calculate percentage using the corresponding max value
        const maxValue = maxValues[measurement];
        const percentage = (average / maxValue) * 100;
        // Store percentage in the object
        percentages[measurement] = percentage;

        // Update values for KW, KWH, THERMS, and TOTAL
        switch (measurement) {
          case "Electricity Demand (KW)":
            animateValue("KW_value", KW_value, average, " KW");
            KW_value = average.toFixed(0);
            break;
          case "Electricity Usage (KWH)":
            animateValue("KWH_value", KWH_value, average, " KWH");
            KWH_value = average.toFixed(0);
            break;
          case "Gas (Therms)":
            animateValue("THERMS_value", THERMS_value, average, " Therms");
            THERMS_value = average.toFixed(0);
            break;
          case "Total Usage (mmBTUs)":
            animateValue("TOTAL_value", TOTAL_value, average, " MMBtu");
            TOTAL_value = average.toFixed(0);
            break;
        }
      }
    });

    console.log("Percentages for", buildingName + ":", percentages);

    // Update height for the first_color element
    const firstRecHeight = document.getElementById("first_rec").clientHeight;
    const firstColorScale = percentages["Electricity Demand (KW)"] / 100;
    const firstColorElement = document.getElementById("first_color");
    firstColorElement.style.transformOrigin = "bottom center"; // Adjust transform origin
    firstColorElement.style.transform = `translate(-50%, 0) scaleY(${firstColorScale})`;

    // Update height for the second_color element
    const secondRecHeight = document.getElementById("second_rec").clientHeight;
    const secondColorScale = percentages["Electricity Usage (KWH)"] / 100;
    const secondColorElement = document.getElementById("second_color");
    secondColorElement.style.transformOrigin = "bottom center"; // Adjust transform origin
    secondColorElement.style.transform = `translate(-50%, 0) scaleY(${secondColorScale})`;

    // Update height for the third_color element
    const thirdRecHeight = document.getElementById("third_rec").clientHeight;
    const thirdColorScale = percentages["Gas (Therms)"] / 100;
    const thirdColorElement = document.getElementById("third_color");
    thirdColorElement.style.transformOrigin = "bottom center"; // Adjust transform origin
    thirdColorElement.style.transform = `translate(-50%, 0) scaleY(${thirdColorScale})`;

    // Update height for the fourth_color element
    const fourthRecHeight = document.getElementById("fourth_rec").clientHeight;
    const fourthColorScale = percentages["Total Usage (mmBTUs)"] / 100;
    const fourthColorElement = document.getElementById("fourth_color");
    fourthColorElement.style.transformOrigin = "bottom center"; // Adjust transform origin
    fourthColorElement.style.transform = `translate(-50%, 0) scaleY(${fourthColorScale})`;

    const colorElements = document.querySelectorAll("[id$='_color']");
    colorElements.forEach((element) => {
      element.style.transition = "transform 1s ease"; // Adjust duration and timing function as needed
    });
  }

  // Function to animate value change
  function animateValue(id, start, end, unit) {
    const duration = 1000; // milliseconds
    const steps = 60; // Number of steps for the animation
    const range = end - start;
    const stepValue = range / steps;
    let current = start;
    let stepCount = 0;
    const obj = document.getElementById(id);
    const timer = setInterval(function () {
      current += stepValue;
      obj.textContent = current.toFixed(0) + unit;
      stepCount++;
      if (stepCount >= steps) {
        obj.textContent = end.toFixed(0) + unit;
        clearInterval(timer);
      }
    }, duration / steps);
  }
}
