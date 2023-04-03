// import { Formik } from "formik";
import React from "react";
import Breadcrumbs from "../Components/Breadcrumbs";
import Typography from '@mui/material/Typography';
import { Container } from "@mui/system";
import Divider from '@mui/material/Divider';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
// import { styled } from '@mui/material/styles';
// import Paper from '@mui/material/Paper';
import '@fontsource/roboto/300.css';
import { Button } from "@mui/material";
// import { type } from "@testing-library/user-event/dist/type";
// import { fontSize, textAlign } from "@mui/system";
import { useFormik } from "formik";
import * as Yup from "yup";
// const Item = styled(Paper)(({ theme }) => ({
//     // backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
//     backgroundColor: "blue",
//     ...theme.typography.body2,
//     // padding: theme.spacing(1),
//     textAlign: 'left',
//     color: theme.palette.text.secondary,
// }));



const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    cpassword: ""
}

//creating validation schema for register page
const singUpSchema = Yup.object({
    firstName: Yup.string().min(2).max(25).required("Please Enter First Name"),
    lastName: Yup.string().min(2).max(25).required("Please Enter Last Name"),
    email: Yup.string().email().required("Please Enter Your Email"),
    password: Yup.string().min(6).required("Please Enter Password"),
    //oneof is used to compare with whos fied value ,here we campare with password
    cpassword: Yup.string().required()
        .oneOf([Yup.ref("password"), null], "Password Mismatch")
});

const Register = () => {

    //work of formik is handle the data which is enterd by user 
    //here we are destructring values ,errors , handleChage and etc from formik so we dont need worry about that , this is the beaty of formik

    //and yup is used for form validation

    const { values, errors, touched, handleBlur, handleChange, handleSubmit } = useFormik({
        initialValues: initialValues,
        validationSchema: singUpSchema,
        onSubmit: (values, action) => {
            console.log(values);
            action.resetForm();
        }
    });
    console.log(errors);
    return (
        <>
            <Breadcrumbs title={"Create an Account"} />

            <Container fixed>
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
                    <Typography

                        style={{
                            marginTop: "50px",
                            marginBottom: "20px",
                            color: "#414141",
                            fontWeight: "bold",
                            fontSize: "20px"
                        }}
                    >
                        Personal Infomation
                    </Typography>
                    <Divider />
                    {/* {first last email div} */}
                    <div style={{ fontSize: "15px" }}>
                        <Typography

                            style={{
                                marginTop: "20px",
                                color: "#838383",
                                fontWeight: "lighter"
                            }}
                        >
                            Please enter the following information to create your account
                        </Typography>
                        <Box
                            style={{ width: "100%" }}
                        >
                            {/* first and last name grid  */}
                            <Grid
                                container
                                rowSpacing={1}
                                columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                                style={{ marginBottom: "20px" }}
                            >
                                {/* first name grid */}
                                <Grid item xs={6}>
                                    <Box style={{ display: "flex" }}>
                                        <Typography
                                            style={{
                                                color: "#414141",
                                                marginTop: "20px",
                                                marginBottom: "15px"
                                            }}
                                        >
                                            First Name *
                                        </Typography>
                                        {touched.firstName && <span style={{ color: "red",marginTop: "20px" }}> {errors.firstName}</span>}
                                    </Box>
                                    <input
                                        type="text" name="firstName" id="firstName" label="FirstName"
                                        value={values.firstName}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        style={{
                                            width: "100%",
                                            height: "40px"
                                        }}
                                    />

                                </Grid>
                                {/* last name grid */}
                                <Grid item xs={6}>
                                    <Box style={{ display: "flex" }}>
                                        <Typography
                                            style={{
                                                color: "#414141",
                                                marginTop: "20px",
                                                marginBottom: "15px"
                                            }}
                                        >
                                            Last Name *
                                        </Typography>
                                        {touched.lastName && <span style={{ color: "red",marginTop: "20px" }}> {errors.lastName}</span>}
                                    </Box>
                                    <input
                                        type="text" name="lastName" id="lastName" label="LastName"
                                        value={values.lastName}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        style={{
                                            width: "100%",
                                            height: "40px"
                                        }}
                                    />

                                </Grid>
                            </Grid>

                            <Grid>
                                <Box style={{ display: "flex" }}>
                                    <Typography
                                        style={{
                                            color: "#414141",
                                            marginTop: "40px",
                                            marginBottom: "15px"
                                        }}
                                    >
                                        Email Address *
                                    </Typography>
                                    {touched.email && <span style={{ color: "red",marginTop: "40px" }}> {errors.email}</span>}
                                </Box>
                                <input
                                    type="email" name="email" id="email" label="Email"
                                    value={values.email}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    style={{
                                        width: "100%",
                                        height: "40px"
                                    }}
                                />

                            </Grid>
                        </Box>


                    </div>
                    <Typography
                        variant="h6"
                        style={{
                            marginTop: "70px",
                            marginBottom: "20px",
                            color: "#414141",
                            fontWeight: "bold",
                            fontSize: "20px"
                        }}
                    >
                        Login Information
                    </Typography>
                    <Divider />
                    {/* login information div */}
                    <div style={{ fontSize: "15px" }}>

                        <Box
                            style={{ width: "100%" }}
                        >
                            {/* pass and confrom pass grid  */}
                            <Grid
                                container
                                rowSpacing={1}
                                columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                                style={{ marginBottom: "60px" }}
                            >
                                {/* first name grid */}
                                <Grid item xs={6}>
                                    <Box style={{ display: "flex" }}>
                                        <Typography
                                            style={{
                                                color: "#414141",
                                                marginTop: "20px",
                                                marginBottom: "15px"
                                            }}
                                        >
                                            Password *
                                        </Typography>
                                        {touched.password && <span style={{ color: "red",marginTop: "20px" }}> {errors.password}</span>}
                                    </Box>
                                    <input
                                        type="password" name="password" id="password" label="password"
                                        value={values.password}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        style={{
                                            width: "100%",
                                            height: "40px"
                                        }}
                                    />

                                </Grid>
                                {/* last name grid */}
                                <Grid item xs={6}>
                                    <Box style={{ display: "flex" }}>
                                        <Typography
                                            style={{
                                                color: "#414141",
                                                marginTop: "20px",
                                                marginBottom: "15px"
                                            }}
                                        >
                                            Conform Password *
                                        </Typography>
                                        {touched.cpassword && <span style={{ color: "red",marginTop: "20px" }}> {errors.cpassword}</span>}
                                    </Box>
                                    <input
                                        type="password" name="cpassword" id="cpassword" label="cpassword"
                                        value={values.cpassword}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        style={{
                                            width: "100%",
                                            height: "40px"
                                        }}
                                    />

                                </Grid>
                            </Grid>
                            {/* register button */}

                            <Button
                                type="submit"
                                style={{
                                    // marginTop:"60px",
                                    width: "136px",
                                    height: "45px",
                                    backgroundColor: "#f14d54",
                                    textTransform: 'none',
                                    marginBottom: "80px",
                                    color: "white"
                                }}
                            >
                                Register
                            </Button>
                        </Box>


                    </div>
                </form>
            </Container>

        </>
    );
}
export default Register;