import styles from "./styles.module.css"; 

import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";

import * as Yup from "yup";
import { Formik, Form, ErrorMessage, Field } from "formik";

import { toast } from "react-toastify";

import { useState } from "react";

const Login = () => {
  const navigate = useNavigate();
  const loginvalue = {
    email: "",
    password: "",
  };
  const [error] = useState("");
  


  const EmailRegex = /^[a-zA-Z0-9]+@+[a-zA-Z0-9]+.+[A-z]/;
  const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;

  const loginSchema = Yup.object({
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

  const handleSubmit = async (loginvalue) => {
    await axios
      .post("https://modern-fox-4.loca.lt/api/login", loginvalue)
      .then( async(response) => {
       
        toast.success("Login SuccessFully")
        toast.error(response.message)
        await localStorage.setItem("Token", response.data.data);
        // console.log(">>>>>>>>>>>>>",response.data.data);
        navigate("/product");
      })
      .catch((error) => {
        toast.error("Plese Check Email or Password",error);
      });
  };



  return (
    <div>
      <div className={styles.login_container}>
        <div className={styles.login_form_container}>
          <Formik
            initialValues={loginvalue}
            onSubmit={handleSubmit}
            validationSchema={loginSchema}
            disabled={!(Formik.dirty && Formik.isValid)}
          >
            <div className={styles.left}>
              <Form className={styles.form_container}>
                <h1>Login to Your Account</h1>

                <Field
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
                {error && <div className={styles.error_msg}>{error}</div>}


                <button type="submit" className={styles.green_btn}>
                    Sing In
                </button>
                
                
              </Form>
            </div>
          </Formik>
          <div className={styles.right}>
            <h1>New Here ?</h1>
            <Link to="/signup">
              <button type="button" className={styles.white_btn}>
                Sing Up
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
