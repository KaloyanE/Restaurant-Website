//slider
let slideIndex = 0;
showSlide(slideIndex);

function nextSlide() {
  slideIndex += 1;
  showSlide(slideIndex);
}

function previousSlide() {
  slideIndex -= 1;
  showSlide(slideIndex);  
}

function currentSlide(n) {
  showSlide(slideIndex = n);
}

function showSlide(n) {
  const slides = document.getElementsByClassName("slide");
  if (n > slides.length) {
    slideIndex = 1;
    n = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
    n = slides.length;
  }
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.opacity = "0";
    slides[i].style.display = "none";
  }
  slides[n-1].style.display = "flex";
  setTimeout(() => {
    slides[n-1].style.opacity = "1";
  }, 50);
  slideIndex = n;
}

//form validation
function validateForm() {
  let number = document.forms["myForm"]["tname"].value;
  let date = document.forms["myForm"]["dname"].value;
  let name = document.forms["myForm"]["t2name"].value;
  let email = document.forms["myForm"]["t3name"].value;
  
  if (number == "" || number.length<8) {
    alert("Phone number must be filled out");
    return false;
  }
  if (date == "") {
    alert("Date must be filled out");
    return false;
  }
  if (name == "") {
    alert("Name must be filled out");
    return false;
  }
  if (email == "") {
    alert("Email must be filled out");
    return false;
  }
}