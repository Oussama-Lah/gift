let gift = document.querySelector("#gift-box");
let showBtn = document.querySelector("#click-btn");
let hideBtn = document.querySelector("#hide-btn");

//this is to show the box
showBtn.addEventListener("click", function () {
  gift.style.display = "block";
});
// and this is to hide it
hideBtn.addEventListener("click", function () {
  gift.style.display = "none";
});

// this is the solution in freeCodeCamp;

// buttonElement.addEventListener("click", function () {
//   gift.classList.remove("hide");
// });
