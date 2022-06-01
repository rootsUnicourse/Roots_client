import { makeStyles } from '@material-ui/core/styles';
import { deepPurple } from '@material-ui/core/colors';

export default makeStyles((theme) => ({
    appBar: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: "#AD8B73",
    },
    secondAppBar: {
        padding: '10px 50px',
        backgroundColor: "#CEAB93",

    },
    logo: {
        fontFamily: "Work Sans, sans-serif",
        fontWeight: 600,
        color: "#383838",
        textAlign: "left",
        textDecoration: 'none',
    },
    image: {
    },
    toolbar: {
        display: 'flex',
        justifyContent: 'flex-end',
    },
    profile: {
        display: 'flex',
        justifyContent: 'space-between',
        width: '430px',
    },
    userName: {
        display: 'flex',
        alignItems: 'center',
    },
    brandContainer: {
        display: 'flex',
        alignItems: 'center',
    },
    purple: {
        color: theme.palette.getContrastText(deepPurple[500]),
        backgroundColor: deepPurple[500],
    },
    signin: {
        backgroundColor: "#E3CAA5",
        color: "white",
        fontFamily: "Work Sans, sans-serif",
        fontWeight: 600,
    },
    createCompany: {
        backgroundColor: "red",
        color: "white",
        fontFamily: "Work Sans, sans-serif",
    } }));