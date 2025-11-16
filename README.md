# Drone By Nature - Modern Material Design Website

A modern, redesigned version of the Drone By Nature marketplace website, following Google Material Design 3 standards.

## Features

- **Material Design 3** - Follows latest Google Material Design guidelines
- **Responsive Design** - Fully responsive across all devices (mobile, tablet, desktop)
- **Modern UI Components** - Cards, buttons, modals, forms with Material Design styling
- **Smooth Animations** - Elegant transitions and scroll animations
- **Interactive Elements** - Modal dialogs, mobile menu, form validation
- **Accessibility** - ARIA labels and keyboard navigation support

## Design Highlights

### Material Design 3 Implementation
- Material Design 3 color system (primary, secondary, tertiary, surface, etc.)
- Typography scale following Material Design standards
- Elevation system for cards and components
- Shape system with proper border radius values
- Motion system with standard easing curves

### Key Sections
1. **Hero Section** - Eye-catching landing with call-to-action buttons
2. **Features Section** - Showcase of key platform benefits
3. **How It Works** - Step-by-step guide for users
4. **Call-to-Action Section** - Encourages sign-ups with benefits
5. **Footer** - Links and company information

### Interactive Components
- Sign In/Sign Up modals
- Account type selector (Contributor/Customer)
- Mobile-responsive navigation menu
- Password visibility toggles
- Form validation
- Smooth scrolling

## Getting Started

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- No build tools or dependencies required!

### Installation

1. Clone or download this repository
2. Open `index.html` in your web browser
3. That's it! No build process needed.

### File Structure

```
Drone platform/
├── index.html          # Main HTML file
├── styles.css          # Material Design 3 styles
├── script.js           # JavaScript for interactivity
└── README.md           # This file
```

## Customization

### Colors
Edit the CSS custom properties (variables) in `styles.css`:

```css
:root {
    --md-sys-color-primary: #6750A4;
    --md-sys-color-secondary: #625B71;
    /* ... more colors ... */
}
```

### Typography
Modify the typography scale in `styles.css`:

```css
:root {
    --md-sys-typescale-display-large-size: 57px;
    /* ... more typography ... */
}
```

### Content
Edit `index.html` to update:
- Text content
- Section order
- Links and navigation items

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Material Design Resources

- [Material Design 3 Guidelines](https://m3.material.io/)
- [Material Design Color System](https://m3.material.io/styles/color/the-color-system/overview)
- [Material Icons](https://fonts.google.com/icons)

## License

This project is a redesign demonstration. Please ensure proper licensing for production use.

## Notes

- This is a front-end only implementation
- Form submissions are demo-only (console logging)
- Backend integration would be required for production
- All animations and interactions are client-side JavaScript
