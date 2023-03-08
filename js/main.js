// Image Box Container
const imageBoxContainer = document.querySelector(".image-box");
// Slider Buttons
const nextButton = document.getElementById("next-btn");
const previousButton = document.getElementById("previous-btn");

// Store Image Url
const imageUrls = [
  "./images/img-01.jpg",
  "./images/img-02.jpg",
  "./images/img-03.jpg",
  "./images/img-04.jpg",
  "./images/img-05.jpg",
  "./images/img-06.jpg",
];

// Initial index & How Many Images There Is
let currentIndex = 0;
const imagesLength = imageUrls.length;

// Append Images Into Page
imageUrls.forEach((imageUrl, index) => {
  // Create <div class: "slide"> Element
  let slideDiv = document.createElement("div");
  slideDiv.className = "slide";
  // Set Slider Number Depend On The Index
  slideDiv.setAttribute("data-index", index);
  // Create <img /> Tag
  let imageElement = document.createElement("img");
  // Set <img /> src Attribute
  imageElement.setAttribute("src", imageUrl);
  // Append each <img/> to image box
  slideDiv.appendChild(imageElement);
  imageBoxContainer.appendChild(slideDiv);
});

// Set Active Class To First Image
handleActiveClassName(
  document.querySelector(`[data-index= '${currentIndex}']`)
);

// Handle Click On Buttons
nextButton.addEventListener("click", nextPhoto);
previousButton.addEventListener("click", previousPhoto);

// Create Next Photo Function
function nextPhoto() {
  if (currentIndex < imagesLength) {
    currentIndex++;
  } else {
    currentIndex = 0;
  }
  handleActiveClassName(
    document.querySelector(`[data-index= '${currentIndex}']`)
  );
}

// Create Previous Photo Function
function previousPhoto() {
  if (currentIndex > 0) {
    currentIndex--;
  } else {
    currentIndex = imagesLength - 1;
  }
  handleActiveClassName(
    document.querySelector(`[data-index= '${currentIndex}']`)
  );
}

// Handle Active Class Function
function handleActiveClassName(ele) {
  document.querySelectorAll(".slide").forEach((slide) => {
    slide.classList.remove("active");
    ele.classList.add("active");
  });
}
