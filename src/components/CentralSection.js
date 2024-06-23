import React, { useEffect, useRef, useState } from 'react';
import * as d3 from 'd3';
import { Box } from '@mui/material';

const CentralSection = ({ dimensions, reinforcement }) => {
  const svgRef = useRef();
  const [color, setColor] = useState({ r: 128, g: 128, b: 128 }); // Default grey

  useEffect(() => {
    const svg = d3.select(svgRef.current);
    svg.selectAll("*").remove();  // Clear previous shape

    const width = svg.node().getBoundingClientRect().width;
    const height = svg.node().getBoundingClientRect().height;
    const margin = 50;

    svg.attr("width", width)
       .attr("height", height);

    // Calculate scale to fit shape within SVG
    const scale = Math.min(
      (width - 2 * margin) / dimensions.width,
      (height - 2 * margin) / dimensions.height
    );

    const scaledWidth = dimensions.width * scale;
    const scaledHeight = dimensions.height * scale;

    // Create a group for the shape and annotations
    const g = svg.append("g")
      .attr("transform", `translate(${(width - scaledWidth) / 2}, ${(height - scaledHeight) / 2})`);

    // Draw the rectangle
    g.append("rect")
      .attr("width", scaledWidth)
      .attr("height", scaledHeight)
      .attr("fill", `rgb(${color.r}, ${color.g}, ${color.b})`)
      .attr("stroke", "black");

    // Add width annotation
    g.append("line")
      .attr("x1", 0)
      .attr("y1", scaledHeight + 20)
      .attr("x2", scaledWidth)
      .attr("y2", scaledHeight + 20)
      .attr("stroke", "blue");

    g.append("text")
      .attr("x", scaledWidth / 2)
      .attr("y", scaledHeight + 40)
      .attr("text-anchor", "middle")
      .text(`Width: ${dimensions.width}`);

    // Add height annotation
    g.append("line")
      .attr("x1", scaledWidth + 20)
      .attr("y1", 0)
      .attr("x2", scaledWidth + 20)
      .attr("y2", scaledHeight)
      .attr("stroke", "blue");

    g.append("text")
      .attr("x", scaledWidth + 40)
      .attr("y", scaledHeight / 2)
      .attr("text-anchor", "middle")
      .attr("transform", `rotate(90 ${scaledWidth + 40} ${scaledHeight / 2})`)
      .text(`Height: ${dimensions.height}`);

    // Draw rebars
    if (reinforcement && reinforcement.nb && reinforcement.db) {
      const scaledCover = dimensions.cover * scale;
      const scaledBarDiameter = reinforcement.db * scale;
      const barSpacing = (scaledWidth - 2 * scaledCover) / (reinforcement.nb - 1);

      for (let i = 0; i < reinforcement.nb; i++) {
        let cx = scaledCover + i * barSpacing;
        if (reinforcement.nb === 1) {
          cx = scaledWidth / 2; // Place the bar in the middle when there's only one
        }
        g.append("circle")
        .attr("cx", cx)
        .attr("cy", scaledHeight - scaledCover)
        .attr("r", scaledBarDiameter / 2)
        .attr("fill", "black");
      }
    }

  }, [dimensions, color, reinforcement]);

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
      <Box sx={{ flexGrow: 1, overflow: 'hidden' }}>
        <svg ref={svgRef} style={{ width: '100%', height: '100%' }}></svg>
      </Box>
    </Box>
  );
};

export default CentralSection;