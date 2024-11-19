// Select the sliding text element
const slidingText = document.querySelector('.sliding-text');

// Function to animate the text
function animateText() {
  slidingText.classList.add('active');
}

// Call the animation function on page load
document.addEventListener('DOMContentLoaded', animateText);

// Reset animation on page reload or revisit
window.addEventListener('load', () => {
  slidingText.classList.remove('active');
  setTimeout(animateText, 500); // delay animation by 0.5s
});

// Repeat animation when returning to homepage
window.addEventListener('focus', () => {
  if (window.location.pathname === '/') {
    slidingText.classList.remove('active');
    setTimeout(animateText, 500); // delay animation by 0.5s
  }
});