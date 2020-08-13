import React from "react";
import { useRouter } from "next/router";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import classes from "./index.module.scss";
import api from "../../api";
import { toast } from "react-toastify";
import { login } from "../../api/auth";

export async function getStaticProps(context) {
  return {
    props: {
      disableNavbar: true,
    }, // will be passed to the page component as props
  };
}

const AdminPage = () => {
  const router = useRouter();

  const handleSubmit = async (values, { setSubmitting }) => {
    setSubmitting(true);
    try {
      await login(values);
      localStorage.setItem("roads_token", res.data.token);
      router.push("/admin/dashboard");
    } catch (err) {
      toast.error("Invalid username or password");
    } finally {
      setSubmitting(false);
    }
  };

  const validationSchema = Yup.object({
    username: Yup.string().required(),
    password: Yup.string().required(),
  });

  return (
    <div className={[classes.container, classes.screen].join(" ")}>
      <h1>Admin Page Login</h1>
      <Formik
        initialValues={{ username: "", password: "" }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        {({ isSubmitting }) => (
          <Form>
            <div className={classes.field}>
              <Field name="username" placeholder="Username" />
              <ErrorMessage
                className={classes.error}
                name="username"
                component="div"
              />
            </div>
            <div className={classes.field}>
              <Field
                name="password"
                type="password"
                placeholder="password"
                type="password"
              />
              <ErrorMessage
                className={classes.error}
                name="password"
                component="div"
              />
            </div>
            <button
              type="submit"
              className={classes.btn}
              disabled={isSubmitting}
            >
              Login
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default AdminPage;
