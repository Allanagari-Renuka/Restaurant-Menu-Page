// script.js

// Function to navigate to selected menu category
function navigateToMenu() {
    const selectedCategory = document.getElementById("menu-dropdown").value;
    const sections = document.querySelectorAll('.menu-section');
    
    sections.forEach(section => {
      section.style.display = 'none'; // Hide all sections
    });
  
    if (selectedCategory) {
      document.getElementById(selectedCategory).style.display = 'block'; // Show selected section
    }
  }
  
  // Function to filter items based on search input
  function filterMenu() {
    const searchQuery = document.getElementById("search-bar").value.toLowerCase();
    const sections = document.querySelectorAll('.menu-section');
  
    sections.forEach(section => {
      const items = section.getElementsByTagName('li');
      let isSectionVisible = false;
  
      // Loop through all items in the section
      for (let item of items) {
        if (item.textContent.toLowerCase().includes(searchQuery)) {
          item.style.display = 'block'; // Show item if it matches search query
          isSectionVisible = true;
        } else {
          item.style.display = 'none'; // Hide item if it does not match
        }
      }
  
      // If at least one item matches, show the section
      section.style.display = isSectionVisible ? 'block' : 'none';
    });
  }
  