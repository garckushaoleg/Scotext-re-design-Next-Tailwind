import { Raleway } from 'next/font/google';
import Header from "../components/Header.tsx";
import Footer from "../components/Footer.tsx";
import ArrowUp from "../components/ArrowUp.tsx";
import React, { useState } from "react";
import Product from "../components/Product.tsx";
import { useRouter } from 'next/router';
import { product } from '../data/data.js';

const raleway = Raleway({ subsets: ['latin'] })

export default function ScotexH10() {

  const [ isTarget, setIsTarget ] = useState(false);
  const [ coordinates, setCoordinates ] = useState({});

  const router = useRouter();

  let data = null;
  if (router.query.slug === 'scotex-h10') {
    data = { ...product }
  }

  const onClick = (e: React.MouseEvent<HTMLDivElement>) => {
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
      { data && (<Product product={ data } />) }
      <Footer />
      <ArrowUp />
    </div>
  )
}
