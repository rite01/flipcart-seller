import * as Yup from 'yup';

// here you can add multiple validations per field
export const validationSignup = Yup.object().shape({
  email: Yup.string().required('Required').email('Enter a valid email'),
  password: Yup.string(). required("Required")
}); 