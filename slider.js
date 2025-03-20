const contactButton1 = document.querySelector(".contact_button-1");
const contactButton2 = document.querySelector(".contact_button-2");
const contactForm = document.querySelector(".contact_forms ");

contactButton1.addEventListener("click", () => {
  contactForm.classList.toggle("open");
  contactButton1.classList.toggle("open");
  contactButton2.classList.toggle("open");
});
contactButton2.addEventListener("click", () => {
  contactForm.classList.toggle("open");
  contactButton1.classList.toggle("open");
  contactButton2.classList.toggle("open");
});

var slider1 = tns({
  container: ".smallSlider",
  items: 1,
  speed: 10,
  gutter: -0.5,
  slideBy: 1,
  autoplay: true,
  autoplayPosition: "top",
  mode: "carousel",
  axis: "vertically",
  prevButton: "false",
  nextButton: "false",
});

var slider2 = tns({
  container: ".bigSlider",
  items: 1,
  speed: 10,
  gutter: 0.1,
  slideBy: 1,
  autoplay: true,
  autoplayPosition: "top",
  mode: "carousel",
  axis: "vertically",
  prevButton: "false",
  nextButton: "false",
});
