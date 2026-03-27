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
  }
}

function updateTextColor(event) {
  const body = document.querySelector("body");
  if (body) {
    body.style.color = event.target.value;
  }
}

function resetAllColors(event) {
  const body = document.querySelector("body");
  if (body) {
    body.style.backgroundColor = "#eeeeee";
    body.style.color = "#333333";

    colorPickerBackground.value = "#eeeeee";
    colorPickerText.value = "#333333";
  }
}
