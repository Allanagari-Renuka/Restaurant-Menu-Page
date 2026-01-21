# 🍽️ Restaurant Menu Page

A modern, interactive restaurant menu web application featuring a clean UI, dynamic menu rendering, and contact functionality. Perfect for restaurants, cafes, and food establishments looking to showcase their offerings online.

![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)
![Node.js](https://img.shields.io/badge/Node.js-339933?logo=node.js&logoColor=white)
![License](https://img.shields.io/badge/license-MIT-green)

## ✨ Features

- 🎨 **Modern & Responsive Design** - Beautiful UI that works seamlessly on all devices
- 📱 **Mobile-First Approach** - Optimized for smartphones and tablets
- 🍕 **Dynamic Menu Rendering** - Menu items loaded from JSON data
- 🔍 **Category Filtering** - Easy navigation through different menu sections
- 📧 **Contact Page** - Integrated contact functionality for customer inquiries
- ⚡ **Fast Loading** - Lightweight and optimized for performance
- 🎯 **User-Friendly** - Intuitive interface for easy browsing

## 🛠️ Tech Stack

### Frontend
- **HTML5** - Semantic markup
- **CSS3** - Modern styling and animations
- **JavaScript (ES6+)** - Interactive functionality

### Backend
- **Node.js** - Server-side runtime
- Backend services for data management

### Data
- **JSON** - Menu data storage and management

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v14 or higher)
- **npm** (comes with Node.js)
- A modern web browser (Chrome, Firefox, Safari, or Edge)

## 🚀 Quick Start

### 1. Clone the Repository

```bash
git clone https://github.com/Allanagari-Renuka/Restaurant-Menu-Page.git
cd Restaurant-Menu-Page
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Start the Application

**Option A: Simple HTTP Server**
```bash
# If you have Python installed
python -m http.server 8000

# Or using Node.js http-server
npx http-server -p 8000
```

**Option B: With Backend**
```bash
# Navigate to backend directory
cd backend
npm install
npm start
```

### 4. Open in Browser

Navigate to `http://localhost:8000` in your web browser.

## 📂 Project Structure

```
Restaurant-Menu-Page/
├── backend/              # Backend server code
│   ├── server.js        # Main server file
│   ├── routes/          # API routes
│   └── package.json     # Backend dependencies
├── contact/             # Contact page files
│   ├── contact.html     # Contact form page
│   ├── contact.css      # Contact page styles
│   └── contact.js       # Contact form logic
├── images/              # Image assets
│   ├── food-items/      # Menu item images
│   └── backgrounds/     # Background images
├── menu/                # Menu section files
│   ├── menu.html        # Menu display page
│   ├── menu.css         # Menu styles
│   └── menu.js          # Menu functionality
├── templates/           # Reusable HTML templates
├── home.html            # Homepage
├── index.css            # Global styles
├── script.js            # Main JavaScript file
├── menu.js              # Menu data handling
├── m.json               # Menu data (JSON)
├── settings.json        # Application settings
├── logo.png             # Restaurant logo
├── package.json         # Project dependencies
└── README.md            # Project documentation
```

## 🎯 Key Features Explained

### Dynamic Menu System

The menu is powered by a JSON-based data structure (`m.json`) that allows for easy updates without touching the code:

```json
{
  "categories": [
    {
      "name": "Appetizers",
      "items": [
        {
          "name": "Spring Rolls",
          "description": "Crispy vegetable spring rolls",
          "price": "$5.99",
          "image": "images/spring-rolls.jpg"
        }
      ]
    }
  ]
}
```

### Responsive Design

- Mobile-first CSS approach
- Flexbox and Grid layouts
- Media queries for various screen sizes
- Touch-friendly interface elements

### Interactive Features

- **Category Filters**: Click to view specific menu categories
- **Search Functionality**: Find menu items quickly
- **Image Gallery**: Beautiful food photography
- **Smooth Animations**: CSS transitions for better UX

## 🎨 Customization

### Updating Menu Items

Edit `m.json` to add, remove, or modify menu items:

```json
{
  "name": "Your Dish Name",
  "description": "Delicious description",
  "price": "$9.99",
  "category": "Main Course",
  "image": "images/your-dish.jpg"
}
```

### Styling

Modify `index.css` for global styles or component-specific CSS files:

```css
:root {
  --primary-color: #ff6b6b;
  --secondary-color: #4ecdc4;
  --text-color: #2d3436;
  --background-color: #ffffff;
}
```

### Restaurant Information

Update `settings.json` with your restaurant details:

```json
{
  "restaurantName": "Your Restaurant",
  "address": "123 Main St, City, State",
  "phone": "(555) 123-4567",
  "email": "info@yourrestaurant.com",
  "hours": {
    "monday": "11:00 AM - 10:00 PM",
    "tuesday": "11:00 AM - 10:00 PM"
  }
}
```

## 📱 Pages

### Home Page (`home.html`)
- Welcome section
- Featured dishes
- Restaurant highlights
- Call-to-action buttons

### Menu Page (`menu/`)
- Complete menu display
- Category filtering
- Item details and images
- Pricing information

### Contact Page (`contact/`)
- Contact form
- Location map (if integrated)
- Business hours
- Social media links

## 🔧 Configuration

### Settings File

The `settings.json` file allows you to configure:

- Restaurant name and branding
- Contact information
- Operating hours
- Social media links
- Feature toggles

## 🚀 Deployment

### GitHub Pages

```bash
# Build for production (if applicable)
npm run build

# Deploy to GitHub Pages
git add .
git commit -m "Deploy to GitHub Pages"
git push origin main
```

Then enable GitHub Pages in repository settings.

### Netlify

1. Connect your GitHub repository to Netlify
2. Set build command (if needed): `npm run build`
3. Set publish directory: `./` or `dist/`
4. Deploy!

### Vercel

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Traditional Hosting

Upload all files to your web hosting provider via FTP/SFTP:
- Ensure `home.html` or `index.html` is the entry point
- Upload all assets (images, CSS, JS)
- Configure server to serve static files

## 🛠️ Development

### Adding New Features

1. Create a new branch
```bash
git checkout -b feature/new-feature
```

2. Make your changes

3. Test thoroughly

4. Commit and push
```bash
git add .
git commit -m "Add new feature"
git push origin feature/new-feature
```

5. Create a pull request

### Code Style

- Use consistent indentation (2 or 4 spaces)
- Follow semantic HTML practices
- Comment complex JavaScript logic
- Use meaningful variable and function names

## 📊 Performance Optimization

### Image Optimization
- Compress images before uploading
- Use appropriate image formats (WebP for modern browsers)
- Implement lazy loading for images

### Code Optimization
- Minify CSS and JavaScript for production
- Remove unused code
- Use CDN for external libraries

### Caching
- Implement browser caching headers
- Use service workers for offline functionality

## 🐛 Troubleshooting

### Common Issues

**Menu items not displaying:**
- Check `m.json` for proper JSON syntax
- Verify image paths are correct
- Check browser console for errors

**Styles not applying:**
- Clear browser cache
- Check CSS file paths in HTML
- Verify CSS syntax

**Backend connection issues:**
- Ensure backend server is running
- Check API endpoint URLs
- Verify CORS settings

## 🤝 Contributing

Contributions are welcome! Here's how you can help:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### Contribution Guidelines

- Follow the existing code style
- Write clear commit messages
- Update documentation as needed
- Test your changes thoroughly
- Add comments for complex logic

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👥 Author

**Renuka Allanagari**
- GitHub: [@Allanagari-Renuka](https://github.com/Allanagari-Renuka)

## 🙏 Acknowledgments

- Food images from [Unsplash](https://unsplash.com)
- Icons from [Font Awesome](https://fontawesome.com)
- Inspiration from modern restaurant websites

## 📞 Support

Need help? Here's how to get support:

- 📧 Open an [issue](https://github.com/Allanagari-Renuka/Restaurant-Menu-Page/issues)
- 💬 Check [existing issues](https://github.com/Allanagari-Renuka/Restaurant-Menu-Page/issues) for solutions
- 📖 Review the documentation above

## 🗺️ Roadmap

- [ ] Online ordering system integration
- [ ] Payment gateway integration
- [ ] Table reservation functionality
- [ ] Multi-language support
- [ ] Dark mode theme
- [ ] Admin dashboard for menu management
- [ ] Customer reviews and ratings
- [ ] Nutritional information display
- [ ] Allergen information
- [ ] Special offers and promotions section

## 📈 Future Enhancements

- **Progressive Web App (PWA)** - Offline functionality
- **Real-time Updates** - Live menu availability
- **User Accounts** - Save favorites and order history
- **Analytics** - Track popular menu items
- **SEO Optimization** - Better search engine visibility

---

⭐ If you find this project helpful, please give it a star!

🍴 Bon Appétit!
