import React, {useState} from 'react';
import {Card, CardActions, CardContent, CardMedia, Button, Typography, Divider} from '@material-ui/core'
import useStyles from './styles'

const SonCard = ({ son }) => {
    const classes = useStyles();
    // console.log(son)
    return (
        <Card className={classes.card}>
            <CardMedia className={classes.media} />
            <div className={classes.overlay}>
                {son && <Typography variant="h6">{son.name}</Typography>}
            </div>
            <div className={classes.details}>
                <Typography className={classes.title}  variant="h5" align="center">{"100$ "+son.name+" הרווחת מ "}</Typography>
            </div>
            <Button variant="contained" size="small" color="primary" onClick={()=>{}}>קח את הכסף</Button>
        </Card>
    );
};

export default SonCard;