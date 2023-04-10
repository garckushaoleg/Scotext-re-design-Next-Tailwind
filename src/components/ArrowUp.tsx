import styles from "../styles/ArrowUp.module.css";
import { useState } from "react";

export default function ArrowUp() {
	const [ isShowedArrowUp, setIsShowedArrowUp ] = useState(true);

	if (typeof window !== 'undefined') {
	 	const header = document.getElementById('header');
    const mobileHeader = document.getElementById('mobile-header');

    window.addEventListener("scroll", (e) => {
      if (header) {
        const top = header.getBoundingClientRect().top;
        setIsShowedArrowUp(!!top);
      }

      if (mobileHeader) {
        const top = mobileHeader.getBoundingClientRect().top;
        setIsShowedArrowUp(!!top);
      }
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
      <img src="/assets/icons/arrow-up.png" className="w-8 h-8" />
    </div>
	)
}