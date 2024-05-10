const slides = document.querySelectorAll(".slide");
const nextSlideBtn = document.querySelector(".user_photo .next_slide_btn");
let slideNumber = 0;

nextSlideBtn.addEventListener("click", function () {
  // Increment slideNumber to move to the next slide
  slideNumber++;

  // Check if slideNumber exceeds the number of slides
  if (slideNumber >= slides.length) {
    // Reset slideNumber to 0 when it exceeds the number of slides
    slideNumber = 0;
  }

  // Calculate the translateX value
  const translateValue = -slideNumber * 800;

  // Apply transition and transform to each slide
  slides.forEach((slide) => {
    slide.style.transition = "transform 0.5s ease";
    slide.style.transform = `translateX(${translateValue}px)`;
  });
});
