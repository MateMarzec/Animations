const strokes = document.querySelectorAll(".background-stroke");
const cardOne = document.querySelector("section .card:nth-of-type(1)");
const cardTwo = document.querySelector("section .card:nth-of-type(2)");
const cardThree = document.querySelector("section .card:nth-of-type(3)");

cardOne.addEventListener("mouseover", function () {
  strokes.forEach(function (x) {
    x.style.cssText = "stroke: #fddb3a; transition: all 0.5s ease;";
  });
});
cardTwo.addEventListener("mouseover", function () {
  strokes.forEach(function (x) {
    x.style.cssText = "stroke: #bd2000; transition: all 0.5s ease;";
  });
});
cardThree.addEventListener("mouseover", function () {
  strokes.forEach(function (x) {
    x.style.cssText = "stroke: #3f51b5; transition: all 0.5s ease;";
  });
});
