import React, { Component, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Grid, CircularProgress } from '@material-ui/core'
import CompCard from '../compCard/CompCard'
import useStyles from './styles'

const CompCards = () => {
    const classes = useStyles()
    const companys = useSelector((state) => state.companys)
    // console.log(companys)
    
        return (
            !companys.length ? <CircularProgress/> : (
                <Grid className={classes.mainContainer} container alignItems="stretch" spacing={3}>
                    {companys.map((company) => (
                        <Grid key={company._id} item xs={12} sm={4}>
                            <CompCard company={company}/>
                        </Grid>
                    ))}
                </Grid>
            )
        );
}

export default CompCards;