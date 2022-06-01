import {
    makeStyles
} from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: theme.spacing(2),
        backgroundColor: "#AD8B73",
        marginTop: '150px',
    },
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
        },
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(3),
        

    },
    submit: {
        margin: theme.spacing(3, 0, 2),
        backgroundColor: "#CEAB93"
    },
    googleButton: {
        marginBottom: theme.spacing(2),
        backgroundColor: "#CEAB93"
        
    },
    fileInput: {
        width: '97%',
        margin: '10px 0',
        justifyContent: 'center',
        alignItems: 'center'
    },
}));