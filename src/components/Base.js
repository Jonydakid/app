import React,{useState,useEffect} from 'react'

import Container from '@material-ui/core/Container';
import Carta from './Carta';
import Inicio from './Inicio';
import Navbar from './Navbar';
import About from './About';
import Zonaentrega from './Zonaentrega'

export default function Base(props) {
    

    return (
            <Container fixed="true"  >
                
                <Inicio/>
                <Zonaentrega/>
                <Carta/>
                <About/>
            </Container>
    )
}
