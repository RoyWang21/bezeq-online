import React, { useState } from 'react';
import { Box, CssBaseline } from '@mui/material';
import Header from './components/Header';
import LeftSidebar from './components/LeftSidebar';
import CentralSection from './components/CentralSection';
import RightSidebar from './components/RightSidebar';

function App() {
  const [dimensions, setDimensions] = useState({ width: 100, height: 50, cover: 5 });
  const [reinforcement, setReinforcement] = useState({ nb: 5, db: 2 });

  const handleDimensionsChange = (newDimensions) => {
    setDimensions(newDimensions);
  };

  const handleReinforcementChange = (newReinforcement) => {
    setReinforcement(newReinforcement);
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
      <CssBaseline />
      <Header />
      <Box sx={{ display: 'flex', flexGrow: 1, overflow: 'hidden' }}>
        <LeftSidebar />
        <Box component="main" sx={{ flexGrow: 1, p: 3, overflow: 'auto' }}>
          <CentralSection dimensions={dimensions} reinforcement={reinforcement} />
        </Box>
        <RightSidebar 
          onDimensionsChange={handleDimensionsChange}
          onReinforcementChange={handleReinforcementChange}
        />
      </Box>
    </Box>
  );
}

export default App;