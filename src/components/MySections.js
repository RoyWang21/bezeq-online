import React, { useState } from 'react';

const MySections = () => {
  const [isExpanded, setIsExpanded] = useState(true);
  const [sections, setSections] = useState(['Section A', 'Section B']);

  return (
    <section>
      <h3 onClick={() => setIsExpanded(!isExpanded)}>My Sections</h3>
      {isExpanded && (
        <ul>
          {sections.map((section, index) => (
            <li key={index}>{section}</li>
          ))}
        </ul>
      )}
    </section>
  );
};

export default MySections;