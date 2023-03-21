import * as React from 'react';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
// import NavigateNextIcon from '@mui/icons-material/NavigateNext';

function handleClick(event) {
    event.preventDefault();
    console.info('You clicked a breadcrumb.');
}

export default function CustomSeparator(props) {
    const breadcrumbs = [
        <Link underline="hover" key="1" color="inherit" href="/" onClick={handleClick}>
            Home
        </Link>,

        <Typography key="3"
            style={{
                color: "#414141"
            }}
        >
            {props.title}
        </Typography>,
    ];

    return (
        <Stack spacing={2}>
            <Breadcrumbs separator="›" aria-label="breadcrumb"
                style={{
                    margin: "50px auto"
                }}
            >
                {breadcrumbs}
            </Breadcrumbs>

        </Stack >
    );
}