import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import styles from "./styles.module.css";
import { Formik, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
// import { validationSignup } from "./signupvalidation";

const Signup = () => {
  const [data, setData] = useState({
    fullName: "",
    phone: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };

  const phoneRegExp =
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
  const EmailRegex = /^[a-zA-Z0-9]+@+[a-zA-Z0-9]+.+[A-z]/;

  const SignupSchema = Yup.object().shape({
    fullName: Yup.string()
      .min(3, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    phone: Yup.string()
      .required("required")
      .matches(phoneRegExp, "Phone number is not valid")
      .min(10, "to short")
      .max(10, "to long"),
    email: Yup.string()
      .email("Invalid email")
      .required("required")
      .matches(EmailRegex, "Phone number is not valid"),
  });

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = "https://afraid-ape-61.loca.lt/auth/seller/register";
      const { data: res } = await axios.post(url, data);
      navigate("/");
      console.log(res.message);
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

  console.log(">>>>>>>>..", data);

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
            initialValues={data}
            validationSchema={SignupSchema}
            onSubmit={onSubmit}
          >
            <div className={styles.right}>
              <Form className={styles.form_container}>
                <h1>Create Account</h1>
                <input
                  type="text"
                  placeholder="First Name"
                  name="fullName"
                  onChange={handleChange}
                  value={data.firstName}
                  className={styles.input}
                />
                <ErrorMessage name="fullName">{(msg) => <div style={{ color: "red" }}>{msg}</div>}</ErrorMessage>
                <input
                  type="tel"
                  placeholder="Mobile Number"
                  name="phone"
                  onChange={handleChange}
                  value={data.mobile}
                  className={styles.input}
                />
                <ErrorMessage name="phone">{(msg) => <div style={{ color: "red" }}>{msg}</div>}</ErrorMessage>
                <input
                  type="email"
                  placeholder="Email"
                  name="email"
                  onChange={handleChange}
                  value={data.email}
          
                  className={styles.input}
                />
                <ErrorMessage name="email">{(msg) => <div style={{ color: "red" }}>{msg}</div>}</ErrorMessage>
                <input
                  type="password"
                  placeholder="Password"
                  name="password"
                  onChange={handleChange}
                  value={data.password}
                  className={styles.input}
                />
                <ErrorMessage name="password">{(msg) => <div style={{ color: "red" }}>{msg}</div>}</ErrorMessage>
                {error && <div className={styles.error_msg}>{error}</div>}
                <button type="submit" className={styles.green_btn}>
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
