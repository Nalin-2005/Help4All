var slideIndex = 0;
setInterval(nextSlide, 7000);         // Automatically switch slide after 7 seconds


//This function switches to the next slide
function nextSlide() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
}