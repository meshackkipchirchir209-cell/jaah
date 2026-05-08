# Sergoit Resort Hotel Website

A modern, responsive website for Sergoit Resort Hotel built with React and Tailwind CSS.

## Features

- 🏨 Beautiful hero section with booking call-to-action
- ✨ Feature highlights (Luxury Rooms, Restaurant & Dining, Swimming Pool)
- 📸 Image gallery showcasing resort facilities
- 📞 Contact section with location and phone number
- 📱 Fully responsive design for mobile, tablet, and desktop
- 🎨 Modern styling with Tailwind CSS
- ⚡ Fast and optimized React components

## Project Structure

```
jaah/
├── public/
│   └── index.html          # HTML template with Tailwind CSS CDN
├── src/
│   ├── components/
│   │   └── SergoitResortWebsite.js  # Main website component
│   ├── App.js              # App component
│   ├── App.css             # Global styles
│   └── index.js            # React entry point
├── package.json            # Project dependencies
├── .gitignore             # Git ignore configuration
└── README.md              # This file
```

## Installation

1. Clone the repository:
```bash
git clone https://github.com/meshackkipchirchir209-cell/jaah.git
cd jaah
```

2. Install dependencies:
```bash
npm install
```

## Running the Development Server

```bash
npm start
```

The website will open at `http://localhost:3000` in your browser. The page will reload when you make changes.

## Building for Production

```bash
npm run build
```

Creates an optimized production build in the `build/` directory.

## Features Overview

### Hero Section
- Eye-catching background image
- Resort name and tagline
- "Book Your Stay" button with hover effects

### Features Section
- Three-column grid layout
- Cards highlighting key amenities:
  - Luxury Rooms
  - Restaurant & Dining
  - Swimming Pool

### About Section
- Detailed description of the resort
- Information about the experience offered

### Gallery
- Three showcase images
- Responsive grid layout
- Professional imagery from Unsplash

### Contact Section
- Location with emoji marker
- Phone number
- "Call Now" button
- Green color scheme for brand consistency

### Footer
- Copyright information

## Customization

### Update Contact Information
Edit the contact details in `SergoitResortWebsite.js`:
```jsx
<p className="text-lg mb-2">📍 MCX5+GM, Sergoit, Kenya</p>
<p className="text-lg mb-6">📞 0748 639537</p>
```

### Change Images
Replace the Unsplash URLs in the component with your own images:
```jsx
backgroundImage: "url('YOUR_IMAGE_URL')"
src="YOUR_IMAGE_URL"
```

### Update Colors
Modify Tailwind CSS classes like `bg-green-700` to use different colors.

## Technology Stack

- **React 18** - JavaScript library for building user interfaces
- **Tailwind CSS** - Utility-first CSS framework
- **React Scripts** - Build tooling for React apps

## Deployment Options

### GitHub Pages
```bash
npm run build
# Push the build folder to GitHub Pages
```

### Vercel
```bash
npm install -g vercel
vercel
```

### Netlify
```bash
npm run build
# Drag and drop the build folder to Netlify
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

© 2026 Sergoit Resort Hotel. All rights reserved.

## Contact

For inquiries about the resort:
- 📍 MCX5+GM, Sergoit, Kenya
- 📞 0748 639537

---

Built with ❤️ using React and Tailwind CSS
