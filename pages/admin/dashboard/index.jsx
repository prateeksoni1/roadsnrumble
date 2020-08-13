import React from "react";
import Link from "next/link";
import classes from "./index.module.scss";

export const getStaticProps = async () => {
  return {
    props: {
      admin: true,
    },
  };
};

const AdminDashboardPage = () => {
  return (
    <div className={`${classes.container} ${classes.screen}`}>
      <Link href="/admin/blog/create-blog">
        <button className={classes.btn}>Create Blog</button>
      </Link>
    </div>
  );
};

export default AdminDashboardPage;
