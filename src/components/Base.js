import React from 'react'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container';
import Carta from './Carta';
import Inicio from './Inicio';
import Navbar from './Navbar';
const theme = createMuiTheme(theme => ({
    palette: {
        primary: { main: "#282c34", light: "#50555e", dark: "#00000d", contrastText: "#ffffff" },
        secondary: { main: "#c0ca33", light: "#f5fd67", dark: "#8c9900", contrastText: "#000000" }
    }
}))

export default function Base(props) {
    
    return (
        <ThemeProvider theme={theme}>
            <Container fixed="true"  >
                <Navbar />
                <Carta /> 
            </Container>
        </ThemeProvider>
        
         
    )
}
