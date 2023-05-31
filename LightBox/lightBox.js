// Function to include HTML code

function includeHTML() {
    let html = `<div id="vis-popup"><span id="close" onclick="closePopUp()"><img src="images/closeButton.png" id="npop" alt=""></span>
    <img src="images/LeftArrow.png" id="left-arrow" alt="">
    <img src="images/RightArrow.png" id="right-arrow" alt="">
    <img src="images/Ubuntu.jpg" id="main-pop-image" alt=""></div>`;

    let popDiv = document.createElement("div");
    popDiv.innerHTML = html;

    document.body.insertBefore(popDiv, document.body.firstChild);
}

// Global Variable
let img;
let current;



// Function to init plugin

function imagePopupInit(target) {

    // Select all images with class (target)

    img = document.getElementsByClassName(target);

    // add event listner on all selected images

    for (let i = 0; i < img.length; i++) {
        // add event listner
        img[i].addEventListener("click", function () {
            document.getElementById("main-pop-image").src = this.src;
            document.getElementById("vis-popup").style.display = "block";
            checkArrow();
        });
        
    }

    includeHTML();

    // Next Button
    document.getElementById("right-arrow").addEventListener("click", function() {
        NextImage();
    });

    // Previous Button
    document.getElementById("left-arrow").addEventListener("click", function() {
        PreviousImage();
    });
}

// Close Button fucntion

function closePopUp() {
    document.getElementById("main-pop-image").src = "";
    document.getElementById("vis-popup").style.display = "none";
}

// Next image
function NextImage() {
    getCurrentImage();
    current++;
    document.getElementById("main-pop-image").src = img[current].src;
    checkArrow();
}



// Previous image
function PreviousImage() {
    getCurrentImage();
    current--;
    document.getElementById("main-pop-image").src = img[current].src;
    checkArrow();
}



// Get current image's SRC
function getCurrentImage() {
    for (let i = 0; i < img.length; i++) {
        if (img[i].src == document.getElementById("main-pop-image").src) {
            current = i;
        }
        
    }
}

// Hide/Show Arrow fucntion

function checkArrow() {
    getCurrentImage();
    
    if (img.length == 1) {
      // Hide both arrows if there is only one image
      document.getElementById("left-arrow").style.display = "none";
      document.getElementById("right-arrow").style.display = "none";
    } else {
      if (current == 0) {
        // Hide the previous arrow and display the next arrow
        document.getElementById("left-arrow").style.display = "none";
        document.getElementById("right-arrow").style.display = "block";
      } else if (current == img.length - 1) {
        // Hide the next arrow and display the previous arrow
        document.getElementById("right-arrow").style.display = "none";
        document.getElementById("left-arrow").style.display = "block";
      } else {
        // Display both arrows
        document.getElementById("left-arrow").style.display = "block";
        document.getElementById("right-arrow").style.display = "block";
      }
    }
  }
  
