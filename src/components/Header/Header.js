import React, {useState, useEffect} from 'react'
import {AppBar, Button, Toolbar, Typography, Avatar,Grid,Container} from '@material-ui/core'
import { Link } from 'react-router-dom'
import useStyles from './styles'
import roots from '../../images/roots.png'
import { useDispatch } from 'react-redux'
import { useNavigate, useLocation } from 'react-router-dom'

const Header = () => {

    const classes = useStyles()
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const location = useLocation()
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')))
    // console.log('user:', user)

    const logout = () => {
        dispatch({ type: 'LOGOUT' })
        navigate('/')
        setUser(null)
    }


    useEffect(()=>{
        const token = user?.token
        //jwt (json web token)
        setUser(JSON.parse(localStorage.getItem('profile')))
    },[location])

    return(
        <AppBar className={classes.appBar}>
            <Grid container >
                <Grid item >
                    <div className={classes.brandContainer}>
                        <Typography component={Link} to="/" className={classes.logo} variant="h5" align="center">Roots</Typography>
                        <img className={classes.image} src={roots} alt="icon" height="60"/>
                    </div>
                </Grid>
                <Grid item lg sm xs>
                    <Toolbar className={classes.toolbar}>
                        {user ? (
                            <div className={classes.profile}>
                                {user.result.email == "rootsunicourse@gmail.com" && 
                                    <Button className={classes.createCompany} component={Link} to="/form" variant="contained">Add company</Button>
                                }
                                <Avatar className={classes.purple} alt={user.result.name} src={user.result.imageUrl}>{user.result.name.charAt(0)}</Avatar>
                                <Typography className={classes.userName} variant="h5">{user.result.name}</Typography>
                                <Button variant="contained" className={classes.signin} component={Link} to="/profile">Profile</Button>
                                <Button variant="contained" className={classes.signin} onClick={logout}>Logout</Button>
                            </div>
                            ):(
                            <Button className={classes.signin} component={Link} to="/auth" variant="contained">Sign IN</Button>
                            )}
                    </Toolbar>
                </Grid>
            </Grid> {/*container*/}
        </AppBar>
    )
}

export default Header