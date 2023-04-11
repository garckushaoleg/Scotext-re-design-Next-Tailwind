import { Raleway } from 'next/font/google';
import Header from "../components/Header.tsx";
import Main from "../components/Main.tsx";
import Footer from "../components/Footer.tsx";
import ArrowUp from "../components/ArrowUp.tsx";
import { useState } from "react";

const raleway = Raleway({ subsets: ['latin'] })

export default function Home() {

  const [ isTarget, setIsTarget ] = useState(false);
  const [ coordinates, setCoordinates ] = useState({});

  const onClick = (e: Event) => {
    const target = e.target as HTMLElement;
    const isClickedOnTarget = !!target?.closest('div[aria-labelledby="LogInPopUp"]') || !!target?.closest('div[aria-labelledby="LangsPopUp"]') || 
      !!target?.closest('div[aria-labelledby="CartPopUp"]');
    setIsTarget(isClickedOnTarget);
    const newCoordinates = { clientX: e.clientX, clientY: e.clientY };
    setCoordinates(newCoordinates);
  }

  return (
    <div className={ raleway.className } onClick={ onClick }>
      <Header isTarget={ isTarget } coordinates={ coordinates }/>
      <Main />
      <Footer />
      <ArrowUp />
    </div>
  )
}
