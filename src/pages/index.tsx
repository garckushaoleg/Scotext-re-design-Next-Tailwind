import { Raleway } from 'next/font/google';
import Header from "../components/Header.tsx";
import Main from "../components/Main.tsx";
import Footer from "../components/Footer.tsx";
import { useState } from "react";

const raleway = Raleway({ subsets: ['latin'] })

export default function Home() {

  const [ isTarget, setIsTarget ] = useState(false);
  const [ coordinates, setCoordinates ] = useState({});

  const onClick = (e) => {
    const isClickedOnTarget = !!e.target.closest('div[aria-labelledby="LogInPopUp"]') || !!e.target.closest('div[aria-labelledby="LangsPopUp"]') || 
      !!e.target.closest('div[aria-labelledby="CartPopUp"]');
    setIsTarget(isClickedOnTarget);
    const newCoordinates = { clientX: e.clientX, clientY: e.clientY };
    setCoordinates(newCoordinates);
  }

  return (
    <div className={ raleway.className } onClick={ onClick }>
      <Header isTarget={ isTarget } coordinates={ coordinates }/>
      <Main />
      <Footer />
      <script src="https://scaleflex.cloudimg.io/v7/plugins/js-cloudimage-360-view/latest/js-cloudimage-360-view.min.js?func=proxy"></script>
    </div>
  )
}
