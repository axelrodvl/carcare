import React, { useState } from 'react';
import { 
  loadCars, 
  loadPowertrains, 
  loadTransmissions, 
  loadBodyTypes, 
  loadMarketSegments, 
  loadSuspensionFront, 
  loadSuspensionRear, 
  loadFrameTypes, 
  loadTireUsageTypes, 
  loadTireSeasonTypes 
} from '../utils/dataLoader';

const Vehicles = () => {
  const vehicles = loadCars();
  const powertrains = loadPowertrains();
  const transmissions = loadTransmissions();
  const bodyTypes = loadBodyTypes();
  const marketSegments = loadMarketSegments();
  const suspensionFront = loadSuspensionFront();
  const suspensionRear = loadSuspensionRear();
  const frameTypes = loadFrameTypes();
  const tireUsageTypes = loadTireUsageTypes();
  const tireSeasonTypes = loadTireSeasonTypes();
  
  const [searchTerm, setSearchTerm] = useState('');
  const [filterBody, setFilterBody] = useState('');
  const [filterPowertrain, setFilterPowertrain] = useState('');

  // Helper functions to get descriptions by ID
  const getPowertrainDescription = (id) => {
    const powertrain = powertrains.find(p => p.id === id);
    return powertrain ? powertrain.description : '';
  };

  const getLayoutDescription = (layoutId) => {
    // Check in powertrains for layout descriptions
    for (const powertrain of powertrains) {
      if (powertrain.petrol && powertrain.petrol.typical_layouts) {
        const layout = powertrain.petrol.typical_layouts.find(l => l.id === layoutId);
        if (layout) return layout.description;
      }
      if (powertrain.electrical && powertrain.electrical.typical_layouts) {
        const layout = powertrain.electrical.typical_layouts.find(l => l.id === layoutId);
        if (layout) return layout.description;
      }
    }
    return '';
  };

  const getTransmissionDescription = (id) => {
    const transmission = transmissions.find(t => t.id === id);
    return transmission ? transmission.description : '';
  };

  const getBodyDescription = (id) => {
    const body = bodyTypes.find(b => b.id === id);
    return body ? body.description : '';
  };

  const getSegmentDescription = (segment) => {
    const marketSegment = marketSegments.find(s => s.segment === segment);
    return marketSegment ? marketSegment.description : '';
  };

  const getSuspensionDescription = (id, type) => {
    const suspension = type === 'front' ? suspensionFront : suspensionRear;
    const suspensionType = suspension.find(s => s.id === id);
    return suspensionType ? suspensionType.description : '';
  };

  const getFrameDescription = (construction) => {
    const frame = frameTypes.find(f => f.construction === construction);
    return frame ? frame.description : '';
  };

  const getTireUsageDescription = (id) => {
    const usage = tireUsageTypes.find(u => u.id === id);
    return usage ? usage.description : '';
  };

  const getTireSeasonDescription = (id) => {
    const season = tireSeasonTypes.find(s => s.id === id);
    return season ? season.description : '';
  };

  // Helper functions to get human-readable names
  const getLayoutName = (layoutId) => {
    for (const powertrain of powertrains) {
      if (powertrain.petrol && powertrain.petrol.typical_layouts) {
        const layout = powertrain.petrol.typical_layouts.find(l => l.id === layoutId);
        if (layout) return layout.name;
      }
      if (powertrain.electrical && powertrain.electrical.typical_layouts) {
        const layout = powertrain.electrical.typical_layouts.find(l => l.id === layoutId);
        if (layout) return layout.name;
      }
    }
    return layoutId; // fallback to ID if not found
  };

  const getSuspensionName = (id, type) => {
    const suspension = type === 'front' ? suspensionFront : suspensionRear;
    const suspensionType = suspension.find(s => s.id === id);
    return suspensionType ? suspensionType.name : id;
  };

  const getFrameName = (construction) => {
    const frame = frameTypes.find(f => f.construction === construction);
    return frame ? frame.name : construction;
  };

  const getBodyName = (id) => {
    const body = bodyTypes.find(b => b.id === id);
    return body ? body.name : id;
  };

  const getSegmentName = (segment) => {
    const marketSegment = marketSegments.find(s => s.segment === segment);
    return marketSegment ? `${marketSegment.segment} (${marketSegment.us_equivalent})` : segment;
  };

  // Get unique values for filters
  const uniqueBodies = [...new Set(vehicles.map(v => v.body_and_class.body))];
  const uniquePowertrains = [...new Set(vehicles.map(v => v.powertrain.name))];

  // Filter vehicles based on search and filters
  const filteredVehicles = vehicles.filter(vehicle => {
    const matchesSearch = vehicle.model.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesBody = !filterBody || vehicle.body_and_class.body === filterBody;
    const matchesPowertrain = !filterPowertrain || vehicle.powertrain.name === filterPowertrain;
    
    return matchesSearch && matchesBody && matchesPowertrain;
  });

  const VehicleCard = ({ vehicle }) => (
    <div className="card vehicle-card">
      <div className="vehicle-header">
        <h3>{vehicle.model}</h3>
        <div className="vehicle-badges">
          <span className="badge badge-primary">{getBodyName(vehicle.body_and_class.body)}</span>
          <span className="badge badge-secondary">{getSegmentName(vehicle.body_and_class.segment)}</span>
        </div>
        <div className="vehicle-descriptions">
          <p className="description">{getBodyDescription(vehicle.body_and_class.body)}</p>
          <p className="description">{getSegmentDescription(vehicle.body_and_class.segment)}</p>
        </div>
      </div>
      
      <div className="vehicle-details">
        <div className="detail-section">
          <h4>Powertrain</h4>
          <p><strong>Type:</strong> {vehicle.powertrain.name}</p>
          <p className="description">{getPowertrainDescription(vehicle.powertrain.id)}</p>
          <p><strong>Layout:</strong> {getLayoutName(vehicle.powertrain.layout)}</p>
          <p className="description">{getLayoutDescription(vehicle.powertrain.layout)}</p>
          {vehicle.powertrain.engine && (
            <>
              <p><strong>Engine:</strong> {vehicle.powertrain.engine.cylinders}</p>
              <p><strong>Fuel:</strong> {vehicle.powertrain.engine.fuel}</p>
              {vehicle.powertrain.engine.aspiration && (
                <p><strong>Aspiration:</strong> {vehicle.powertrain.engine.aspiration}</p>
              )}
            </>
          )}
          {vehicle.powertrain.battery && (
            <p><strong>Battery:</strong> {vehicle.powertrain.battery}</p>
          )}
        </div>

        <div className="detail-section">
          <h4>Transmission</h4>
          <p><strong>Type:</strong> {vehicle.transmission.name}</p>
          <p className="description">{getTransmissionDescription(vehicle.transmission.id)}</p>
        </div>

        <div className="detail-section">
          <h4>Suspension & Frame</h4>
          <p><strong>Front:</strong> {getSuspensionName(vehicle.suspension_and_frame.front, 'front')}</p>
          <p className="description">{getSuspensionDescription(vehicle.suspension_and_frame.front, 'front')}</p>
          <p><strong>Rear:</strong> {getSuspensionName(vehicle.suspension_and_frame.rear, 'rear')}</p>
          <p className="description">{getSuspensionDescription(vehicle.suspension_and_frame.rear, 'rear')}</p>
          <p><strong>Frame:</strong> {getFrameName(vehicle.suspension_and_frame.frame)}</p>
          <p className="description">{getFrameDescription(vehicle.suspension_and_frame.frame)}</p>
          {vehicle.suspension_and_frame.options && (
            <p><strong>Options:</strong> {vehicle.suspension_and_frame.options}</p>
          )}
        </div>

        <div className="detail-section">
          <h4>Wheels & Tires</h4>
          <p><strong>Popular OEM:</strong> {
            Array.isArray(vehicle.wheels_and_sizes.popular_oem) 
              ? vehicle.wheels_and_sizes.popular_oem.join(', ')
              : vehicle.wheels_and_sizes.popular_oem
          }</p>
          {vehicle.wheels_and_sizes.alt_common && (
            <p><strong>Alternative:</strong> {
              Array.isArray(vehicle.wheels_and_sizes.alt_common)
                ? vehicle.wheels_and_sizes.alt_common.join(', ')
                : vehicle.wheels_and_sizes.alt_common
            }</p>
          )}
          <p><strong>Season:</strong> {vehicle.tire_types.season.join(', ')}</p>
          <p className="description">
            {vehicle.tire_types.season.map(season => getTireSeasonDescription(season)).filter(desc => desc).join('; ')}
          </p>
          <p><strong>Usage:</strong> {
            Array.isArray(vehicle.tire_types.usage)
              ? vehicle.tire_types.usage.join(', ')
              : vehicle.tire_types.usage
          }</p>
          <p className="description">
            {Array.isArray(vehicle.tire_types.usage)
              ? vehicle.tire_types.usage.map(usage => getTireUsageDescription(usage)).filter(desc => desc).join('; ')
              : getTireUsageDescription(vehicle.tire_types.usage)
            }
          </p>
        </div>
      </div>
    </div>
  );

  return (
    <div className="container">
      <div className="page-header">
        <h1>Vehicle Database</h1>
        <p>Explore detailed specifications of {vehicles.length} vehicles from our comprehensive database.</p>
      </div>

      <div className="filters-section">
        <div className="filters-grid">
          <div className="filter-group">
            <label htmlFor="search">Search Vehicles</label>
            <input
              type="text"
              id="search"
              placeholder="Enter model name..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="filter-input"
            />
          </div>

          <div className="filter-group">
            <label htmlFor="body-filter">Body Type</label>
            <select
              id="body-filter"
              value={filterBody}
              onChange={(e) => setFilterBody(e.target.value)}
              className="filter-select"
            >
              <option value="">All Body Types</option>
              {uniqueBodies.map(body => (
                <option key={body} value={body}>{body}</option>
              ))}
            </select>
          </div>

          <div className="filter-group">
            <label htmlFor="powertrain-filter">Powertrain</label>
            <select
              id="powertrain-filter"
              value={filterPowertrain}
              onChange={(e) => setFilterPowertrain(e.target.value)}
              className="filter-select"
            >
              <option value="">All Powertrains</option>
              {uniquePowertrains.map(powertrain => (
                <option key={powertrain} value={powertrain}>{powertrain}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="results-info">
          <p>Showing {filteredVehicles.length} of {vehicles.length} vehicles</p>
        </div>
      </div>

      <div className="vehicles-grid">
        {filteredVehicles.map((vehicle, index) => (
          <VehicleCard key={index} vehicle={vehicle} />
        ))}
      </div>

      {filteredVehicles.length === 0 && (
        <div className="no-results">
          <h3>No vehicles found</h3>
          <p>Try adjusting your search criteria or filters.</p>
        </div>
      )}
    </div>
  );
};

export default Vehicles;
