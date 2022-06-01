import { Box, Button } from '@material-ui/core'
import React from 'react'
import './Popup.css'

function Popup(props) {
    return (props.trigger) ? (
        <div className="popup">
            <div className="popup-inner">
                <Button className="close-btn" onClick={() => props.close(false)}>close</Button>
                <Box className="popup-box">
                    { props.children }
                </Box>
            </div>
        </div>
    ): ""
}

export default Popup