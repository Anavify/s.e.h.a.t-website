# s.e.h.a.t Website

Your health companion for all your healthcare needs.

## 🎯 Overview

s.e.h.a.t is a comprehensive healthcare platform that solves critical healthcare challenges in India through:
- Digitized health histories
- Emergency solutions
- Institutional health record management
- Everyday health management tools

## 📁 Project Structure

```
s.e.h.a.t-website/
├── index.html              # Main HTML file
├── styles.css              # Custom project-specific styles
├── script.js               # Custom project-specific scripts
├── css/                    # Modular CSS components
│   ├── variables.css       # CSS variables and design tokens
│   ├── base.css           # Reset and base styles
│   ├── navigation.css     # Navigation component styles
│   ├── hero.css           # Hero section styles
│   ├── buttons.css        # Button component styles
│   ├── cards.css          # Card component styles
│   ├── sections.css       # Section layout styles
│   ├── footer.css         # Footer component styles
│   └── animations.css     # Animation utilities
├── js/                     # Modular JavaScript components
│   ├── navigation.js      # Navigation functionality
│   ├── animations.js      # Scroll animations & reveals
│   ├── utils.js           # Utility functions
│   └── app.js             # Main application module
└── public/
    └── assets/
        └── s.e.h.a.t Branding/  # Brand assets (logos, icons)
```

## 🎨 Design System

### Colors
- Primary: `#ff5598` (Pink)
- White: `#ffffff`
- Dark: `#1a1a1a`
- Gray: `#666666`

### Typography
- Font Family: System font stack for optimal performance
- Base Size: 16px
- Headings: Bold, scaled responsively

## 🚀 Getting Started

### Prerequisites
- A modern web browser
- (Optional) Local web server for development

### Installation

1. Clone the repository:
```bash
git clone https://github.com/Anavify/s.e.h.a.t-website.git
cd s.e.h.a.t-website
```

2. Open `index.html` in your browser, or use a local server:
```bash
# Using Python
python -m http.server 8000

# Using Node.js (http-server)
npx http-server

# Using PHP
php -S localhost:8000
```

3. Navigate to `http://localhost:8000`

## 📱 Features

### For Users
- **Digitized Health Histories**: Two-minute summarized health records
- **Emergency Solutions**: Ambulance Connect, Accident Safe, SOS Button
- **Health Management**: Medicine tracking, reminders, symptom logging
- **Medical Awareness**: Educational programs and resources

### For Healthcare Providers
- **Time Savings**: Quick access to patient history
- **Better Context**: Complete medical records at a glance
- **Efficient Workflows**: Streamlined patient management

## 🛠️ Development

### Modular Architecture

The project uses a modular component-based architecture for easy maintenance:

#### CSS Modules
- `variables.css`: Central design tokens and CSS variables
- `base.css`: Global resets and typography
- Component-specific CSS files for navigation, buttons, cards, etc.

#### JavaScript Modules
- `navigation.js`: Menu toggle, smooth scroll, navbar effects
- `animations.js`: Scroll reveal, intersection observer
- `utils.js`: Reusable utility functions
- `app.js`: Main application initialization

### Adding New Features

1. **New Section**: Add HTML in `index.html`, styles in `css/sections.css`
2. **New Component**: Create dedicated CSS file in `css/` folder
3. **New Functionality**: Add module in `js/` folder and import in `app.js`

### Customization

- **Colors**: Modify CSS variables in `css/variables.css`
- **Typography**: Update font settings in `css/variables.css`
- **Spacing**: Adjust spacing variables in `css/variables.css`
- **Custom Styles**: Add to `styles.css` (project-specific overrides)
- **Custom Scripts**: Add to `script.js` (project-specific functionality)

## 🎯 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📈 Performance

- Optimized CSS with modular loading
- Intersection Observer for scroll animations
- Debounced/throttled scroll events
- Minimal JavaScript for fast load times
- SVG graphics for scalable visuals

## 🔧 Build & Deploy

### GitHub Pages
1. Push to main branch
2. Enable GitHub Pages in repository settings
3. Select main branch as source

### Other Hosting
Upload all files to your web host via FTP or deploy using:
- Netlify
- Vercel
- AWS S3
- Firebase Hosting

## 📄 License

Copyright © 2025 s.e.h.a.t. All rights reserved.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📞 Contact

For questions or support, please contact the s.e.h.a.t team.

---

Built with ❤️ for better healthcare in India
