import React, { useState } from 'react';

const ShapeTemplates = () => {
  const [isExpanded, setIsExpanded] = useState(true);
  const [selectedShape, setSelectedShape] = useState(null);

  const shapes = ['Rectangular', 'Hollow Rectangular', 'I-Beam', 'Show All'];

  return (
    <section>
      <h3 onClick={() => setIsExpanded(!isExpanded)}>Shape Templates</h3>
      {isExpanded && (
        <div>
          {shapes.map((shape) => (
            <button key={shape} onClick={() => setSelectedShape(shape)}>
              {shape}
            </button>
          ))}
        </div>
      )}
    </section>
  );
};

export default ShapeTemplates;