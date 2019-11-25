import React from 'react'
import Grid from '@material-ui/core/Grid'
import { Typography } from '@material-ui/core'
import test1 from './imgs/test.jpg'
export default function About() {
    return (
        <Grid id="about" container xs={12} sm={12}>
            <Grid item xs={12} sm={12}>
                <Typography variant="h3" color={"secondary"} style={{textAlign:'center',paddingBottom:'1%',paddingTop:'1%'}} >Acerca de nosotros</Typography>
            </Grid>
            <Grid item xs={12} sm={6} style={{maxWidth:'100%'}}>
                <Typography variant="h5"  style={{width:'100%', color:'white'}} >

                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer hendrerit dictum interdum. Proin ipsum lacus, lobortis iaculis blandit et, interdum vel mi. Aliquam pharetra rhoncus quam, sit amet vulputate eros luctus id. Ut a vulputate lacus, a congue tellus. Sed enim sem, interdum a euismod vitae, ultricies at elit. Aenean in pulvinar nulla, ac laoreet ante. Nunc sagittis sodales odio, quis ultricies augue dapibus nec.
                    
                    Donec vel maximus lorem, id sodales turpis. Donec ullamcorper, velit ut lobortis luctus, quam augue elementum neque, dapibus tristique justo eros vel lacus. Curabitur faucibus mauris non purus efficitur, sed fringilla nulla eleifend. Fusce ut ipsum eu eros condimentum pharetra.
            </Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
            <img src={test1} style={{maxWidth:'100%'}} />
            </Grid>
            <Grid item xs={12} sm={12}>

            </Grid>
        </Grid>
    )
}
