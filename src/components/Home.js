import React from 'react';
import { Link } from 'react-router-dom';
import { loadCars } from '../utils/dataLoader';

const Home = () => {
  const vehicles = loadCars();
  const totalVehicles = vehicles.length;

  const stats = [
    { title: 'Total Vehicles', value: totalVehicles, icon: '🚗' },
    { title: 'Engine Types', value: '9+', icon: '⚙️' },
    { title: 'Transmissions', value: '6', icon: '🔧' },
    { title: 'Body Styles', value: '15+', icon: '🏗️' },
    { title: 'Manufacturers', value: '50+', icon: '🏭' },
    { title: 'Suspension Types', value: '10+', icon: '🛞' }
  ];

  const features = [
    {
      title: 'Comprehensive Vehicle Database',
      description: 'Explore detailed information about various car models, their specifications, and technical details.',
      link: '/vehicles',
      icon: '📊'
    },
    {
      title: 'Engine & Powertrain Details',
      description: 'Learn about different engine types, from traditional ICE to modern electric and hybrid systems.',
      link: '/powertrains',
      icon: '⚡'
    },
    {
      title: 'Transmission Systems',
      description: 'Discover various transmission types including manual, automatic, CVT, and dual-clutch systems.',
      link: '/transmissions',
      icon: '🔩'
    },
    {
      title: 'Body Styles & Segments',
      description: 'Explore different vehicle body types and market segments from compact cars to luxury SUVs.',
      link: '/body-types',
      icon: '🚙'
    },
    {
      title: 'Suspension & Frame',
      description: 'Understand suspension systems and frame construction types used in modern vehicles.',
      link: '/suspension',
      icon: '🛠️'
    },
    {
      title: 'Wheels & Tires',
      description: 'Learn about wheel sizes, tire types, and their applications for different driving conditions.',
      link: '/wheels-tires',
      icon: '🛞'
    }
  ];

  return (
    <div className="container">
      <div className="hero">
        <h1>Welcome to the Car Encyclopedia</h1>
        <p className="hero-subtitle">
          Your comprehensive guide to automotive technology, specifications, and engineering.
          Explore detailed information about engines, transmissions, body types, and much more.
        </p>
      </div>

      <div className="stats-section">
        <h2>Database Overview</h2>
        <div className="grid grid-3">
          {stats.map((stat, index) => (
            <div key={index} className="stat-card">
              <div className="stat-icon">{stat.icon}</div>
              <div className="stat-value">{stat.value}</div>
              <div className="stat-title">{stat.title}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="features-section">
        <h2>Explore Our Categories</h2>
        <div className="grid grid-2">
          {features.map((feature, index) => (
            <div key={index} className="card feature-card">
              <div className="feature-icon">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
              <Link to={feature.link} className="btn">
                Explore {feature.title}
              </Link>
            </div>
          ))}
        </div>
      </div>

      <div className="recent-vehicles">
        <h2>Featured Vehicles</h2>
        <div className="grid grid-3">
          {vehicles.slice(0, 6).map((vehicle, index) => (
            <div key={index} className="card vehicle-preview">
              <h3>{vehicle.model}</h3>
              <div className="vehicle-specs">
                <p><strong>Body:</strong> {vehicle.body_and_class.body}</p>
                <p><strong>Engine:</strong> {vehicle.powertrain.name}</p>
                <p><strong>Transmission:</strong> {vehicle.transmission.name}</p>
                <p><strong>Segment:</strong> {vehicle.body_and_class.segment}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-4">
          <Link to="/vehicles" className="btn">
            View All Vehicles
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
