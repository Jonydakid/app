import React from 'react'
import { Box, Typography } from '@material-ui/core';
import mapa from './imgs/mapa.jpeg'
import Spacer from './Spacer';
export default function Zonaentrega() {
    

    return(
        <div id="reparto" >
            <Typography variant="h3" color={"secondary"} style={{textAlign:'center',paddingBottom:'1%',paddingTop:'1%'}}>Zona de reparto</Typography><br/>
            <div style={{display:'flex',justifyContent:'center'}}>
            <img src={mapa} style={{borderRadius:'5%', maxWidth:'100%'}}/>
            </div>
            
        </div>
    )

}
