import "../styles/globals.css";
import type { AppProps } from "next/app";
import classes from "../styles/Home.module.css";




function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="flex flex-col items-center min-h-screen mx-6">

    <img className={classes.imagegif} src="/images/coming.jpg"></img>
    </div>

  );
}
export default MyApp;
