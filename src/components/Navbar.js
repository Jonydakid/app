import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Slide from '@material-ui/core/Slide';
import { withTheme } from '@material-ui/core/styles';
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
  
  return (
    <React.Fragment>
      <HideOnScroll {...props}>
        <AppBar style={{backgroundColor:'#00000d',color:'#ffffff'}} >
          <Toolbar >
            <Typography variant="h6">La makina del tiempo</Typography>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      
    </React.Fragment>
  );
}