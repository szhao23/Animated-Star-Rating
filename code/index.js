// Select all elements with the "i" tag and then store them in a NodeList
const stars = document.querySelectorAll(".stars i");

// Loop through the "stars" NodeList
stars.forEach((star, index1) => {
  // Create EventListener that runs a function when Click Event is active
  star.addEventListener("click", () => {
    // Loop through "stars" NodeList
    stars.forEach((star, index2) => {
      // Add "active" class to the clicked star and any stars with a lower index
      // Also remove the "active" class from any stars with a higher index
      index1 >= index2
        ? star.classList.add("active")
        : star.classList.remove("active");
    });
  });
});
