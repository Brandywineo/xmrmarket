// script.js
// Get all the links in the navigation menu
const navLinks = document.querySelectorAll('nav a');

// Add an event listener to each link to handle navigation
navLinks.forEach(link => {
  link.addEventListener('click', event => {
    // Get the href attribute of the link
    const href = link.getAttribute('href');

    // Load the corresponding page
    loadPage(href);
  });
});

// Function to load a page
function loadPage(href) {
  // Get the main element
  const main = document.querySelector('main');

  // Load the page content
  fetch(href)
    .then(response => response.text())
    .then(html => {
      main.innerHTML = html;
    })
    .catch(error => console.error(error));
}
