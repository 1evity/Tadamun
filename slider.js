//set constant and variables 
const slides = document.querySelector('.slides');
const slide = document.querySelectorAll('.slide');

let counter = 1; //counter for image number
const slideWidth = slide[0].clientWidth;

//identify function that moves the text
setInterval(() => {
  slides.style.transition = 'transform 0.5s ease-in-out';
  slides.style.transform = `translateX(${-slideWidth * counter}px)`; //
  counter++; //add to the image counter


  if (counter === slide.length) {
    setTimeout(() => {
      slides.style.transition = 'none'; //reset transition
      slides.style.transform = `translateX(0px)`; //reset transformation
      counter = 1; //reset counter if last img
    }, 500);
  }
}, 3000);