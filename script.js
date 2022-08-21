let currentYear = new Date().getFullYear();

let yearElement = document.querySelector(".year");

let result = document.querySelector(".result");

let resultContainer = document.querySelector(".result_container");

let errorText = document.querySelector(".error__text");

function printAge() {
  let year = document.querySelector(".year").value;
  year = parseInt(year);

  let age = currentYear - year;
  if (Number.isNaN(year) || age < 0) {
    resultContainer.style.display = "none";
    errorText.style.display = "block";
  } else {
    errorText.style.display = "none";
    result.innerHTML = currentYear - year;
    resultContainer.style.display = "block";
  }
}
