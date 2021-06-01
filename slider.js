/*
Slider For with transition 
*/

// make the width of the carousel slider equal to the width of 5 sliders, 
// and change the transform in js aswell.  think of the carousel slider as a mask, 
// unveiling the images. the bigger the mask, the more of all the images you see at once
// * {
//     margin: 0px;
//     padding: 0px;
//     box-sizing: border-box;
// }
// .container {
//     width: 70%;
//     margin: 0px auto;
//     border: 3px solid green;
//     overflow: hidden;
// }
// img {
//     width: 100%;
// }
// .sliders {
//     display: flex;
// }

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



/*
Another Way To configure this 
*/
  const controls=document.querySelector(".controls");
  const container=document.querySelector(".thumbnail-container");
  const allBox=container.children;
  const containerWidth=container.offsetWidth;
  const margin=30;
   var items=0;
   var totalItems=0;
   var jumpSlideWidth=0;


  // item setup per slide

 responsive=[
  {breakPoint:{width:0,item:1}}, //if width greater than 0 (1 item will show) 
  {breakPoint:{width:600,item:2}}, //if width greater than 600 (2  item will show) 
  {breakPoint:{width:1000,item:4}} //if width greater than 1000 (4 item will show) 
 ]

 function load(){
     for(let i=0; i<responsive.length;i++){
     	if(window.innerWidth>responsive[i].breakPoint.width){
     		items=responsive[i].breakPoint.item
     	}
     }
     start();
 }
 
 function start(){
 	 var totalItemsWidth=0
 	for(let i=0;i<allBox.length;i++){
 		 // width and margin setup of items
 		allBox[i].style.width=(containerWidth/items)-margin + "px";
 		allBox[i].style.margin=(margin/2)+ "px";
        totalItemsWidth+=containerWidth/items;
        totalItems++;
 	}

 	// thumbnail-container width set up
 	container.style.width=totalItemsWidth + "px";

 	// slides controls number set up
 	 const allSlides=Math.ceil(totalItems/items);
     const ul=document.createElement("ul");
        for(let i=1;i<=allSlides;i++){
          const li=document.createElement("li");
               li.id=i;
               li.innerHTML=i;
               li.setAttribute("onclick","controlSlides(this)");
               ul.appendChild(li);
               if(i==1){
               	li.className="active";
               }
        }
        controls.appendChild(ul);
 }

    // when click on numbers slide to next slide
 function controlSlides(ele){
       // select controls children  'ul' element 
       const ul=controls.children;

       // select ul children 'li' elements;
      const li=ul[0].children
        
       
       var active;

       for(let i=0;i<li.length;i++){
       	if(li[i].className=="active"){
       		// find who is now active
       		active=i;
       		// remove active class from all 'li' elements
       		li[i].className="";
       	}
       }
       // add active class to current slide
       ele.className="active";

       var numb=(ele.id-1)-active;
          jumpSlideWidth=jumpSlideWidth+(containerWidth*numb);
       container.style.marginLeft=-jumpSlideWidth + "px";
 }

window.onload=load();





