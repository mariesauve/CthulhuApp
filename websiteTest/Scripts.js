
const myButton = document.getElementById("myButton");

myButton.addEventListener("click", myBox => {
    myBox.target.style.backgroundColor = "purple"
    myBox.target.textContent = "welcome! ";
});

document.addEventListener('DOMContentLoaded', function () {
    const artGallery = document.getElementById('artGallery');
    const artItems = artGallery.querySelectorAll('.art-item');
  
    // Hide all art items initially
    artItems.forEach((item) => {
      item.style.display = 'none';
    });
  
    // Add search functionality
    document.getElementById('searchForm').addEventListener('submit', function (event) {
      event.preventDefault(); // Prevent form submission
  
      const searchQuery = document.getElementById('searchInput').value.trim();
  
      // Hide all items before showing the matched one
      artItems.forEach((item) => {
        item.style.display = 'none'; // Hide all items
      });
  
      if (searchQuery) {
        const artItem = document.getElementById(`art-${searchQuery}`);
        if (artItem) {
          artItem.style.display = 'block'; // Show the matched item
          artItem.scrollIntoView({ behavior: 'smooth', block: 'center' }); // Optional scroll to the item
        } else {
          // If no match, optionally show a message
          alert(`No art found with ID #${searchQuery}`);
        }
      }
    });
  });
  
  