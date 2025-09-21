import React from 'react';
import { loadWheelSizes, loadTireUsageTypes, loadTireSeasonTypes } from '../utils/dataLoader';

const WheelsTires = () => {
  const wheelSizes = loadWheelSizes();
  const tireUsageTypes = loadTireUsageTypes();
  const tireSeasonTypes = loadTireSeasonTypes();

  const WheelSizeCard = ({ rimSize, sizes }) => (
    <div className="card wheel-size-card">
      <div className="wheel-size-header">
        <h3>{rimSize}" Rim</h3>
      </div>
      
      <div className="sizes-grid">
        {sizes.map((size, index) => (
          <span key={index} className="size-badge">
            {size}
          </span>
        ))}
      </div>
    </div>
  );

  const TireTypeCard = ({ tireType, category }) => (
    <div className="card tire-type-card">
      <div className="tire-type-header">
        <h3>{tireType.name}</h3>
        <span className="tire-category">{category}</span>
      </div>
      
      <p className="tire-type-description">{tireType.description}</p>
    </div>
  );

  return (
    <div className="container">
      <div className="page-header">
        <h1>Wheels & Tires</h1>
        <p>Comprehensive guide to wheel sizes, tire types, and their applications for different driving conditions and vehicle types.</p>
      </div>

      <div className="wheel-sizes-section">
        <h2>Popular Wheel Sizes by Rim Diameter</h2>
        <div className="wheel-sizes-grid">
          {Object.entries(wheelSizes).map(([rimSize, sizes]) => (
            <WheelSizeCard key={rimSize} rimSize={rimSize} sizes={sizes} />
          ))}
        </div>
      </div>

      <div className="tire-types-section">
        <h2>Tire Usage Types</h2>
        <div className="tire-types-grid">
          {tireUsageTypes.map((tireType, index) => (
            <TireTypeCard key={index} tireType={tireType} category="Usage" />
          ))}
        </div>
      </div>

      <div className="tire-seasons-section">
        <h2>Tire Season Types</h2>
        <div className="tire-types-grid">
          {tireSeasonTypes.map((tireType, index) => (
            <TireTypeCard key={index} tireType={tireType} category="Season" />
          ))}
        </div>
      </div>
    </div>
  );
};

export default WheelsTires;
