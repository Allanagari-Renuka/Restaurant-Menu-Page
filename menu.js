const menuData = {  
  appetizers: [  
      "Bruschetta",  
      "Stuffed Mushrooms",  
      "Spring Rolls",  
      "Chicken Wings",  
      "Vegetable Tempura"  
  ],  
  maincourses: [  
      "Grilled Salmon",  
      "Chicken Alfredo",  
      "Vegetable Stir Fry",  
      "Beef Tacos",  
      "Lamb Curry"  
  ],  
  desserts: [  
      "Cheesecake",  
      "Chocolate Mousse",  
      "Tiramisu",  
      "Apple Pie",  
      "Panna Cotta"  
  ],  
  drinks: [  
      "Mojito",  
      "Lemonade",  
      "Iced Tea",  
      "Cappuccino",  
      "Orange Juice"  
  ]  
};  

const menuSelect = document.getElementById("menuSelect");  
const menuItems = document.getElementById("menuItems");  

// Event listener for dropdown change  
menuSelect.addEventListener("change", function() {  
  const selectedCategory = this.value;  
  displayMenuItems(selectedCategory);  
});  

// Function to display menu items based on selected category  
function displayMenuItems(category) {  
  menuItems.innerHTML = ""; 
  menuData[category].forEach(item => {  
      const div = document.createElement("div");  
      div.className = "menu-item";  
      div.innerText = item;  
      menuItems.appendChild(div);  
  });  
}  

// Display default items (appetizers) on page load  
window.onload = function() {  
  displayMenuItems("appetizers");  
};