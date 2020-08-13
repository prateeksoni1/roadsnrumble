import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { useRouter } from "next/router";

import "react-toastify/dist/ReactToastify.css";
import "../styles/index.scss";

import Navbar from "../components/Navbar";
import { verifyToken } from "../api/auth";

export default function MyApp({ Component, pageProps }) {
  const router = useRouter();

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (pageProps.admin) {
      setLoading(true);
      fetchData();
    }
  }, [pageProps.admin]);

  const fetchData = async () => {
    try {
      await verifyToken();
      setLoading(false);
    } catch (err) {
      await router.replace("/");
      setLoading(false);
      toast.error("You are not authorized! 👋");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <>
          {!pageProps.disableNavbar ? <Navbar /> : null}
          <Component {...pageProps} />
          <ToastContainer />
        </>
      )}
    </>
  );
}
