import React, { FC, useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useFormik } from "formik";
import { signupSchema } from "../../../validations/authorization";
import { InputForm } from "../../molecules/inputForm";
import { Button } from "../../atoms/Button";
import { SecurityCode } from "../../molecules/securityCode";
//import captchaSrc from '../../../assets/captcha.png';
import { SCREENS } from "../../../routes/endpoints";
import { SelectGender } from "../../molecules/selectGender";
import { Authorization } from "../../../api/authorization";
import { genders } from "../../../store/genders";

import "./formSignup.scss";

// const captchaImg = new XMLHttpRequest();

// captchaImg.open()

const captchaSrc = "http://109.194.37.212:93//api/auth/captcha";

const signup = new Authorization();

genders.getGender();
console.log(genders.gender);

export const FormSignup: FC = () => {
  const history = useHistory();
  const [btnDisabled, setBtnDisabled] = useState(false);

  const formik = useFormik({
    initialValues: {
      login: "",
      password: "",
      password_confirm: "",
      name: "",
      gender_id: 0,
      captcha: "",
    },
    onSubmit: async (values) => {
      setBtnDisabled(true);
      const res = await signup.postSignUp(values);
      if (res) {
        history.push(SCREENS.SCREEN_LOGIN);
      }
      setBtnDisabled(!res);
    },
    validationSchema: signupSchema,
  });

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    formik.handleChange(e);
    setBtnDisabled(false);
  };

  return (
    <div className="form-signup">
      <form className="form-signup__form" onSubmit={formik.handleSubmit}>
        <div className="form-signup__inputs">
          <InputForm
            onChange={onChange}
            inValidInput={formik.touched.login && Boolean(formik.errors.login)}
            value={formik.values.login}
            name="login"
            description="Create user name"
            placeholder="Input user name"
            type="text"
            errorText={formik.errors.login}
          />
          <InputForm
            onChange={onChange}
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
            onChange={onChange}
            inValidInput={
              formik.touched.password_confirm &&
              Boolean(formik.errors.password_confirm)
            }
            value={formik.values.password_confirm}
            name="password_confirm"
            description="Password confirmation"
            placeholder="Password confirmation"
            type="password"
            errorText={formik.errors.password_confirm}
          />
          <InputForm
            onChange={onChange}
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
            onChange={(selectedOption) => {
              formik.setFieldValue("gender_id", selectedOption.value);
              setBtnDisabled(false);
            }}
            genders={genders.gender}
          />
          <div className="form-signup__security-code">
            <SecurityCode
              onChange={onChange}
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
          <Button disabled={btnDisabled} theme="submit-auth" type="submit">
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
