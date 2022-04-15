//Slideshow Script
let slideIndex = 0;
showSlides();
function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 5000); // Change image every 5 seconds
}

//Gallery
function myFunction(imgs) {
  var expandImg = document.getElementById("expandedImg");
  var imgText = document.getElementById("imgtext");
  expandImg.src = imgs.src;
  imgText.innerHTML = imgs.alt;
  expandImg.parentElement.style.display = "block";
}

//Contact Form
function getData(){
  var name = document.getElementById("name");
  var email = document.getElementById("email");
  window.alert(name.value+ ", thank you for your details. We will be in touch via " + email.value + " shortly.");
  }

//Personalised Greeting
  var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
  var d = new Date();
  let day = days[d.getDay()];
  document.getElementById("day").innerHTML = day;
