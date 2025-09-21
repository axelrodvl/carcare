import React from 'react';
import { loadTransmissions } from '../utils/dataLoader';

const Transmissions = () => {
  const transmissions = loadTransmissions();

  const TransmissionCard = ({ transmission }) => (
    <div className="card transmission-card">
      <div className="transmission-header">
        <h3>{transmission.name}</h3>
        <span className="transmission-id">{transmission.id}</span>
      </div>
      
      <p className="transmission-description">{transmission.description}</p>

      <div className="examples-section">
        <h4>Examples</h4>
        <div className="examples-grid">
          {transmission.examples.map((example, index) => (
            <span key={index} className="example-badge">
              {example}
            </span>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <div className="container">
      <div className="page-header">
        <h1>Transmission Types</h1>
        <p>Explore different transmission systems used in modern vehicles, from traditional manual transmissions to advanced dual-clutch and CVT systems.</p>
      </div>

      <div className="transmissions-grid">
        {transmissions.map((transmission, index) => (
          <TransmissionCard key={index} transmission={transmission} />
        ))}
      </div>
    </div>
  );
};

export default Transmissions;
