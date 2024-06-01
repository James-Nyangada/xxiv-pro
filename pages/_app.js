import Preloader from "@/src/components/Preloader";
import Switcher from "@/src/components/Switcher";
import SalimovHead from "@/src/SalimovHead";
import "@/styles/globals.css";
import { Fragment } from "react";
import dynamic from 'next/dynamic';


const CustomCursor = dynamic(() => import('../src/components/CustomCursor'), { ssr: false });

const App = ({ Component, pageProps }) => {
  return (
    <Fragment>
      <SalimovHead />
      <Switcher />
      <Preloader />
      <CustomCursor />
      <Component {...pageProps} />
    </Fragment>
  );
};
export default App;
