import React from 'react';
import { loadBodyTypes, loadMarketSegments } from '../utils/dataLoader';

const BodyTypes = () => {
  const bodyTypes = loadBodyTypes();
  const marketSegments = loadMarketSegments();

  const BodyTypeCard = ({ bodyType }) => (
    <div className="card body-type-card">
      <div className="body-type-header">
        <h3>{bodyType.name}</h3>
        {bodyType.aka && (
          <div className="aka-section">
            <strong>Also known as:</strong> {
              Array.isArray(bodyType.aka) 
                ? bodyType.aka.join(', ')
                : bodyType.aka
            }
          </div>
        )}
      </div>
      
      <p className="body-type-description">{bodyType.description}</p>
    </div>
  );

  const SegmentCard = ({ segment }) => (
    <div className="card segment-card">
      <div className="segment-header">
        <h3>{segment.segment}</h3>
        <div className="segment-region">{segment.region}</div>
      </div>
      
      <div className="segment-details">
        <p><strong>US Equivalent:</strong> {segment.us_equivalent}</p>
        <p className="segment-description">{segment.description}</p>
      </div>
    </div>
  );

  return (
    <div className="container">
      <div className="page-header">
        <h1>Body Types & Market Segments</h1>
        <p>Comprehensive guide to vehicle body styles and market segments used in EU and US markets, aligned with Euro segments and US EPA size classes.</p>
      </div>

      <div className="body-types-section">
        <h2>Body Styles</h2>
        <div className="body-types-grid">
          {bodyTypes.map((bodyType, index) => (
            <BodyTypeCard key={index} bodyType={bodyType} />
          ))}
        </div>
      </div>

      <div className="market-segments-section">
        <h2>Market Segments</h2>
        <div className="segments-grid">
          {marketSegments.map((segment, index) => (
            <SegmentCard key={index} segment={segment} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BodyTypes;
