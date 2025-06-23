alert("Welcome to Our Restaurant Menu Page");
document.addEventListener('DOMContentLoaded', () => {  
    const menuContent = document.getElementById('menu-content');  
    const categoryFilter = document.getElementById('category-filter');  

    // Function to create menu item elements and append to the menu content  
    const renderMenuItems = (items) => {  
        menuContent.innerHTML = ""; // Clear existing menu items  
        items.forEach(item => {  
            const itemDiv = document.createElement('div');  
            itemDiv.classList.add('menu-item');  
            itemDiv.id = item.name.toLowerCase().replace(/\s+/g, '-'); // Create a unique ID for each item  
            itemDiv.innerHTML = `  
                <h3>${item.name}</h3>  
                <p>${item.description}</p>  
            `;  
            menuContent.appendChild(itemDiv);  
        });  
    };  

    // Initial render of all menu items  
    renderMenuItems(menuItems);  

    // Function to filter menu items based on selected category  
    const filterMenu = () => {  
        const selectedCategory = categoryFilter.value;  
        const filteredItems = selectedCategory === "All"   
            ? menuItems   
            : menuItems.filter(item => item.category === selectedCategory);  

        renderMenuItems(filteredItems);  
    };  

    // Event listener for category filter  
    categoryFilter.addEventListener('change', filterMenu);  

    // Add click event listeners to each menu item for smooth scrolling  
    menuContent.addEventListener('click', (event) => {  
        if (event.target.closest('.menu-item')) {  
            const itemName = event.target.closest('.menu-item').id;  
            const section = document.getElementById(itemName);  
            const offset = section.getBoundingClientRect().top + window.scrollY;  

            window.scrollTo({ top: offset, behavior: 'smooth' });  
        }  
    });  
});