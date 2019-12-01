import React from 'react'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import Base from './components/Base';
import Carrusel from './components/Carrusel';
import Footer from './components/Footer';
import Navbar from './components/Navbar';



export default function App() {
  
  
  const theme = createMuiTheme(({
    palette: {
        primary: { main: "#282c34", light: "#50555e", dark: "#00000d", contrastText: "#ffffff" },
        secondary: { main: "#c0ca33", light: "#f5fd67", dark: "#8c9900", contrastText: "#000000" }
    }
  }))

  return (
    <div style={{backgroundColor:'#282c34'}}>
      <ThemeProvider theme={theme}>
      <Navbar />     
        
        <Base />
        <Footer/>
      </ThemeProvider>
      
    </div>
    
  );
}
