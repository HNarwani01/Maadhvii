document.addEventListener("DOMContentLoaded", function() {
  const thumbnails = document.querySelectorAll(".thumbnail");
  const currentImage = document.querySelector(".current-image");
  const imageContainer = document.querySelector(".image-container");
  
  let currentIndex = 0;
  const intervalTime = 2000; // Time between slides in milliseconds
  let slideInterval;

  // Function to show the current image
  function showImage(index) {
      thumbnails.forEach((thumbnail, i) => {
          thumbnail.classList.remove("active");
          if (i === index) {
              thumbnail.classList.add("active");
              currentImage.src = thumbnail.src;
          }
      });
  }

  // Function to move to the next slide
  function nextSlide() {
      currentIndex++;
      if (currentIndex >= thumbnails.length) {
          currentIndex = 0;
      }
      showImage(currentIndex);
  }

  // Start the carousel
  function startSlide() {
      slideInterval = setInterval(nextSlide, intervalTime);
  }

  // Stop the carousel
  function stopSlide() {
      clearInterval(slideInterval);
  }

  // Show the initial image
  showImage(currentIndex);

  // Add click event listeners to thumbnails
  thumbnails.forEach((thumbnail, i) => {
      thumbnail.addEventListener("click", () => {
          currentIndex = i;
          showImage(currentIndex);
          stopSlide();
      });
  });

  // Start carousel on mouseenter and stop on mouseleave
  imageContainer.addEventListener("mouseenter", stopSlide);
  imageContainer.addEventListener("mouseleave", startSlide);

  // Start the carousel
  startSlide();
});
