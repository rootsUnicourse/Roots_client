import React, {useState} from 'react'
import {Avatar, Button, Paper, Grid, Typography, Container, TextField, Box} from '@material-ui/core'
import useStyles from './styles'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import Input from './Input'
import {GoogleLogin} from 'react-google-login'
import Icon from './Icon'
import {useDispatch} from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { signin ,signup, googleLogin } from '../../actions/auth'
import roots from '../../images/roots.png'
import FileBase from 'react-file-base64'

const Auth = () => {
    const queryParams = new URLSearchParams(window.location.search);
    const email = queryParams.get('email');
    console.log(email)
    const classes = useStyles()
    const [showPassword, setShowPassword] = useState(false)
    const [isSignup, setIsSignup] = useState(false)
    const [formData, setFormData] = useState({ firstName: '', lastName: '', email: '', password: '', confirmPassword: '',parantId: email, imageUrl: process.env.BASE_IMAGE})
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        
        if(isSignup){
            console.log(formData)
            dispatch(signup(formData, navigate))
        }else {
            console.log(formData)
            dispatch(signin(formData, navigate))
        }
    }
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handleShowPassword = () => {
        setShowPassword((prevShowPassword) => !prevShowPassword)
    }

    const switchMode = () => {
        setIsSignup((prevIsSignup) => !prevIsSignup)
        setShowPassword(false)
    }

    const googleSuccess = async (res) => {
        // console.log(process.env.BASE_IMAGE)
        const result = res?.profileObj
        const token = res?.tokenId
        // console.log(result)
        const googleData = {result: result, token: token, parantId : formData.parantId}
        // console.log(googleData)
        try {
            dispatch(googleLogin(googleData, navigate))
        } catch (error) {
            console.log(error)
        }
    }

    const googleFailure = (err) => {
        console.log("Google Sign In was unsuccessful. Try Again Later")
        console.log(err)
    }

    return(
        <Container component="main" maxWidth="xs">
            <Paper className={classes.paper} elevation={3}>
                <Box
                    component="img"
                    sx={{
                        height: 150,
                        width: 150,
                        maxHeight: { xs: 233, md: 167 },
                        maxWidth: { xs: 350, md: 250 },
                    }}
                    alt="Roots"
                    src= {roots}
                    />
                <Typography variant="h5">{isSignup ? 'Sign up' : 'Sign In'}</Typography>
                <form className={classes.form} onSubmit={handleSubmit}>
                    <Grid container spacing={2}>
                        { isSignup && (
                                <>
                                    <Input name="firstName" label="First Name" handleChange={handleChange} autoFocus half/>
                                    <Input name="lastName" label="Last Name" handleChange={handleChange} half/>
                                </>
                            )}
                        <Input name="email" label="Email Address" handleChange={handleChange} type="email"/>
                        <Input name="password" label="Password" handleChange={handleChange} type={showPassword ? 'text' : "password"} handleShowPassword={handleShowPassword}/>
                        { isSignup && <Input name="confirmPassword" label="Repeat Password" handleChange={handleChange} type="password"/>}
                        {/* <div className={classes.fileInput}>
                            <Typography>Add Profile Picture</Typography>
                            <FileBase type="file" multiple={false} onDone={({ base64 }) => setFormData({ ...formData, imageUrl: base64 })}></FileBase>
                        </div> */}
                    </Grid>
                    <Button type="submit" fullWidth variant="contained" className={classes.submit}>
                        {isSignup ? 'Sign up' : 'Sign In'}
                    </Button>
                    <GoogleLogin
                        clientId="299163078742-7udqvrad5p2pc66g2im7q7bknb4pf6gh.apps.googleusercontent.com"
                        render={(renderProps)=>(
                            <Button className={classes.googleButton} fullWidth onClick={renderProps.onClick} disabled={renderProps.disabled} startIcon={<Icon/>} variant="contained">Google Sign In</Button>
                        )}
                        onSuccess={googleSuccess}
                        onFailure={googleFailure}
                        cookiePolicy="single_host_origin"
                    />
                    <Grid container justifyContent="flex-end">
                        <Button onClick={switchMode}>
                            {isSignup ? 'Alredy have an account? Sign In' : "Don't have an account? Sign Up!"}
                        </Button>
                    </Grid>
                </form>
            </Paper>
        </Container>
    )
}

export default Auth