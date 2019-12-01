import React, { Component } from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import axios from 'axios';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
var style = makeStyles(({
    root: {
        flexGrow: 1,

    },
    card: {
        padding: '8px'
    },
    media: {
        maxHeight: '100%',
        maxWidth: '100%'
    },
}))



class Carta extends Component {

    constructor(props) {
        super(props);
        this.state = {
            carta: [],

        }
    }
    componentDidMount() {
        axios.get('https://api.myjson.com/bins/1bx8qu')
            .then(res => this.setState({ carta: res.data }))

            
    }
    
    render() {
        const { classes } = this.props;
        return (

            <Grid id="carta" container xs={12} sm={12} style={{textAlign: '-webkit-center'}}>
                <Grid item xs={12} sm={12}>
                    <Typography variant="h3" color={"secondary"} style={{width:'100%', justifyContent: 'center', paddingBottom: '1%', paddingTop: '1%' }}>Carta</Typography>
                </Grid>
                {this.state.carta.map(tile => (


                    <Grid   id={'id-'+tile.title} item xs={12} sm={12}   >

                        <Card className={classes.card} style={{ width: '90%', backgroundColor: '#282c34' }}>
                            <Typography variant="h4" color={"secondary"} style={{  paddingBottom: '2%', paddingTop: '3%', fontSize: '25px' }}>{tile.title}</Typography>
                            <CardActionArea style={{backgroundColor: '#282c34'}} >
                                <CardMedia
                                    component='img'
                                    style={{ paddingBottom: '10px',borderRadius:'5%' }}
                                    image={tile.image}
                                    title={tile.title}
                                />
                            </CardActionArea>
                        </Card>

                    </Grid>
                ))}
            </Grid>
        )
    }
}

Carta.propTypes = {
    classes: PropTypes.object.isRequired,
}
export default withStyles(style)(Carta)


