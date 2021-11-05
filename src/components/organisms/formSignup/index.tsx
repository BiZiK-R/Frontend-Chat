import React, { FC } from "react";
import { useHistory } from "react-router-dom";
import { useFormik } from "formik";
import { signupSchema } from "../../../validations/authorization";
import { InputForm } from "../../molecules/inputForm";
import { Button } from "../../atoms/Button";
import { SecurityCode } from "../../molecules/securityCode";
//import captchaSrc from '../../../assets/captcha.png';
import { SCREENS } from "../../../routes/endpoints";
import { SelectGender } from "../../molecules/selectGender";

import "./formSignup.scss";

// const captchaImg = new XMLHttpRequest();

// captchaImg.open()

const captchaSrc = "http://109.194.37.212:93//api/auth/captcha";

export const FormSignup: FC = () => {
  const history = useHistory();

  const formik = useFormik({
    initialValues: {
      login: "",
      password: "",
      passwordConfirm: "",
      name: "",
      gender_id: "",
      captcha: "",
    },
    onSubmit: (values) => {
      console.log(JSON.stringify(values));
    },
    validationSchema: signupSchema,
  });

  return (
    <div className="form-signup">
      <form className="form-signup__form" onSubmit={formik.handleSubmit}>
        <div className="form-signup__inputs">
          <InputForm
            onChange={formik.handleChange}
            inValidInput={formik.touched.login && Boolean(formik.errors.login)}
            value={formik.values.login}
            name="login"
            description="Create user name"
            placeholder="Input user name"
            type="text"
            errorText={formik.errors.login}
          />
          <InputForm
            onChange={formik.handleChange}
            inValidInput={
              formik.touched.password && Boolean(formik.errors.password)
            }
            value={formik.values.password}
            name="password"
            description="Create password"
            placeholder="Input password"
            type="password"
            errorText={formik.errors.password}
          />
          <InputForm
            onChange={formik.handleChange}
            inValidInput={
              formik.touched.passwordConfirm &&
              Boolean(formik.errors.passwordConfirm)
            }
            value={formik.values.passwordConfirm}
            name="passwordConfirm"
            description="Password confirmation"
            placeholder="Password confirmation"
            type="password"
            errorText={formik.errors.passwordConfirm}
          />
          <InputForm
            onChange={formik.handleChange}
            inValidInput={formik.touched.name && Boolean(formik.errors.name)}
            value={formik.values.name}
            name="name"
            description="Nickname"
            placeholder="Nickname"
            type="text"
            errorText={formik.errors.name}
          />
          <SelectGender
            description="Your gender"
            genders={[
              { gender: "Male", gender_id: 1 },
              { gender: "Female", gender_id: 2 },
            ]}
          />
          <div className="form-signup__security-code">
            <SecurityCode
              onChange={formik.handleChange}
              inValidInput={
                formik.touched.captcha && Boolean(formik.errors.captcha)
              }
              value={formik.values.captcha}
              name="captcha"
              theme="last-input"
              description="Security code"
              placeholder="Security code"
              type="text"
              errorText={formik.errors.captcha}
              src={captchaSrc}
            />
          </div>
        </div>
        <div className="form-signup__buttons">
          <Button theme="submit-auth" type="submit">
            Registration
          </Button>
          <Button
            onClick={() => {
              history.push(SCREENS.SCREEN_LOGIN);
            }}
            theme="nav-auth"
            type="button"
          >
            Log in
          </Button>
        </div>
      </form>
    </div>
  );
};
