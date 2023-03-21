import * as React from 'react';
import tatvaSoftLogo from '../tatva.png';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Badge from '@mui/material/Badge';
// import { fontFamily, fontSize, padding } from '@mui/system';
import IconButton from '@mui/material/IconButton';
// import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
export default function ButtonAppBar() {
   
    const style = {
        Appbar: {
            height: "92px",
            backgroundColor: "white",
            padding: "0px 55px",
            justifyContent: "center"
        },
        button: {
            color: "#f14d54",
            fontSize: "14px",
            fontFamily: "Roboto",
            textTransform:'none',
            Underline:"none"
        },
        verticalLine: {
            backgroundColor: "gray",
            content: '""',
            height: "24px",
            width: "1px",
            margin: "0 2px"
        },
        shoppingBtn: {
            borderColor: "black",
            color: "black",
            padding: "0px 10px",
            fontSize: "14px",
            textTransform:'none',
            margin: "0 10px",
            justifyContent: "center"
        }
    }
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static"
                style={style.Appbar}>
                <Toolbar>

                    <img src={tatvaSoftLogo}
                        alt='TatvaSoft'
                        style={{ height: "41px" }}
                    />
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    </Typography>
                    <Button >
                        <Link to="/login" style={style.button}>Login</Link>
                    </Button>
                    <span style={style.verticalLine}></span>
                    <Button >
                        <Link to="/register" style={style.button}>Register</Link>
                    </Button>
                    <Button
                        variant='outlined'
                        style={style.shoppingBtn}
                    >
                        <IconButton aria-label="cart">
                            <Badge badgeContent={4} color="error">
                                <ShoppingCartIcon style={{color:"#f14d54"}}/>
                            </Badge>
                        </IconButton>
                        <span style={{ marginLeft: "1px" }}>
                            Cart
                        </span>

                    </Button>
                </Toolbar>
            </AppBar>
        </Box>
    );
}