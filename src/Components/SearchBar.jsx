import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
// import IconButton from '@mui/material/IconButton';
// import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';


const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(3),
        width: 'auto',
    },
}));

// const SearchIconWrapper = styled('div')(({ theme }) => ({
//     padding: theme.spacing(0, 2),
//     height: '100%',
//     position: 'absolute',
//     pointerEvents: 'none',
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
// }));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '20ch',
        },
    },
}));


export default function PrimarySearchAppBar() {

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static"
                style={{
                    height: "80px",
                    backgroundColor: "#f1f1f1",
                    alignItems: "center",
                    justifyContent: "center",
                }}
            >
                <Toolbar>
                    <Search>
                        <StyledInputBase
                            placeholder="What are you looking for..."
                            inputProps={{ 'aria-label': 'search' }}
                            style={{
                                width: "422px",
                                height: "40px",
                                backgroundColor: "white",
                                color: "#212121",
                                fontStyle: "italic",
                               
                            }}
                        />
                        <Button
                            variant='outlined'
                            style={{
                                maxWidth: "129px",
                                height: "40px",
                                backgroundColor: "#80BF32",
                                color: "white",
                                border:"none",
                                fontSize:"16px",
                                textTransform:'none',
                                margin:"0 10px"
                            }}
                        >
                            <SearchIcon />
                            Search
                        </Button>
                        <Button
                            variant='outlined'
                            style={{
                                maxWidth: "129px",
                                height: "40px",
                                backgroundColor: "#f14d54",
                                color: "white",
                                border:"none",
                                textTransform:'none',
                                fontSize:"16px"
                            }}
                        >
                            Cancel
                        </Button>
                    </Search>

                </Toolbar>
            </AppBar>

        </Box>
    );
}