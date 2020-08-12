import "../styles/index.scss";
import Navbar from "../components/Navbar";

export default function MyApp({ Component, pageProps }) {
  if (pageProps.disableNavbar) {
    return <Component {...pageProps} />;
  }

  return (
    <>
      <Navbar />
      <Component {...pageProps} />
    </>
  );
}
