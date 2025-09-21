# Car Encyclopedia

A comprehensive Single Page Application (SPA) built with React that provides detailed information about vehicles, engines, transmissions, body types, and more automotive data.

## Features

- **Vehicle Database**: Browse detailed specifications of various car models
- **Powertrain Information**: Explore different engine types from ICE to electric and hybrid systems
- **Transmission Systems**: Learn about manual, automatic, CVT, and dual-clutch transmissions
- **Body Types & Segments**: Discover different vehicle body styles and market segments
- **Suspension & Frame**: Understand suspension systems and frame construction
- **Wheels & Tires**: Information about wheel sizes and tire types
- **Manufacturers**: Comprehensive database of global automakers and their models

## Technology Stack

- **React 18** - Frontend framework
- **React Router** - Client-side routing
- **CSS3** - Modern styling with responsive design
- **JSON** - Data storage and management

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. Clone or download this repository
2. Navigate to the project directory
3. Install dependencies:

```bash
npm install
```

### Development

To run the development server:

```bash
npm start
```

The application will open in your browser at `http://localhost:3000`.

### Building for Production

To create a production build for static hosting:

```bash
npm run build
```

This will create a `build` folder with optimized static files that can be deployed to any static hosting service.

### Static Hosting

The built application can be deployed to:
- GitHub Pages
- Netlify
- Vercel
- AWS S3 + CloudFront
- Any static hosting service

Simply upload the contents of the `build` folder to your hosting provider.

## Project Structure

```
src/
├── components/          # React components
│   ├── Home.js         # Home page component
│   ├── Vehicles.js     # Vehicle listing component
│   ├── Powertrains.js  # Engine/powertrain component
│   ├── Transmissions.js # Transmission component
│   ├── BodyTypes.js    # Body types component
│   ├── Suspension.js   # Suspension component
│   ├── WheelsTires.js  # Wheels and tires component
│   └── Manufacturers.js # Manufacturers component
├── data/               # JSON data files
│   ├── cars.json
│   ├── powertrains.json
│   ├── transmissions.json
│   ├── body_and_class.json
│   ├── suspension_and_frame.json
│   ├── wheels_and_sizes.json
│   ├── tire_types.json
│   └── manufacturers_and_models.json
├── utils/              # Utility functions
│   └── dataLoader.js   # Data loading utilities
├── App.js              # Main app component
├── App.css             # App-specific styles
├── index.js            # Entry point
└── index.css           # Global styles
```

## Data Sources

The application uses comprehensive automotive data including:
- Vehicle specifications and configurations
- Engine and powertrain details
- Transmission system information
- Body styles and market segments
- Suspension and frame construction
- Wheel sizes and tire types
- Global manufacturer information

## Features

### Responsive Design
- Mobile-first approach
- Responsive grid layouts
- Touch-friendly interface

### Search and Filtering
- Real-time search functionality
- Multi-criteria filtering
- Dynamic result updates

### Modern UI/UX
- Clean, professional design
- Smooth animations and transitions
- Intuitive navigation
- Accessible interface

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

This is a static application built for demonstration purposes. The data is sourced from comprehensive automotive databases and is designed to be easily extensible.

## License

This project is open source and available under the MIT License.