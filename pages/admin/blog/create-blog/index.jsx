import React from "react";
import dynamic from "next/dynamic";
import MarkdownIt from "markdown-it";
import classes from "./index.module.scss";
import { Formik, Form, Field } from "formik";

const MdEditor = dynamic(import("react-markdown-editor-lite"), {
  ssr: false,
  loading: () => <div>Loading...</div>,
});

export const getStaticProps = async () => {
  return {
    props: {
      admin: true,
    },
  };
};

const CreateBlogScreen = () => {
  const [text, setText] = React.useState("");

  const handleChange = (value) => {
    setText(value);
  };

  const mdParser = new MarkdownIt(/* Markdown-it options */);

  function handleEditorChange({ html, text }) {
    setText(text);
    console.log("handleEditorChange", html, text);
  }

  const handleSubmit = (values) => {};

  return (
    <div className={`${classes.container} ${classes.screen}`}>
      <h1>Create Blog</h1>
      <Formik
        initialValues={{ title: "", description: "" }}
        onSubmit={handleSubmit}
      >
        {() => (
          <Form>
            <Field className={classes.title} placeholder="Title" name="title" />
            <Field
              className={classes.description}
              placeholder="Description"
              name="description"
            />
          </Form>
        )}
      </Formik>
      <MdEditor
        value={text}
        style={{ minHeight: "500px", marginTop: "2rem" }}
        renderHTML={(text) => mdParser.render(text)}
        onChange={handleEditorChange}
      />
    </div>
  );
};

export default CreateBlogScreen;
