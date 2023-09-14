const images = ["./resources/My Picture/me.jpg", "./resources/My Picture/me2.jpg"];
let currentImageIndex = 0;

// Get a reference to the image element
const imageElement = document.getElementById("image");

// Function to change the image
function changeImage() {
  // Increment the image index
  currentImageIndex = (currentImageIndex + 1) % images.length;

  // Update the image source
  imageElement.src = images[currentImageIndex];
}

// Add a click event listener to the image
imageElement.addEventListener("click", changeImage);