import React, { useState } from "react";
import Breadcrumbs from "../Components/Breadcrumbs";
import Typography from '@mui/material/Typography';
import { Container } from "@mui/system";
import Divider from '@mui/material/Divider';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import '@fontsource/roboto/300.css';
import { Button } from "@mui/material";
import axios from "axios";
import { useFormik } from "formik";
import * as Yup from "yup";

import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';



const initialValues = {
    email: "",
    password: ""
}
//creating validation schema for login page
const LoginSchema = Yup.object({
    email: Yup.string().email().required("Please Enter Your Email"),
    password: Yup.string().min(6).required("Please Enter Password")
})

const Login = () => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    const handleLogin = async () => {
        try {
            const res = await axios.get(`https://jsonplaceholder.typicode.com/users/${email}`);
            console.log(res.data);
            if (res.data.length === 0) {
                toast.error("Sorry..! User Not Exists.")
            }
            else {

                toast.success("Login SuccessFully...");
            }
        }
        catch (err) {
            console.log(err);
            toast.error("Something went wrong!")
        }

    }
    //destructring and geting value from formik 
    const { values, errors, touched, handleBlur, handleChange, handleSubmit } = useFormik({
        initialValues: initialValues,
        validationSchema: LoginSchema,
        onSubmit: (values, action) => {
            console.log(values);
            action.resetForm();
            handleLogin();
        }
    })

    const navigate = useNavigate();

    return (
        <>
            <Breadcrumbs title={"Login"} />

            <Container fixed>
                <ToastContainer theme="dark" />
                <form onSubmit={handleSubmit}>
                    <Typography
                        style={{
                            fontSize: "32px",
                            textAlign: "center",
                            color: "#414141",
                            fontWeight: "bold",
                            marginBottom: "25px"
                        }}
                    >
                        Login or Create an Account
                    </Typography>
                    <Divider
                        style={{
                            backgroundColor: "#f14d54",
                            margin: "0 auto",
                            height: "2px",
                            width: "150px"
                        }}
                    />

                    {/* {first last email div} */}
                    <div style={{ fontSize: "15px" }}>

                        <Box
                            style={{ width: "100%" }}
                        >
                            {/* main grid  */}
                            <Grid
                                container
                                rowSpacing={1}
                                columnSpacing={{ xs: 1, sm: 2, md: 3 }}

                            >
                                {/* new customer grid */}

                                <Grid item xs={6}>
                                    <Typography
                                        style={{
                                            marginTop: "50px",
                                            marginBottom: "20px",
                                            color: "#414141",
                                            fontWeight: "bold",
                                            fontSize: "20px"
                                        }}
                                    >
                                        New Customer
                                    </Typography>
                                    <Divider />
                                    <Typography
                                        style={{
                                            marginTop: "20px",
                                            color: "#838383",
                                            fontSize: "15px",
                                            marginBottom: "20px",
                                            fontWeight: "lighter"
                                        }}
                                    >
                                        Registration is free and easy
                                    </Typography>
                                    {/* list of features */}
                                    <Typography
                                        style={{
                                            fontSize: "15px",
                                            marginBottom: "15px",
                                            color: "#212121"
                                        }}
                                    >
                                        <li>Faster checkout</li>
                                    </Typography>
                                    <Typography
                                        style={{
                                            fontSize: "15px",
                                            marginBottom: "15px",
                                            color: "#212121"
                                        }}
                                    >
                                        <li>Save multiple shipping addresses</li>
                                    </Typography>
                                    <Typography
                                        style={{
                                            fontSize: "15px",
                                            marginBottom: "176px",
                                            color: "#212121"
                                        }}
                                    >
                                        <li>View and track orders and more</li>
                                    </Typography>

                                    <Button
                                        onClick={() => {
                                            navigate("/register")
                                        }}
                                        style={{
                                            width: "220px",
                                            height: "45px",
                                            backgroundColor: "#f14d54",
                                            textTransform: 'none',
                                            marginBottom: "80px",
                                            color: "white"
                                        }}>
                                        Create an Account
                                    </Button>
                                </Grid>






                                {/* registered customber grid */}
                                <Grid item xs={6}>
                                    <Typography

                                        style={{
                                            marginTop: "50px",
                                            marginBottom: "20px",
                                            color: "#414141",
                                            fontWeight: "bold",
                                            fontSize: "20px"
                                        }}
                                    >
                                        Registered Customers
                                    </Typography>
                                    <Divider />
                                    <Typography
                                        style={{
                                            marginTop: "20px",
                                            color: "#838383",
                                            fontSize: "15px",
                                            marginBottom: "20px",
                                            fontWeight: "lighter"
                                        }}
                                    >
                                        If you have an account with us,please log in.
                                    </Typography>
                                    <Box style={{ display: "flex" }}>
                                        <Typography
                                            style={{
                                                color: "#414141",
                                                marginBottom: "15px"
                                            }}
                                        >
                                            Email Address *
                                        </Typography>
                                        {touched.email && <span style={{ color: "red" }}> {errors.email}</span>}
                                    </Box>
                                    <input
                                        type="email" name="email" id="email" label="email"
                                        value={values.email}
                                        onChange={handleChange} onBlur={handleBlur}
                                        style={{
                                            width: "100%",
                                            height: "40px",
                                            marginBottom: "40px"
                                        }}
                                    />
                                    <Box style={{ display: "flex" }} >
                                        <Typography
                                            style={{
                                                color: "#414141",
                                                marginBottom: "15px"
                                            }}
                                        >
                                            Password *
                                        </Typography>
                                        {touched.password && <span style={{ color: "red" }}> {errors.password}</span>}
                                    </Box>
                                    <input
                                        type="password" name="password" id="password" label="password"
                                        value={values.password}
                                        onChange={handleChange} onBlur={handleBlur}
                                        style={{
                                            width: "100%",
                                            height: "40px",
                                            marginBottom: "60px"
                                        }}
                                    />

                                    <Button
                                        type="submit"
                                        // onClick={handleLogin}
                                        style={{
                                            // marginTop:"60px",
                                            width: "100px",
                                            height: "45px",
                                            backgroundColor: "#f14d54",
                                            textTransform: 'none',
                                            marginBottom: "80px",
                                            color: "white"
                                        }}>
                                        Login
                                    </Button>
                                </Grid>
                            </Grid>
                        </Box>
                    </div>

                </form>
            </Container>

        </>
    );
}
export default Login;