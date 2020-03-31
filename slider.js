/*
Slider For with transition 
*/
* {
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;
}
.container {
    width: 70%;
    margin: 0px auto;
    border: 3px solid green;
    overflow: hidden;
}
img {
    width: 100%;
}
.sliders {
    display: flex;
}

const sliders = document.querySelector(".sliders");
const images = document.querySelectorAll(".sliders img");

const next = document.querySelector("#nextbtn");
const after = document.querySelector("#afterbtn");

let counter = 1;
const size = images[0].clientWidth;

sliders.style.transform = "translateX(" + -size * counter + "px)";

next.addEventListener("click", function() {
  after.style.opacity = 1;
  if (counter >= images.length - 1) {
    next.style.opacity = 0.5;
    return;
  }
  sliders.style.transition = "all 0.6s ease-in-out";
  counter++;
  sliders.style.transform = "translateX(" + -size * counter + "px)";
});

after.addEventListener("click", function() {
  next.style.opacity = 1;
  if (counter <= 0) {
    after.style.opacity = 0.5;
    return;
  }
  sliders.style.transition = "all 0.6s ease-in-out";
  counter--;
  sliders.style.transform = "translateX(" + -size * counter + "px)";
});

// sliders.addEventListener("transitionend", () => {
//   //   console.log("fired");

//   if (images[counter].id === "last") {
//     sliders.style.transition = "none";
//     counter = images.length - 2;
//     sliders.style.transform = "translateX(" + -size * counter + "px)";
//   }

//   if (images[counter].id === "fast") {
//     sliders.style.transition = "none";
//     counter = images.length - counter;
//     sliders.style.transform = "translateX(" + -size * counter + "px)";
//   }
// });

