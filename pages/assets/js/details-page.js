let index = 1;

function nextImg() {
  let slides = document.getElementsByClassName("slides");
  index += 1;
  if (index > slides.length) index = 1;
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[index - 1].style.display = "block";
}
function prevImg() {
  let slides = document.getElementsByClassName("slides");
  index -= 1;
  if (index < 1) index = slides.length;
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[index - 1].style.display = "block";
}
