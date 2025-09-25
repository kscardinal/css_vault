const emailInput = document.getElementById("emailInput");
const inputBox = document.querySelector(".input-box .input"); 
const chars = document.querySelectorAll(".char");

emailInput.addEventListener('focus', () => {
    console.log("focus");
    const value = emailInput.value.trim();
    if (emailPattern.test(value)) {
        emailInput.style.borderColor = "#39AD48";
        chars.forEach(el => {
            el.style.color = "#39AD48"
        });
    } else {
        emailInput.style.borderColor = "#3679FF";
        chars.forEach(el => {
            el.style.color = "#3679FF"
        });
    }
});

emailInput.addEventListener('blur', () => {
    console.log("blur")
    if (emailInput.value === "") {
        emailInput.style.borderColor = "#999";
        chars.forEach(el => {
            el.style.color = "#999"
        });
    }
});

const circle = document.getElementById("circle-o");
const rectangle = document.getElementById("rectangle-o");

const emailPattern = /^[^\s@]+@[^\s@]+\.[a-zA-Z]{2,}$/;

function cropToCenterSquare(image) {
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');

  // Get the shortest side for square crop
  const size = Math.min(image.width, image.height);

  // Center the crop
  const sx = (image.width - size) / 2;
  const sy = (image.height - size) / 2;

  // Set canvas size to square
  canvas.width = size;
  canvas.height = size;

  // Draw the cropped square from the image
  ctx.drawImage(image, sx, sy, size, size, 0, 0, size, size);

  // Return the canvas or a data URL (cropped image)
  return canvas.toDataURL();
}

// Usage example
const img = new Image();
img.onload = function() {
  const croppedDataUrl = cropToCenterSquare(img);
  // Do something with croppedDataUrl (show, upload, etc.)
};
img.src = 'css_001.jpg';


emailInput.addEventListener("input", function () {
  const value = emailInput.value.trim();

  if (emailPattern.test(value)) {
    emailInput.style.borderColor = "#39AD48";
    chars.forEach(el => {
        el.style.color = "#39AD48"
    });
    // after fade out, change background to image and fade in
   const img = new Image();
    img.onload = function() {
    const croppedDataUrl = cropToCenterSquare(img);

    // Delay background setting by 400ms (to match transition duration)
    setTimeout(() => {
        circle.style.backgroundImage = `url('${croppedDataUrl}')`;
        circle.style.backgroundRepeat = "no-repeat";
        circle.style.backgroundPosition = "center center";
        circle.style.backgroundSize = "100% 100%";
        circle.style.opacity = "1";
    }, 0);
    };
    img.src = 'css_001.jpg';


  } else {
    emailInput.style.borderColor = "#3679FF";
    chars.forEach(el => {
        el.style.color = "#3679FF"
    });
     // reset to shimmer
    setTimeout(() => {
      circle.style.background = "linear-gradient(100deg, #ededed 30%, #dcdcdc 50%, #ededed 70%)";
      circle.style.backgroundSize = "400%";
      circle.style.animation = "shimmer 1.5s infinite linear";
      circle.style.opacity = "1";
    }, 0);
  }
});
