import * as yup from "yup";

export const loginSchema = yup.object().shape({
  login: yup
    .string()
    .required("The field must be filled")
    .min(2, "Must be more than 4 characters")
    .max(50, "Must be no more than 50 characters"),
  password: yup
    .string()
    .required("The field must be filled")
    .min(6, "Must be more than 6 characters"),
  captcha: yup
    .string()
    .required("The field must be filled")
    .min(5, "Must be 5 characters")
    .max(5, "Must be 5 characters"),
});

export const signupSchema = yup.object().shape({
  login: yup
    .string()
    .required("The field must be filled")
    .max(50, "Must be no more than 50 characters"),
  password: yup.string().required("The field must be filled"),
  password_confirm: yup
    .string()
    .required("The field must be filled")
    .oneOf([yup.ref("password"), null], "Password mismatch"),
  name: yup
    .string()
    .required("The field must be filled")
    .max(50, "Must be no more than 50 characters"),
  gender_id: yup.number().integer().required("The field must be filled"),
  captcha: yup
    .string()
    .required("The field must be filled")
    .min(5, "Must be 5 characters")
    .max(5, "Must be 5 characters"),
});
