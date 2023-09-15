const images = ["./resources/My Picture/me.jpg", "./resources/My Picture/me2.jpg"];
let currentImageIndex = 0;


const imageElement = document.getElementById("image");

function changeImage() {
  currentImageIndex = (currentImageIndex + 1) % images.length;

  imageElement.src = images[currentImageIndex];
}

imageElement.addEventListener("click", changeImage);
