import React, { useState } from 'react';

const DatabaseShapes = () => {
  const [isExpanded, setIsExpanded] = useState(true);
  const shapes = ['I-Beam', 'C-Channel', 'Angle', 'Tube'];

  return (
    <section>
      <h3 onClick={() => setIsExpanded(!isExpanded)}>Database Shapes</h3>
      {isExpanded && (
        <ul>
          {shapes.map((shape) => (
            <li key={shape}>{shape}</li>
          ))}
        </ul>
      )}
    </section>
  );
};

export default DatabaseShapes;