import React from "react";
import Typography from '@mui/material/Typography';
import { Container } from "@mui/system";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';
// import { styled } from '@mui/material/styles';
// import Paper from '@mui/material/Paper';
import '@fontsource/roboto/300.css';
import { Button } from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";
// import { fontSize, textAlign } from "@mui/system";

// const Item = styled(Paper)(({ theme }) => ({
//     // backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
//     backgroundColor: "blue",
//     ...theme.typography.body2,
//     // padding: theme.spacing(1),
//     textAlign: 'left',
//     color: theme.palette.text.secondary,
// }));


const initialValues = {
    email: "",
    password: ""
}
//creating validation schema for login page
const LoginSchema = Yup.object({
    email: Yup.string().email().required("Please Enter Your Email"),
    password: Yup.string().min(6).required("Please Enter Password")
})
const EditProduct = () => {
    //destructring and geting value from formik 
    const { values, errors, touched, handleBlur, handleChange, handleSubmit } = useFormik({
        initialValues: initialValues,
        validationSchema: LoginSchema,
        onSubmit: (values, action) => {
            console.log(values);
            action.resetForm();
        }
    })
    console.log(errors);
    return (
        <>


            <Container fixed>
                <form onSubmit={handleSubmit}>
                    <Typography
                        style={{
                            fontSize: "32px",
                            textAlign: "center",
                            color: "#414141",
                            fontWeight: "bold",
                            marginTop: "50px",
                            marginBottom: "25px"
                        }}
                    >
                        Edit Product
                    </Typography>
                    <Divider
                        style={{
                            backgroundColor: "#f14d54",
                            margin: "0 auto",
                            height: "2px",
                            width: "150px"
                        }}
                    />
                    <div style={{ fontSize: "15px" }}>

                        <Box
                            style={{ width: "100%" }}
                        >

                            <Grid
                                container
                                rowSpacing={1}
                                columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                                style={{ marginTop: "50px" }}
                            >


                                <Grid item xs={6} style={{

                                    marginBottom: "80px"
                                }}>

                                    <Typography
                                        style={{
                                            color: "#414141",
                                            marginBottom: "15px"
                                        }}
                                    >
                                        First Name *
                                    </Typography>
                                    {touched.email && <span style={{ color: "red" }}> {errors.email}</span>}
                                    <input
                                        type="text" name="firstName" id="firstName" label="firstName"
                                        value={values.email}
                                        onChange={handleChange} onBlur={handleBlur}
                                        style={{
                                            width: "100%",
                                            height: "40px",
                                            marginBottom: "35px"
                                        }}
                                    />


                                    <Typography
                                        style={{
                                            color: "#414141",
                                            marginBottom: "15px"
                                        }}
                                    >
                                        Shop by Categories
                                    </Typography>
                                    {touched.password && <span style={{ color: "red" }}> {errors.password}</span>}
                                    <select
                                        style={{
                                            width: "100%",
                                            height: "45px",
                                            marginBottom: "60px"
                                        }}
                                    >
                                        <option value="Test"></option>
                                        <option value="Test1">Test1</option>
                                        <option value="Test2">Test2</option>
                                        <option value="Test3">Test3</option>
                                        <option value="Test4">Test4</option>

                                    </select>

                                    <Box style={{ display: "flex", marginBottom: "35px" }}>
                                        <label htmlFor="raised-button">
                                            <Button variant="raised" component="span"
                                                style={{
                                                    width: "120px",
                                                    height: "40px",
                                                    borderRadius: "0px",
                                                    backgroundColor: "#f14d54",
                                                    textTransform: 'none',
                                                    color: "white",
                                                    alignItems: "center"
                                                }}>
                                                Upload
                                            </Button>
                                        </label>
                                        <input
                                            accept="image/*"
                                            style={{ display: 'none' }}
                                            id="raised-button"
                                            multiple
                                            type="file"
                                        />

                                        <input type="text"
                                            style={{
                                                width: "100%"
                                            }}
                                            value="No file chosen"
                                            readOnly
                                        />
                                    </Box>
                                    <Button
                                        style={{
                                            width: "100px",
                                            height: "40px",
                                            backgroundColor: "#80BF32",
                                            textTransform: 'none',
                                            color: "white",
                                            marginRight: "10px",
                                            alignItems: "center"
                                        }}
                                    >
                                        Save
                                    </Button>
                                    <Button
                                        style={{
                                            width: "100px",
                                            height: "40px",
                                            backgroundColor: "#f14d54",
                                            textTransform: 'none',
                                            color: "white",
                                            alignItems: "center"
                                        }}
                                    >
                                        Cancel
                                    </Button>

                                </Grid>







                                <Grid item xs={6}>

                                    <Typography
                                        style={{
                                            color: "#414141",
                                            marginBottom: "15px"
                                        }}
                                    >
                                        Last Name *
                                    </Typography>
                                    {touched.email && <span style={{ color: "red" }}> {errors.email}</span>}
                                    <input
                                        type="email" name="email" id="email" label="email"
                                        value={values.email}
                                        onChange={handleChange} onBlur={handleBlur}
                                        style={{
                                            width: "100%",
                                            height: "40px",
                                            marginBottom: "35px"
                                        }}
                                    />

                                    <Typography
                                        style={{
                                            color: "#414141",
                                            marginBottom: "15px"
                                        }}
                                    >
                                        Description
                                    </Typography>
                                    {touched.password && <span style={{ color: "red" }}> {errors.password}</span>}
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
                                </Grid>
                            </Grid>
                        </Box>
                    </div>

                </form>
            </Container>

        </>
    );
}
export default EditProduct;