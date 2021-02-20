import React from 'react';
import { AppBar, Toolbar, IconButton, Badge , MenuItem, Menu, Typography } from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons';

import logo from '../../assets/ChairsRUs_Logo.png';
import  useStyles from './styles';

const Navbar = ( { totalItems }) => {
  const classes = useStyles();
  return (
    <div>
      <AppBar position='fixed' className={classes.appBar} color='inherit'>
        <Toolbar>
          <Typography variant='h6' className={classes.title} color='inherit'>
            <img src={logo} alt='Commerce.js' height='50px' className={classes.image}/>
          </Typography>
          <div className={classes.grow}/>
          <div className={classes.button}>
            <IconButton aria-label='Show Cart Items' color='inherit'>
              <Badge badgeContent={totalItems} color='secondary'>
                <ShoppingCart/>
              </Badge>
            </IconButton>
          </div>  
        </Toolbar> 

      </AppBar>
    </div>
  )
}

export default Navbar