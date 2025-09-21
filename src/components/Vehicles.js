import React, { useState } from 'react';
import { loadCars } from '../utils/dataLoader';

const Vehicles = () => {
  const vehicles = loadCars();
  const [searchTerm, setSearchTerm] = useState('');
  const [filterBody, setFilterBody] = useState('');
  const [filterPowertrain, setFilterPowertrain] = useState('');

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
          <span className="badge badge-primary">{vehicle.body_and_class.body}</span>
          <span className="badge badge-secondary">{vehicle.body_and_class.segment}</span>
        </div>
      </div>
      
      <div className="vehicle-details">
        <div className="detail-section">
          <h4>Powertrain</h4>
          <p><strong>Type:</strong> {vehicle.powertrain.name}</p>
          <p><strong>Layout:</strong> {vehicle.powertrain.layout}</p>
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
        </div>

        <div className="detail-section">
          <h4>Suspension & Frame</h4>
          <p><strong>Front:</strong> {vehicle.suspension_and_frame.front}</p>
          <p><strong>Rear:</strong> {vehicle.suspension_and_frame.rear}</p>
          <p><strong>Frame:</strong> {vehicle.suspension_and_frame.frame}</p>
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
          <p><strong>Usage:</strong> {
            Array.isArray(vehicle.tire_types.usage)
              ? vehicle.tire_types.usage.join(', ')
              : vehicle.tire_types.usage
          }</p>
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
