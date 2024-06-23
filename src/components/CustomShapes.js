import React, { useState } from 'react';

const CustomShapes = () => {
  const [isExpanded, setIsExpanded] = useState(true);
  const [shapes, setShapes] = useState(['Custom 1', 'Custom 2']);

  const addCustomShape = () => {
    setShapes([...shapes, `Custom ${shapes.length + 1}`]);
  };

  return (
    <section>
      <h3 onClick={() => setIsExpanded(!isExpanded)}>Custom Shapes</h3>
      {isExpanded && (
        <div>
          <button onClick={addCustomShape}>Add Custom Shape</button>
          <ul>
            {shapes.map((shape, index) => (
              <li key={index}>{shape}</li>
            ))}
          </ul>
        </div>
      )}
    </section>
  );
};

export default CustomShapes;