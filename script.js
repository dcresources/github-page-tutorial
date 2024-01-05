// Get the element by ID
const paragraph = document.getElementById('paragraph');

// Add a click event listener to the paragraph
paragraph.addEventListener('click', function() {
  // Change the text content of the paragraph
  paragraph.textContent = 'Clicked!';
});
