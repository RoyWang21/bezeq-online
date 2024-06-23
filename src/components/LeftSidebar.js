import React, { useState } from 'react';
import { 
  Drawer, 
  List, 
  ListItem, 
  ListItemText, 
  Select, 
  MenuItem, 
  FormControl, 
  InputLabel,
  Box,
  Divider,
  ListItemIcon,
  Collapse
} from '@mui/material';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import ShapeIcon from '@mui/icons-material/Category';
import DatabaseIcon from '@mui/icons-material/Storage';
import CustomIcon from '@mui/icons-material/Create';
import SectionIcon from '@mui/icons-material/Layers';

const LeftSidebar = () => {
  const [unitSystem, setUnitSystem] = useState('Metric');
  const [openSections, setOpenSections] = useState({
    shapeTemplates: true,
    databaseShapes: false,
    customShapes: false,
    mySections: false
  });

  const handleUnitSystemChange = (event) => {
    setUnitSystem(event.target.value);
  };

  const handleSectionClick = (section) => {
    setOpenSections(prev => ({ ...prev, [section]: !prev[section] }));
  };

  const renderSection = (title, icon, section, children) => (
    <>
      <ListItem button onClick={() => handleSectionClick(section)}>
        <ListItemIcon sx={{ color: 'white' }}>
          {icon}
        </ListItemIcon>
        <ListItemText primary={title} />
        {openSections[section] ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={openSections[section]} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {children}
        </List>
      </Collapse>
    </>
  );

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: 240,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: 240,
          boxSizing: 'border-box',
          backgroundColor: '#333',
          color: 'white',
          marginTop: '64px', // This should match the height of your AppBar
          height: 'calc(100% - 64px)', // This ensures the drawer doesn't overlap the AppBar
        },
      }}
    >
      <Box sx={{ p: 2 }}>
        <FormControl fullWidth variant="outlined" size="small">
          <InputLabel id="unit-system-label" sx={{ color: 'white' }}>Unit System</InputLabel>
          <Select
            labelId="unit-system-label"
            value={unitSystem}
            onChange={handleUnitSystemChange}
            label="Unit System"
            sx={{ 
              color: 'white', 
              '& .MuiOutlinedInput-notchedOutline': { borderColor: 'rgba(255, 255, 255, 0.5)' },
              '&:hover .MuiOutlinedInput-notchedOutline': { borderColor: 'white' },
            }}
          >
            <MenuItem value="Metric">Metric</MenuItem>
            <MenuItem value="Imperial">Imperial</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <Divider sx={{ backgroundColor: 'rgba(255, 255, 255, 0.12)' }} />
      <List>
        {renderSection('Shape Templates', <ShapeIcon />, 'shapeTemplates',
          <ListItem button sx={{ pl: 4 }}>
            <ListItemText primary="Shape Templates Content" />
          </ListItem>
        )}
        {renderSection('Database Shapes', <DatabaseIcon />, 'databaseShapes',
          <ListItem button sx={{ pl: 4 }}>
            <ListItemText primary="Database Shapes Content" />
          </ListItem>
        )}
        {renderSection('Custom Shapes', <CustomIcon />, 'customShapes',
          <ListItem button sx={{ pl: 4 }}>
            <ListItemText primary="Custom Shapes Content" />
          </ListItem>
        )}
        {renderSection('My Sections', <SectionIcon />, 'mySections',
          <ListItem button sx={{ pl: 4 }}>
            <ListItemText primary="My Sections Content" />
          </ListItem>
        )}
      </List>
    </Drawer>
  );
};

export default LeftSidebar;