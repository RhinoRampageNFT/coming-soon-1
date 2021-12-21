/* eslint-disable react-hooks/exhaustive-deps */
import Head from "next/head";
import classes from "../styles/Home.module.css";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import useCandyMachine from "../hooks/useCandyMachine";
import useWalletBalance from "../hooks/useWalletBalance";
import Slider from '@mui/material/Slider';
import { Toaster } from "react-hot-toast";
import useWalletNfts from "../hooks/useWalletNFTs";
import Box from '@mui/material/Box';
import AnNFT from "../components/AnNFT/AnNFT";

export default function Home() {
  const [balance] = useWalletBalance();
  const {
    isSoldOut,
    mintStartDate,
    isMinting,
    startMint,
    startMintMultiple,
    nftsData,
  } = useCandyMachine();

  const [isLoading, nfts] = useWalletNfts();





  const MintMany = () => {
   
    return (
      <div className={classes.btnvalidiv}>
       
        
       
      </div>
    );
  };

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
