import React from "react";

export const getStaticProps = async () => {
  return {
    props: {
      admin: true,
    },
  };
};

const AdminDashboardPage = () => {
  return <div>dash</div>;
};

export default AdminDashboardPage;
