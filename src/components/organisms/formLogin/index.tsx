import React, { FC, useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useFormik } from "formik";
import { loginSchema } from "../../../validations/authorization";
import { InputForm } from "../../molecules/inputForm";
import { Button } from "../../atoms/Button";
import { SecurityCode } from "../../molecules/securityCode";
import { Loading } from "../../molecules/loading";
import { SCREENS } from "../../../routes/endpoints";
import { authorization } from "../../../api/authorization";
import { captcha } from "../../../api/captcha";

import "./formLogin.scss";

export const FormLogin: FC = () => {
  const [btnDisabled, setBtnDisabled] = useState<boolean>(false);
  const [uploadData, setUploadData] = useState<boolean>(false);
  const [captchaSrc, setCaptchaSrc] = useState<string>("");
  const history = useHistory();

  useEffect(() => {
    updateCaptcha();
  }, []);

  const formik = useFormik({
    initialValues: {
      login: "",
      password: "",
      captcha: "",
    },
    onSubmit: async (values) => {
      setBtnDisabled(true);
      setUploadData(true);
      const res = await authorization.postLogin(values);
      if (res) {
        history.push(SCREENS.SCREEN_CHAT);
        return;
      }
      setBtnDisabled(!res);
      setUploadData(false);
      alert("Something went wrong");
      updateCaptcha();
    },
    validationSchema: loginSchema,
  });

  const updateCaptcha = async () => {
    setCaptchaSrc("");
    const CapSrc = await captcha.update();
    setCaptchaSrc(CapSrc);
  };

  return (
    <div className="form-login">
      <form className="form-login__form" onSubmit={formik.handleSubmit}>
        <div className="form-login__inputs">
          <InputForm
            onChange={(e) => {
              formik.handleChange(e);
              setBtnDisabled(false);
            }}
            inValidInput={formik.touched.login && Boolean(formik.errors.login)}
            value={formik.values.login}
            name="login"
            description="User name"
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
            description="Password"
            placeholder="Input password"
            type="password"
            errorText={formik.errors.password}
          />
          <div className="form-login__security-code">
            <SecurityCode
              onChange={formik.handleChange}
              onClick={updateCaptcha}
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
        <div className="form-login__buttons">
          <Button disabled={btnDisabled} theme="submit-auth" type="submit">
            Log in
          </Button>
          <Button
            onClick={() => {
              history.push(SCREENS.SCREEN_SIGNUP);
            }}
            theme="nav-auth"
            type="button"
          >
            Registration
          </Button>
        </div>
        {uploadData ? <Loading /> : ""}
      </form>
    </div>
  );
};
