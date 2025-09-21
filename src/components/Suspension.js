import React from 'react';
import { loadSuspensionFront, loadSuspensionRear, loadFrameTypes } from '../utils/dataLoader';

const Suspension = () => {
  const frontSuspensions = loadSuspensionFront();
  const rearSuspensions = loadSuspensionRear();
  const frameTypes = loadFrameTypes();

  const SuspensionCard = ({ suspension, type }) => (
    <div className="card suspension-card">
      <div className="suspension-header">
        <h3>{suspension.name}</h3>
        <span className="suspension-type">{type}</span>
      </div>
      
      <p className="suspension-description">{suspension.description}</p>

      <div className="examples-section">
        <h4>Examples</h4>
        <div className="examples-grid">
          {suspension.examples.map((example, index) => (
            <span key={index} className="example-badge">
              {example}
            </span>
          ))}
        </div>
      </div>
    </div>
  );

  const FrameCard = ({ frame }) => (
    <div className="card frame-card">
      <div className="frame-header">
        <h3>{frame.name}</h3>
        <span className="frame-construction">{frame.construction}</span>
      </div>
      
      <p className="frame-description">{frame.description}</p>

      <div className="examples-section">
        <h4>Examples</h4>
        <div className="examples-grid">
          {frame.examples.map((example, index) => (
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
        <h1>Suspension & Frame Systems</h1>
        <p>Detailed information about suspension types and frame construction methods used in modern vehicles.</p>
      </div>

      <div className="suspension-section">
        <h2>Front Suspension</h2>
        <div className="suspension-grid">
          {frontSuspensions.map((suspension, index) => (
            <SuspensionCard key={index} suspension={suspension} type="Front" />
          ))}
        </div>
      </div>

      <div className="suspension-section">
        <h2>Rear Suspension</h2>
        <div className="suspension-grid">
          {rearSuspensions.map((suspension, index) => (
            <SuspensionCard key={index} suspension={suspension} type="Rear" />
          ))}
        </div>
      </div>

      <div className="frame-section">
        <h2>Frame Construction</h2>
        <div className="frame-grid">
          {frameTypes.map((frame, index) => (
            <FrameCard key={index} frame={frame} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Suspension;
