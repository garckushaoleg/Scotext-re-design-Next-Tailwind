import { useState, useEffect } from "react";
import styles from "../styles/Cart.module.css";

export default function Cart({ setIsShowedAllPopups, isShowedAllPopups, getTitleOfOpenedPopup, isClosedCartPopup }) {
	const [ isShowedPopup, setIsShowedPopup ] = useState(isShowedAllPopups);

	useEffect(() => {
		if (!isShowedAllPopups) {
			setIsShowedPopup(isShowedAllPopups);
		}
	}, [isShowedAllPopups])

	useEffect(() => {
		if (isClosedCartPopup) {
			setIsShowedPopup(false);
		}
	}, [ isClosedCartPopup ])

	const onClick = () => {
		if (!isShowedPopup) getTitleOfOpenedPopup('CartPopUp');
		setIsShowedAllPopups(!isShowedPopup);
		setIsShowedPopup(state => !state);
	}

	return (
		<div className="relative" aria-labelledby="CartPopUp">
			<div className="w-8 h-8 cursor-pointer relative bottom-2" onClick={ onClick }>
				<img src="/assets/icons/cart.svg" alt="Cart" />
			</div>

			<div className={ `${ styles.CartPopUp } ${ isShowedPopup ? styles.Show : '' }` }>
				<span>Der Warenkorb ist leer.</span>
			</div>
		</div>
	)
}