import React from 'react';
import List from '@mui/material/List';
import Box from '@mui/material/Box';
import assets from '../../assets';
import  '../../style.scss'
import { Typography } from '@mui/material';

const Footer = () => {
  return (
    <Box className="header" sx={{backgroundColor:'#A0A09F'}} >
        <Box className='footer-left'>
            <img src={assets.footerLeftLogo} alt="Leftlogo"  className='left-logo'/>
            <Typography className='copyright'>Copyright © 2021 purezerobeauty.com. All Rights Reserved.</Typography>
        </Box>
      <List className='images'>
        {assets.footer?.map((item,index) => (
          <img src={item.url} alt={item.alt} key={index}/>
        ))}
      </List>
    </Box>
  );
};
export default Footer;

