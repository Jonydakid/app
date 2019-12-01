import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Slide from '@material-ui/core/Slide';
import { useTheme } from '@material-ui/core/styles';
import { Button, useMediaQuery } from '@material-ui/core';
import logo from './logo.png';
import Spacer from "./Spacer";
import Typography from '@material-ui/core/Typography';
import wsp from './imgs/whatsapp.png';
import fb from './imgs/fb.png';
import inst from './imgs/instagram.png';
import { HashLink as Link } from 'react-router-hash-link';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

function HideOnScroll(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({ target: window ? window() : undefined });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

HideOnScroll.propTypes = {
  children: PropTypes.element.isRequired,
};



function MenuCarta(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);


  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button aria-controls="simple-menu" color={"secondary"} aria-haspopup="true" onClick={handleClick}>
        <Typography variant="h6" style={{ fontSize: '1rem' }} >Carta</Typography>
      </Button>
      <Menu
        
        id="simple-menu"
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        color={"primary"}
        MenuListProps={{disablePadding:true}}
        >
        <Link smooth to="#carta" style={{ textDecoration: 'none' }}><MenuItem  onClick={handleClose} style={{ backgroundColor: '#50555e' }} ><Typography color={"secondary"} variant="h6" style={{ fontSize: '1rem' }} >Sanguches</Typography></MenuItem></Link>
        <Link smooth to="#id-Ceviches, Crudos y Tártaros" style={{ textDecoration: 'none' }}><MenuItem onClick={handleClose} style={{ backgroundColor: '#50555e' }} color={"secondary"} ><Typography color={"secondary"} variant="h6" style={{ fontSize: '1rem' }} >Ceviches, Crudos y Tártaros</Typography></MenuItem></Link>
        <Link smooth to="#id-Chorrillanas para 2" style={{ textDecoration: 'none' }}><MenuItem onClick={handleClose} style={{ backgroundColor: '#50555e' }} color={"secondary"} ><Typography color={"secondary"} variant="h6" style={{ fontSize: '1rem' }} >Chorrillanas para 2</Typography></MenuItem></Link>
        <Link smooth to="#id-Cena de fin de año" style={{ textDecoration: 'none' }}><MenuItem onClick={handleClose} style={{  backgroundColor: '#50555e' }} color={"secondary"} ><Typography color={"secondary"} variant="h6" style={{ fontSize: '1rem' }} >Cena de fin de año</Typography></MenuItem></Link>

      </Menu>
    </div>
  );
}

export default function Navbar(props) {

  const theme = useTheme();
  const matches = useMediaQuery('(max-width:700px)');
  if (!matches) {
    return (
      <React.Fragment>
        <HideOnScroll {...props}>
          <AppBar position="sticky" style={{ backgroundColor: '#00000d', color: '#ffffff' }}>
            <Toolbar >
              <img src={logo} style={{ maxWidth: '7%' }} alt="logo" />
              <Spacer w={'5%'} />
              {/*<Link smooth to="#index" style={{ textDecoration: 'none' }}><Button style={{ minWidth: '10%' }} color={"secondary"}><Typography variant="h6" style={{ fontSize: '1rem' }} >Inicio</Typography></Button></Link>
              <Spacer w={'5%'} />*/}
              <Link smooth to="#reparto" style={{ textDecoration: 'none' }}><Button style={{ minWidth: '10%' }} color={"secondary"}><Typography variant="h6" style={{ fontSize: '1rem' }} >Reparto</Typography></Button></Link>

              <Spacer w={'5%'} />
              <MenuCarta />

              <Spacer w={'5%'} />


              {/*
              <Link smooth to="#about" style={{ textDecoration: 'none' }}><Button href="#about" style={{ minWidth: 'max-content' }} color={"secondary"}><Typography variant="h6" style={{ fontSize: '1rem' }} >Acerca de nosotros</Typography></Button></Link>

              */}

              <Spacer w={'15%'} />
              <img src={wsp} style={{ width: '5%' }} alt="wsp" />

              <Typography variant="h6" color="secondary" >+56948943383</Typography>

              <Spacer w={'5%'} />

              <div style={{ display: 'block' }}>
                <Button color={"secondary"} href="https://www.facebook.com/Delivery-La-Makina-del-Tiempo-114250776656668/">
                  <img src={fb} style={{ width: '15%' }} alt="fb" />
                  <Typography variant="h6"  >¡Visítanos!</Typography>
                </Button>
                <div style={{ display: 'flex', textAlign: 'center' }}>
                  <Spacer w={'25%'} />
                  <img src={inst} style={{ width: '7%' }} alt="inst" />
                  <Typography variant="h6" color={"secondary"}>@deliverylamakinadeltiempo</Typography>

                </div>

              </div>



            </Toolbar>
          </AppBar>
        </HideOnScroll>

      </React.Fragment>
    );
  } else {
    return (
      <React.Fragment>
        <HideOnScroll {...props}>
          <AppBar position="sticky" style={{ backgroundColor: '#00000d', color: '#ffffff' }}>
            <Toolbar >
              <img src={logo} style={{ maxWidth: '7%' }} alt="logo" />
              <Spacer w={'5%'} />
              <Link smooth to="#index" style={{ textDecoration: 'none' }}><Button style={{ minWidth: '10%' }} color={"secondary"}><Typography variant="h6" style={{ fontSize: '1rem' }} >Inicio</Typography></Button></Link>
              <Spacer w={'5%'} />
              <Link smooth to="#reparto" style={{ textDecoration: 'none' }}><Button style={{ minWidth: '10%' }} color={"secondary"}><Typography variant="h6" style={{ fontSize: '1rem' }} >Reparto</Typography></Button></Link>

              <MenuCarta />

              <Spacer w={'5%'} />
              <Link smooth to="#about" style={{ textDecoration: 'none' }}><Button href="#about" style={{ minWidth: 'max-content' }} color={"secondary"}><Typography variant="h6" style={{ fontSize: '1rem' }} >About us</Typography></Button></Link>

            </Toolbar>
          </AppBar>
        </HideOnScroll>

      </React.Fragment>
    );
  }

}