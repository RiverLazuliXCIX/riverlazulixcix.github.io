var root = document.querySelector(":root");

const colorPickerBackground = document.getElementById(
  "color-picker-background",
);

const colorPickerText = document.getElementById("color-picker-text");

const resetColorsButton = document.getElementById("reset-color");

colorPickerBackground.addEventListener("input", updateBackgroundColor);
colorPickerBackground.addEventListener("change", updateBackgroundColor);

colorPickerText.addEventListener("input", updateTextColor);
colorPickerText.addEventListener("change", updateTextColor);

resetColorsButton.addEventListener("click", resetAllColors);

function updateBackgroundColor(event) {
  const body = document.querySelector("body");
  if (body) {
    body.style.backgroundColor = event.target.value;
    root.style.setProperty("--background-color", event.target.value);
  }
}

function updateTextColor(event) {
  const body = document.querySelector("body");
  if (body) {
    body.style.color = event.target.value;
    root.style.setProperty("--text-color", event.target.value);
  }
}

function resetAllColors(event) {
  const body = document.querySelector("body");
  if (body) {
    body.style.backgroundColor = "#eeeeee";
    body.style.color = "#333333";

    colorPickerBackground.value = "#eeeeee";
    colorPickerText.value = "#333333";

    root.style.setProperty("--background-color", "#eeeeee");
    root.style.setProperty("--text-color", "#333333");
  }
}
