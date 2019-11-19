import React, { Component } from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import axios from 'axios';
import PropTypes from 'prop-types';

const useStyles = makeStyles(theme => ({
    root: {
        marginLeft: '0',
        marginRight: '0',
        borderRadius: 3,
        border: 'auto',
        color: 'white',
        marginTop: '7%',
        [theme.breakpoints.down('sm')]: {
            marginTop: '30%'
        }},
        gridList: {
            width: '100%',
            height: '100%',
        },
        tile: {
            
            width: '100%'
        }
    }));


class Menu extends Component {

    state = {
        carta: []
    }
    componentDidMount() {
        axios.get('https://api.myjson.com/bins/1bsa1i')
            .then(res => this.setState({ carta: res.data }))
    }
    render() {
        const { classes } = this.props;
        return (
                <Grid container  xs={12} sm={12} classes={classes.root}>
                    {this.state.carta.map(tile => (

                        <Grid item xs={12} sm={6} spacing={1} >
                            <img style={{height:'100%',width:'100%'}} key={tile.id} src={tile.image} alt={tile.title} />
                        </Grid>
                    ))}
                </Grid>
        )
    }
}

Menu.propTypes = {
    classes: PropTypes.object.isRequired,
};
export default withStyles(useStyles)(Menu)
