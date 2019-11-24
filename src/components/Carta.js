import React, { Component } from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import axios from 'axios';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';

var style = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    card: {
        padding: '8px'
    },
    media: {
        maxHeight:'100%',
        maxWidth:'100%'
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
        axios.get('https://api.myjson.com/bins/fg4ea')
            .then(res => this.setState({ carta: res.data }))
    }
    render() {
        const { classes } = this.props;
        return (
            
            <Grid id="carta"  container xs={12} sm={12} classes={classes.root}>
                {this.state.carta.map(tile => (

                    <Grid item xs={12} sm={6} >
                        <Card className={classes.card} style={{margin :'8px'}}>
                            <CardActionArea>
                                <CardMedia
                                    component='img'
                                    className={classes.media}
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


