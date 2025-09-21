import React from 'react';
import { loadManufacturers } from '../utils/dataLoader';

const Manufacturers = () => {
  const regions = loadManufacturers();

  const ManufacturerCard = ({ manufacturer }) => (
    <div className="card manufacturer-card">
      <div className="manufacturer-header">
        <h3>{manufacturer.name}</h3>
      </div>
      
      <div className="models-section">
        <h4>Notable Models</h4>
        <div className="models-grid">
          {manufacturer.notable_models.map((model, index) => (
            <span key={index} className="model-badge">
              {model}
            </span>
          ))}
        </div>
      </div>
    </div>
  );

  const RegionSection = ({ region }) => (
    <div className="region-section">
      <h2>{region.region}</h2>
      <div className="manufacturers-grid">
        {region.makers.map((manufacturer, index) => (
          <ManufacturerCard key={index} manufacturer={manufacturer} />
        ))}
      </div>
    </div>
  );

  return (
    <div className="container">
      <div className="page-header">
        <h1>Manufacturers & Models</h1>
        <p>Comprehensive database of major global automakers and their notable models from 1970 to 2025, organized by region.</p>
      </div>

      <div className="manufacturers-content">
        {regions.map((region, index) => (
          <RegionSection key={index} region={region} />
        ))}
      </div>
    </div>
  );
};

export default Manufacturers;
