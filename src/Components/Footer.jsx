import * as React from 'react';
import Box from '@mui/material/Box';
import tatvaSoftLogo from '../tatva.png';
// import CssBaseline from '@mui/material/CssBaseline';
const Footer = () => {
    return (
        <>
            {/* <CssBaseline /> */}
            <Box
                sx={{
                    width: "98vw",
                    height: "20vh",
                    border: '1px dashed grey',
                    // background:"blue",
                    borderColor: "black",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexDirection: "column"
                    
                }}
            >
                <img src={tatvaSoftLogo}
                    alt='TatvaSoft'
                    style={{ height: "41px" }}
                />
                <p> &copy; 2023 Tatvasoft.com. All Rights Reserved</p>
            </Box>
        </>
    )
}
export default Footer;