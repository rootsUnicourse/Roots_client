import React,{ useState } from 'react';
import { Grid,Button,Paper,Typography,Container,TextField } from '@material-ui/core'
import UserCard from '../UserCard/UserCard';
import { useSelector } from 'react-redux';
import SonCard from '../SonCard/SonCard'
import { Link } from 'react-router-dom'
import {
    ArgumentAxis,
    ValueAxis,
    Chart,
    LineSeries,
} from '@devexpress/dx-react-chart-material-ui';
import useStyles from './styles'
import Popup from './Popup'

const Profile = () => {
    const classes = useStyles()
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')))
    const [invitePopup,setInvitePopup] = useState(false)
    const [link, setLink] = useState(`http://localhost:3000/auth?email=${user.result.email}`)
    // console.log(user)
    const users = useSelector((state) => state.users)
    // console.log(users)
    const sons = users.filter(son => son.parantId == user.result.email);  
    console.log(sons)
    var firstgrandsons = []
    var secondgrandsons = []
    if (sons.length > 0) {
        firstgrandsons = users.filter(grandson => grandson.parantId == sons[0].email) 
    }
    if (sons.length > 1) {
        secondgrandsons = users.filter(grandson => grandson.parantId == sons[1].email)  
    }

    // const copyTextToClipboard = async () => {
    //     if ('clipboard' in navigator) {
    //         return await navigator.clipboard.writeText(link);
    //     } else {
    //         return document.execCommand('copy', true, link);
    //     }
    // }

    return (
        <Grid className={classes.container}  alignItems="center" justifyContent="center" container spacing={3}>

            <Grid  item lg={12} sm={12}>
                <Button className={classes.inviteButton} variant="contained" onClick={() => setInvitePopup(true)}>Invite</Button>
            </Grid>

            <Grid item lg={4} sm={4} xs={12}></Grid> {/* space fill */}
            <Grid item lg={4} sm={4} xs={12}>
                <UserCard user={user}/>
            </Grid>
            <Grid item lg={4} sm={4} xs={12}></Grid> {/* space fill */}

            <Grid item lg={2} sm={2} xs={12}></Grid> {/* space fill */}
            <Grid item lg={4} sm={4} xs={12}>
                {sons[0] != null ?(<SonCard son={sons[0]}/>): null} 
            </Grid>    
            <Grid item lg={4} sm={4} xs={12}>
                {sons[1] != null ?(<SonCard son={sons[1]}/>): null} 
            </Grid>       
            <Grid item lg={2} sm={2} xs={12}></Grid> {/* space fill */}

            <Grid item lg={3} sm={3} xs={12}>
                {firstgrandsons[0] != null ?(<SonCard son={firstgrandsons[0]}/>): null} 
            </Grid> 
            <Grid item lg={3} sm={3} xs={12}>
                {firstgrandsons[1] != null ?(<SonCard son={firstgrandsons[1]}/>): null} 
            </Grid> 
            <Grid item lg={3} sm={3} xs={12}>
                {secondgrandsons[0] != null ?(<SonCard son={secondgrandsons[0]}/>): null} 
            </Grid> 
            <Grid item lg={3} sm={3} xs={12}>
                {secondgrandsons[1] != null ?(<SonCard son={secondgrandsons[1]}/>): null} 
            </Grid> 
        <Popup trigger={invitePopup} close={setInvitePopup}>
            <TextField label="Outlined" variant="outlined" value={link} />
            <Button label="Outlined" variant="outlined" onClick={() => {navigator.clipboard.writeText(link)}}>Copy</Button>
        </Popup>
        </Grid>
    );
};

export default Profile;