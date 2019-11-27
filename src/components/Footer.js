import React from 'react'
import Typography from '@material-ui/core/Typography'
import { Button, useMediaQuery } from '@material-ui/core';
import wsp from './imgs/whatsapp.png';
import fb from './imgs/fb.png';
import inst from './imgs/instagram.png';
import Spacer from './Spacer';
export default function Footer() {
    const matches = useMediaQuery('(max-width:700px)');
    if (!matches) {
        return (
            <div style={{ backgroundColor: 'black', height: '50px', textAlign: 'center', paddingTop: '1%' }}>
                <Typography variant="h6" color={"secondary"}>© 2019 La makina del tiempo</Typography>
            </div>
        );
    } else {
        return (
            <div style={{ display: 'block', backgroundColor: 'black', height: '100%', paddingTop: '1%' }}>
                <div style={{ display: 'flex' }}>
                    <div style={{ display: 'flex', width: '50%' }}>
                        <img src={wsp} style={{ width: '25%' }} alt="wsp" />

                        <Typography style={{paddingTop:'6%'}} variant="h6" color="secondary" >+56948943383</Typography>
                    </div>
                    <div style={{ display: 'flex', width: '50%' }}>
                        <Button color={"secondary"} href="https://www.facebook.com/Delivery-La-Makina-del-Tiempo-114250776656668/">
                            <img src={fb} style={{ width: '30%' }} alt="fb" />
                            <Typography variant="h6"  >¡Visítanos!</Typography>
                        </Button>
                    </div>

                </div>
                <div style={{ display: 'flex'}}>
                    <div style={{ display: 'flex',textAlign:'center'}}>
                        <Spacer w={'10%'}/>
                        <img src={inst} style={{ width: '10%' }} alt="inst" />
                        <Typography  variant="h6" color={"secondary"}>@deliverylamakinadeltiempo</Typography>
                        </div>
                </div>
                <div style={{ textAlign: 'center' }}>
                    <Typography variant="h6" color={"secondary"}>© 2019 La makina del tiempo</Typography>
                </div>
            </div>
        );
    }
}
