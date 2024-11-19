// burger menu

function myFunction() {
    var x = document.getElementById("burger-nav");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  
    const imageA = document.querySelector('.image-a');
    const imageB = document.querySelector('.image-b');
  
    imageA.classList.toggle('hidden');
    imageB.classList.toggle('hidden');
  }
  
