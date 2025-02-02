console.log("Script running")
// Task 1: Light & Dark Mode
// Select the light and dark buttons (you can do this separately or with querySelectorAll)
let light = document.querySelector("#lightMode")

let dark = document.querySelector("#darkMode")

let body = document.querySelector("body")

// Extra credit: Select the navbar
let nav = document.querySelector(".navbar bg-light")

// Add the event listener to the light button such that when it's clicked, the body's background color is white and text color is black
light.addEventListener("click", function(event){
  body.style.backgroundColor = "white"
  body.style.color = "black"
})
// Extra credit: Add the bg-light class and remove the bg-dark class to the navbar



// Add the event listener to the dark button such that when it's clicked, the body's background color is black and text color is white
dark.addEventListener("click", function(event){
  body.style.backgroundColor = "black"
  body.style.color = "white"
})
//  Extra credit: Add the bg-dark class and remove the bg-light class to the navbar



// Task 2: Video thumbnails
// Use getElementsByClassName to select all the images in the cards


// Console log the length of the array to confirm you have all 4 images


// Add event listeners to each one such that on mouse over, the image becomes the corresponding gif and on mouse out, the gif goes back to the image
// e.g. mouseover: ears.jpg -> ears.gif
// e.g. mouseout: ears.gif -> ears.jpg
// Extra credit: do this with a for loop and one event listener (you will need string manipulation)


