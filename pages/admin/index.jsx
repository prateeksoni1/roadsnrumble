import React from "react";
import { Formik, Form, Field } from "formik";
import classes from "./index.module.scss";

export async function getStaticProps(context) {
  return {
    props: {
      disableNavbar: true,
    }, // will be passed to the page component as props
  };
}

const AdminPage = () => {
  const handleSubmit = (values) => {
    // handle submit
  };

  return (
    <div className={[classes.container, classes.screen].join(" ")}>
      <h1>Admin Page Login</h1>
      <Formik
        initialValues={{ username: "", password: "" }}
        onSubmit={handleSubmit}
      >
        {() => (
          <Form>
            <Field name="username" placeholder="Username" />
            <Field
              name="password"
              type="password"
              placeholder="password"
              type="password"
            />
            <button className={classes.btn}>Login</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default AdminPage;
