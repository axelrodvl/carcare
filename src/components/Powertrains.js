import React from 'react';
import { loadPowertrains } from '../utils/dataLoader';

const Powertrains = () => {
  const powertrains = loadPowertrains();

  const PowertrainCard = ({ powertrain }) => (
    <div className="card powertrain-card">
      <div className="powertrain-header">
        <h3>{powertrain.name}</h3>
        <span className="powertrain-id">{powertrain.id}</span>
      </div>
      
      <p className="powertrain-description">{powertrain.description}</p>

      {powertrain.petrol && (
        <div className="detail-section">
          <h4>Internal Combustion Engine</h4>
          <div className="specs-grid">
            <div className="spec-item">
              <strong>Typical Layouts:</strong>
              <ul>
                {powertrain.petrol.typical_layouts && powertrain.petrol.typical_layouts.map((layout, index) => (
                  <li key={index}>
                    <strong>{layout.name}:</strong> {layout.description}
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="spec-item">
              <strong>Power Range:</strong>
              <p>{powertrain.petrol.power_range_kw_from} - {powertrain.petrol.power_range_kw_to} kW</p>
            </div>

            <div className="spec-item">
              <strong>Engine Configurations:</strong>
              <ul>
                {powertrain.petrol.typical_cylinders_layout && powertrain.petrol.typical_cylinders_layout.map((config, index) => (
                  <li key={index}>
                    <strong>{config.name}:</strong> {config.examples}
                  </li>
                ))}
              </ul>
            </div>

            <div className="spec-item">
              <strong>Energy:</strong>
              <p>Fuel: {powertrain.petrol.energy.fuel}</p>
              {powertrain.petrol.energy.octane && (
                <p>Octane: {powertrain.petrol.energy.octane}</p>
              )}
              {powertrain.petrol.energy.bio_blends && (
                <p>Bio Blends: {powertrain.petrol.energy.bio_blends}</p>
              )}
            </div>
          </div>
        </div>
      )}

      {powertrain.electrical && (
        <div className="detail-section">
          <h4>Electrical System</h4>
          <div className="specs-grid">
            {powertrain.electrical.typical_layouts && (
              <div className="spec-item">
                <strong>Typical Layouts:</strong>
                <ul>
                  {powertrain.electrical.typical_layouts.map((layout, index) => (
                    <li key={index}>
                      <strong>{layout.name}:</strong> {layout.description}
                    </li>
                  ))}
                </ul>
              </div>
            )}
            
            <div className="spec-item">
              <strong>Power Range:</strong>
              <p>{powertrain.electrical.power_range_kw_from} - {powertrain.electrical.power_range_kw_to} kW</p>
              {powertrain.electrical.power_range_kw_note && (
                <p><em>{powertrain.electrical.power_range_kw_note}</em></p>
              )}
            </div>

            <div className="spec-item">
              <strong>Energy Storage:</strong>
              <p>Battery: {powertrain.electrical.energy.battery}</p>
              {powertrain.electrical.energy.charging && (
                <p>Charging: {powertrain.electrical.energy.charging}</p>
              )}
              {powertrain.electrical.energy.fuel && (
                <p>Fuel: {powertrain.electrical.energy.fuel}</p>
              )}
            </div>
          </div>
        </div>
      )}

      {powertrain.notes && (
        <div className="notes-section">
          <h4>Notes</h4>
          <p>{powertrain.notes}</p>
        </div>
      )}
    </div>
  );

  return (
    <div className="container">
      <div className="page-header">
        <h1>Powertrain Types</h1>
        <p>Comprehensive guide to different engine and motor types used in modern vehicles, from traditional internal combustion engines to advanced electric and hybrid systems.</p>
      </div>

      <div className="powertrains-grid">
        {powertrains.map((powertrain, index) => (
          <PowertrainCard key={index} powertrain={powertrain} />
        ))}
      </div>
    </div>
  );
};

export default Powertrains;
