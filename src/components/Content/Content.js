import React, { useEffect, useState } from 'react';
import {CardMedia,Typography,Grid,Container,Card,AppBar,TextField,Button,Box} from '@material-ui/core';
import useStyles from './styles';
import tuna from './tona.mp4';
import noga from './noga.mp4';
import SearchIcon from '@mui/icons-material/Search';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import CompCards from '../CompCards/CompCards';
import { useDispatch } from 'react-redux';
import { getCompanyBySearch, getCompanys } from '../../actions/companys'
import { useNavigate } from 'react-router-dom'


const Content = () => {
    const classes = useStyles()
    const [search,setSearch] = useState('');
    const dispatch = useDispatch()
    const navigate = useNavigate();

    useEffect(()=>{
        dispatch(getCompanys())
    },[search==''])


    const searchCompany = () => {
        console.log(search)
        if(search.trim())
        {
            dispatch(getCompanyBySearch({ search }))
        }
    }

    const handleKeyPress = (e) => {
        if(e.keyCode == 13 || e.which == 13) {
            searchCompany()
        }
    }

    return (
        <Container>
            <CardMedia className={classes.space} component="video" controls />
            <Grid container spacing={2} className={classes.gridSpace}>
                <Grid item lg={6} sm={6} xs={6}><Card className={classes.longCard}>הסבר</Card></Grid>
                <Grid item lg={6} sm={6} xs={6}><Card className={classes.longCard}>עוד משהו</Card></Grid>
            </Grid>
            <Grid container spacing={2} className={classes.gridSpace}>
                <Grid item lg={3} sm={3} xs={3}><Card className={classes.shortCard}>הסבר</Card></Grid>
                <Grid item lg={3} sm={3} xs={3}><Card className={classes.shortCard}>עוד משהו</Card></Grid>
                <Grid item lg={3} sm={3} xs={3}><Card className={classes.shortCard}>הסבר</Card></Grid>
                <Grid item lg={3} sm={3} xs={3}><Card className={classes.shortCard}>עוד משהו</Card></Grid>
            </Grid>
                <Box sx={{ mt: 10 }}>
                    <AppBar className={classes.appBarSearch} position="static" >
                        <TextField name="search" variant="outlined" label="Search Company" fullWidth onChange={(e)=>setSearch(e.target.value)} onKeyPress={handleKeyPress}/>
                    </AppBar>
                </Box>
            <CompCards/>
        </Container>
    )
}

export default Content
