import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import "../styles/index.scss";

import Navbar from "../components/Navbar";

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      {!pageProps.disableNavbar ? <Navbar /> : null}
      <Component {...pageProps} />
      <ToastContainer />
    </>
  );
}
