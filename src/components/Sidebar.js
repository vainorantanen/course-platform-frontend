import React from 'react';
import { List, ListItem, ListItemButton, ListItemText } from '@mui/material';

const Sidebar = () => {
  return (
    <div>
      <List>
        <ListItemButton component="a" href="#section1">
          <ListItemText primary="Section 1" />
        </ListItemButton>
        <ListItemButton component="a" href="#section2">
          <ListItemText primary="Section 2" />
        </ListItemButton>
        <ListItemButton component="a" href="#section3">
          <ListItemText primary="Section 3" />
        </ListItemButton>
      </List>
    </div>
  );
};

export default Sidebar;