# Spectrum Pharmacy Website

A modern, accessible pharmacy website built with React, Vite, and Tailwind CSS.

## Project Structure

```
Spectrum-Pharmacy/
├── client/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Header.jsx      # Sticky header with navigation
│   │   │   ├── Footer.jsx      # Footer with contact info
│   │   │   ├── Hero.jsx        # Hero section for home page
│   │   │   └── Services.jsx    # Services showcase section
│   │   ├── pages/
│   │   │   ├── Home.jsx        # Main landing page
│   │   │   ├── ServicesPage.jsx # All services detailed
│   │   │   ├── Delivery.jsx    # Free delivery info
│   │   │   ├── About.jsx       # About the pharmacy
│   │   │   ├── Contact.jsx     # Contact form and info
│   │   │   └── Refill.jsx      # Prescription refill form
│   │   ├── App.jsx             # Main app with routing
│   │   ├── main.jsx            # Entry point
│   │   └── index.css           # Global styles
│   └── package.json
└── PROJECT_SCOPE.md            # Full project requirements
```

## Features Implemented

### Components
- **Header**: Sticky navigation with mobile-responsive hamburger menu
- **Footer**: Comprehensive footer with contact info, quick links, and social media
- **Hero**: Eye-catching hero section with CTAs and trust badges
- **Services**: Service cards with hover effects and featured service highlighting

### Pages
1. **Home**: Landing page with hero, services preview, trust section, and testimonials
2. **Services**: Complete listing of all 10 pharmacy services
3. **Delivery**: Dedicated page for free delivery service details
4. **About**: Company story, mission, values, and credentials
5. **Contact**: Contact form with map section and business hours
6. **Refill**: Multi-step prescription refill form with delivery options

## Design Features

- Clean, medical-professional layout
- Accessibility-focused (WCAG AA compliant)
- Minimum 18px body text for readability
- Mobile-responsive design
- Icon-based visual elements
- Professional color scheme (Blues, Greens, Whites)
- Generous white space
- Hover effects and smooth transitions

## Getting Started

### Installation

```bash
cd client
npm install
```

### Development

```bash
npm run dev
```

This will start the development server at `http://localhost:5173`

### Build for Production

```bash
npm run build
```

## Technologies Used

- **React 18+**: UI library
- **Vite**: Build tool and dev server
- **Tailwind CSS**: Utility-first styling
- **React Router**: Client-side routing

## Color Palette

- **Primary Blue**: #0066CC (trust, professionalism)
- **Dark Blue**: #004C99 (accents, headers)
- **Healthcare Green**: #00A86B (wellness, health)
- **Accent Orange**: #FF6B35 (CTA buttons)
- **Neutral Grays**: Various shades for backgrounds and text

## Accessibility

- WCAG AA compliant contrast ratios
- Keyboard navigation support
- Screen reader compatible
- Minimum tap target size: 44x44px
- Focus states on interactive elements
- ARIA attributes on forms

## Next Steps

1. Add form submission backend integration
2. Implement Google Maps embed on Contact page
3. Add real testimonials (HIPAA-compliant)
4. Integrate appointment scheduling system
5. Add delivery tracking functionality
6. Implement prescription refill portal backend
7. Add SSL certificate
8. Optimize images and performance
9. Add SEO meta tags

## Notes

- Designed for older patients - prioritizes readability
- HIPAA compliance considerations throughout
- Limited photography approach - relies on icons and typography
- Trust and professionalism emphasized in design

## License

Copyright © 2024 Spectrum Pharmacy. All rights reserved.
