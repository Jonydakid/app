import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Slide from '@material-ui/core/Slide';
import { useTheme } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import logo from './logo.png';
import Spacer from "./Spacer";
import Typography from '@material-ui/core/Typography';
import wsp from './imgs/whatsapp.png';
import fb from './imgs/fb.png';
import { HashLink as Link } from 'react-router-hash-link';
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

export default function Navbar(props) {
  const theme = useTheme();
  return (
    <React.Fragment>
      <HideOnScroll {...props}>
        <AppBar style={{ backgroundColor: '#00000d', color: '#ffffff' }} >
          <Toolbar >
            <img src={logo} style={{ maxWidth: '7%' }} alt="logo" />
            <Spacer w={'5%'} />
            <Link smooth to="#index" style={{textDecoration:'none'}}><Button href="#about" style={{minWidth:'10%'}} color={"secondary"}><Typography variant="h6" style={{fontSize:'1rem'}} >Inicio</Typography></Button></Link>
            <Spacer w={'5%'} />
            <Link smooth to="#carta" style={{textDecoration:'none'}}><Button href="#about" style={{minWidth:'10%'}} color={"secondary"}><Typography variant="h6" style={{fontSize:'1rem'}} >Carta</Typography></Button></Link>
            
            <Spacer w={'5%'} />
            
            <Link smooth to="#about" style={{textDecoration:'none'}}><Button href="#about" style={{minWidth:'max-content'}} color={"secondary"}><Typography variant="h6" style={{fontSize:'1rem'}} >Acerca de nosotros</Typography></Button></Link>

            <Spacer w={'25%'} />
            <img src={wsp} style={{ width: '5%' }} alt="wsp" />

            <Typography variant="h6" color="secondary" >+56948943383</Typography>

            <Spacer w={'5%'} />
            
            <Button color={"secondary"} href="https://www.facebook.com/lamakina.deltiempo.54">
            <img src={fb} style={{ width: '13%' }} alt="fb" />
            <Typography variant="h6"  >¡Vísitanos en nuestra página!</Typography>
            </Button>
              
          </Toolbar>
        </AppBar>
      </HideOnScroll>

    </React.Fragment>
  );
}