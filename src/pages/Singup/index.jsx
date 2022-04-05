import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import styles from "./styles.module.css";
import { Formik, Form, ErrorMessage, Field } from "formik";
import * as Yup from "yup";


const Signup = () => {
  const formData = {
    fullName: "",
    number: "",
    email: "",
    password: "",
  };
  const [setError] = useState();

  const numberRegExp =
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
  const EmailRegex = /^[a-zA-Z0-9]+@+[a-zA-Z0-9]+.+[A-z]/;
  const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;

  const SignupSchema = Yup.object().shape({ 
    fullName: Yup.string()
      .min(3, "Too Short!")
      .max(15, "Too Long!")
      .required("Required"),
    number: Yup.string()
      .required("Required")
      .matches(numberRegExp , "Phone number is not valid")
      .min(10, "to short")
      .max(10, "to long"),
    email: Yup.string()
      .email("Invalid email")   
      .required("Required")
      .matches(EmailRegex, "email not validate"),
    password: Yup.string()
      .min(6, "Password Must br 8 Char")
      .max(15, "Too Long!")
      .required("Required")
      .matches(passwordRegex, "Password not validate"),
  });

  let navigate = useNavigate()
                                  

  const handlesubmit = async (formData) => {
    try {
      const url = "https://red-tiger-45.loca.lt/api/Sellersignup ";
      const { formData: res } = await axios.post(url, formData);
      navigate("/");
      console.log(res);
    } catch (error) {
      if (
        error.response &&
        error.response.status >= 400 &&
        error.response.status <= 500
      ) {
        setError(error.response.data.message);
      }
    }
  };

  console.log(">>>>>>>>..", formData);

  return (
    <div>
      <div className={styles.signup_container}>
        <div className={styles.signup_form_container}>
          <div className={styles.left}>
            <h1>Welcome Back</h1>
            <Link to="/">
              <button type="button" className={styles.white_btn}>
                Sing in
              </button>
            </Link>
          </div>

          <Formik
            initialValues={formData}
            validationSchema={SignupSchema}
            onSubmit={handlesubmit}
          >
            <div className={styles.right}>
              <Form className={styles.form_container} autoComplete="off"> 
                <h1>Create Account</h1>
                <Field
                  type="text"
                  placeholder="First Name"
                  name="fullName"
                  className={styles.input}
                />
                <p className="text-danger">
                  <ErrorMessage name="fullName" />
                </p>

                <Field
                  type="tel"
                  placeholder="Mobile Number"
                  name="number"
                  className={styles.input}
                />
                <p className="text-danger">
                  <ErrorMessage name="number" />
                </p>

                <Field
                  type="email"
                  placeholder="Email"
                  name="email"
                  className={styles.input}
                />
                <p className="text-danger">
                  <ErrorMessage name="email" />
                </p>

                <Field
                  type="password"
                  placeholder="Password"
                  name="password"
                  className={styles.input}
                />
                <p className="text-danger">
                  <ErrorMessage name="password" />
                </p>

                <button
                  type="submit"
                  className={styles.green_btn}
                  type="submit"
                >
                  Sing Up
                </button>
              </Form>
            </div>
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default Signup;
