import React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Box from '@mui/material/Box';
import { headerTabMenuList } from '../../Constants/headerTabMenuList';
import assets from '../../assets';
import  '../../style.scss'

const Index = () => {
  return (
    <Box className="header" >
        <img src={assets.logo} alt="logo"  />
      <List sx={{ display: 'flex' }}>
        {headerTabMenuList?.map((item) => (
          <ListItem key={item.id} disablePadding>
            <ListItemButton to={item.link}>
              <ListItemText primary={item.title} sx={{ textWrap: 'nowrap' }} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};
export default Index;

