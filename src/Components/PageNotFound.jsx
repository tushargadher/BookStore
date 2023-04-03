
import { Button } from '@mui/material';
import { Container } from '@mui/system';
import React from 'react';
import { useNavigate } from "react-router-dom";


const PageNotFound = () => {
    const navigate = useNavigate();
    return (

        <>
            <Container>

                <img src="https://webdesigndev.com/wp-content/uploads/2015/04/Free-404-Error-Page-PSD-Template.jpg" alt="" />
                <Button variant="contained" color="primary" onClick={()=>{
                    navigate("/");
                }}>
                    Back to Home
                </Button>
            </Container>

        </>
    )
}

export default PageNotFound;