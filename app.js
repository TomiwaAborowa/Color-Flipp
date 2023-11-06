const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function () {
  //get a random number between 0 -3 because of the array

  const randomNumber = getRandomNumber();
  document.body.style.backgroundColor = colors[randomNumber];
  color.textContent = colors[randomNumber];
});

function getRandomNumber() {
    // Math.floor rounds down numbers to the nearest integer e.g 0.99999 to 0
  return Math.floor(Math.random() * colors.length);
}
