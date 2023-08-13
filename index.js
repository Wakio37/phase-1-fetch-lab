function fetchBooks() { 
  return fetch("https://anapioficeandfire.com/api/books")
    .then(response => response.json())  // Parse response as JSON
    .then(data => renderBooks(data))    // Call renderBooks with JSON data
    .catch(error => console.error(error)); // Handle errors if any
}

function renderBooks(books) {
  const main = document.querySelector('main');
  books.forEach(book => {
    const h2 = document.createElement('h2');
    h2.innerHTML = book.name;
    main.appendChild(h2);
  });
}

// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
  fetchBooks(); // Call fetchBooks to initiate the fetching and rendering
});
