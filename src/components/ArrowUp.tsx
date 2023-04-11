import styles from "../styles/ArrowUp.module.css";
import { useState } from "react";
import Image from 'next/image';

export default function ArrowUp() {
	const [ isShowedArrowUp, setIsShowedArrowUp ] = useState(false);

	if (typeof window !== 'undefined') {
	 	const header = document.getElementById('header');

    window.addEventListener("scroll", (e) => {
      const top = header.getBoundingClientRect().top;
      setIsShowedArrowUp(!!top);
    });
  }

	const onClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

	return (
		<div className={ `${ styles.ArrowUp } ${ isShowedArrowUp ? styles.Show : '' }` } onClick={ onClick }>
      <Image width={32} height={32} src="/assets/icons/arrow-up.png" alt="Arrow Up" />
    </div>
	)
}