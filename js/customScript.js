function navdrop() {
  if (window.innerWidth < 767) {
    let navbar = document.querySelector('.outerUl');
    if (navbar.style.display === "block") {
      navbar.style.display = "none";
    } else {
      navbar.style.display = "block";
    }
  } else {
    // Revert changes when screen size is greater than or equal to 767 pixels
    let navbar = document.querySelector('.outerUl');
    navbar.style.display = ""; // Reset to the default value
  }
}

function displayById(divId) {
  if (window.innerWidth < 767) {
    let selectedDiv = document.querySelector(`#${divId}`);
    if (selectedDiv.style.display === "block") {
      selectedDiv.style.display = "none";
    } else {
      selectedDiv.style.display = "block";
    }
  } else {
    // Revert changes when screen size is greater than or equal to 767 pixels
    let selectedDiv = document.querySelector(`#${divId}`);
    selectedDiv.style.display = ""; // Reset to the default value
  }
}

// Event listener to revert changes on window resize
window.addEventListener('resize', function() {
  if (window.innerWidth >= 767) {
    let navbar = document.querySelector('.outerUl');
    navbar.style.display = ""; // Reset to the default value

    // Revert changes for other elements if needed
  }
});

  window.addEventListener('resize', function() {
    // Check the device width when the window is resized
    checkDeviceWidth();
  });

  window.addEventListener('DOMContentLoaded', function() {
    // Initial check on page load
    checkDeviceWidth();
  });

  function checkDeviceWidth() {
    var link = document.getElementById('navlink'); // Replace 'myLink' with the actual ID of your <a> tag

    if (window.innerWidth < 767) {
      // If device width is less than 765px, disable the href attribute
      link.removeAttribute('href');
      link.style.cursor = 'not-allowed'; // Optional: Change cursor style to indicate disabled link
    } else {
      // If device width is 765px or more, enable the href attribute
      link.setAttribute('href', 'your-link-url'); // Replace 'your-link-url' with the actual URL
      link.style.cursor = 'pointer'; // Optional: Change cursor style back to default
    }
  }


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
