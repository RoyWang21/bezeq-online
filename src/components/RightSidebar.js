import React, { useState } from 'react';
import { 
  Paper, 
  Tabs, 
  Tab, 
  Box, 
  TextField, 
  Button, 
  Typography,
  Grid
} from '@mui/material';

const RightSidebar = ({ onDimensionsChange, onReinforcementChange }) => {
  const [activeTab, setActiveTab] = useState(0);
  const [dimensions, setDimensions] = useState({
    width: 100,
    height: 50,
    cover: 5
  });
  const [material, setMaterial] = useState({
    youngsModulus: 200,
    poissonsRatio: 0.3,
    density: 7800
  });
  const [reinforcement, setReinforcement] = useState({
    nb: 5,
    db: 2
  });

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  const handleDimensionChange = (e) => {
    const newDimensions = { ...dimensions, [e.target.name]: Number(e.target.value) };
    setDimensions(newDimensions);
    onDimensionsChange(newDimensions);
  };

  const handleMaterialChange = (e) => {
    setMaterial({ ...material, [e.target.name]: Number(e.target.value) });
  };

  const handleReinforcementChange = (e) => {
    const newReinforcement = { ...reinforcement, [e.target.name]: Number(e.target.value) };
    setReinforcement(newReinforcement);
    onReinforcementChange(newReinforcement);
  };

  return (
    <Paper elevation={3} sx={{ width: 400, height: '100%' }}>
      <Tabs 
        value={activeTab} 
        onChange={handleTabChange} 
        variant="fullWidth"
        sx={{
          '& .MuiTab-root': {
            fontSize: '0.8rem',
            textTransform: 'capitalize',
            minWidth: 'auto',
          }
        }}
      >
        <Tab label="Material" />
        <Tab label="Dimensions" />
        <Tab label="Reinforcement" />
        <Tab label="Steel Section" />
      </Tabs>
      <Box sx={{ p: 2 }}>
        {activeTab === 0 && (
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Button variant="contained" sx={{ mr: 1, fontSize: '0.75rem' }}>Add from Database</Button>
              <Button variant="contained" sx={{ fontSize: '0.75rem' }}>Add Custom Material</Button>
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Young's Modulus"
                type="number"
                name="youngsModulus"
                value={material.youngsModulus}
                onChange={handleMaterialChange}
                margin="normal"
                size="small"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Poisson's Ratio"
                type="number"
                name="poissonsRatio"
                value={material.poissonsRatio}
                onChange={handleMaterialChange}
                margin="normal"
                size="small"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Density"
                type="number"
                name="density"
                value={material.density}
                onChange={handleMaterialChange}
                margin="normal"
                size="small"
              />
            </Grid>
          </Grid>
        )}
        {activeTab === 1 && (
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Width"
                type="number"
                name="width"
                value={dimensions.width}
                onChange={handleDimensionChange}
                margin="normal"
                size="small"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Height"
                type="number"
                name="height"
                value={dimensions.height}
                onChange={handleDimensionChange}
                margin="normal"
                size="small"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Cover"
                type="number"
                name="cover"
                value={dimensions.cover}
                onChange={handleDimensionChange}
                margin="normal"
                size="small"
              />
            </Grid>
          </Grid>
        )}
        {activeTab === 2 && (
            <Grid container spacing={2}>
            <Grid item xs={12}>
            <TextField
                fullWidth
                label="Number of Bars"
                type="number"
                name="nb"
                value={reinforcement.nb}
                onChange={handleReinforcementChange}
                margin="normal"
                size="small"
            />
            </Grid>
            <Grid item xs={12}>
            <TextField
                fullWidth
                label="Bar Diameter"
                type="number"
                name="db"
                value={reinforcement.db}
                onChange={handleReinforcementChange}
                margin="normal"
                size="small"
            />
            </Grid>
        </Grid>
        )}
        {activeTab === 3 && (
          <Typography>Steel Section content goes here</Typography>
        )}
      </Box>
    </Paper>
  );
};

export default RightSidebar;