
// To maintain the active state across page loads, add this to each page:
// Run this on page load to highlight the current page's button
document.addEventListener('DOMContentLoaded', () => {
  const currentPage = window.location.pathname.split('/').pop();
  const bttnEList = document.querySelectorAll('.sidebar-item-bttn');
  
  bttnEList.forEach(bttnEL => {
    const href = bttnEL.getAttribute('href');
    
    // Check if this button's href matches the current page
    if (href && href === currentPage) {
      bttnEL.classList.add('special');
    }
  });
});



// Create_Flashcards JS
document.querySelector('.add-audio-bttn').addEventListener('click', function(e) {
    const audioInput = document.getElementById('audio-input');
    audioInput.disabled = false;
    audioInput.click();
});


// // To flip the flashcard
const card = document.querySelector('.card__inner');
console.log('Card element:', card); // This should not be null

card.addEventListener('click', function(e) {
  console.log('Card clicked!');
  card.classList.toggle('is-flipped');
});