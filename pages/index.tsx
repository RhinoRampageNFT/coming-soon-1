/* eslint-disable react-hooks/exhaustive-deps */
import Head from "next/head";
import classes from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Head>
      
        <title>Rogue Pandas</ title>
        
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex flex-col items-center min-h-screen mx-6">
      
        <img className={classes.imagegif} src="/images/coming-soon.jpg"></img>
        
        
          
        
        
       
        
        
      </div>
    </>
  );
}
