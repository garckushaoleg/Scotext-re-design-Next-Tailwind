import styles from "../styles/LogIn.module.css";
import { useState, useEffect } from "react";

interface LogInProps {
  setIsShowedAllPopups: (show: boolean) => void;
  isShowedAllPopups: boolean;
  getTitleOfOpenedPopup: (title: string) => void;
  isClosedLogInPopup: boolean;
}


export default function LogIn({ setIsShowedAllPopups, isShowedAllPopups, getTitleOfOpenedPopup, isClosedLogInPopup }:LogInProps) {
	const [ isShowedLogInPopUp, setIsShowedLogInPopUp ] = useState(isShowedAllPopups);

	useEffect(() => {
		if (!isShowedAllPopups) {
			setIsShowedLogInPopUp(isShowedAllPopups);
		}
	}, [ isShowedAllPopups ])

	useEffect(() => {
		if (isClosedLogInPopup) {
			setIsShowedLogInPopUp(false);
		}
	}, [ isClosedLogInPopup ])

	const onClickOnLogIn = () => {
		if (!isShowedLogInPopUp) getTitleOfOpenedPopup('LogInPopUp');
		setIsShowedAllPopups(!isShowedLogInPopUp);
		setIsShowedLogInPopUp(state => !state);
	}

	return (
		<div className="relative" aria-labelledby="LogInPopUp">
			<div className="flex justify-center gap-2 cursor-pointer" onClick={ onClickOnLogIn }>
				<span className="text-[#d4d4d4]">Anmelden</span>
				<img src="/assets/icons/arrow-down.svg" alt="Arrow Down" className="w-4" />
			</div>

			<div className={ `${styles.LogInPopUp} ${ isShowedLogInPopUp ? styles.Show : '' }` }>
				<div 
					className={ styles.LogInPopUpWrapper }
				>
					<div className="flex flex-col gap-1">
						<p className="text-xl font-medium pb-2">Konto</p>
						<a href="#" className="cursor-pointer">Mein Konto</a>
						<a href="#" className="cursor-pointer">Mein Artikelvergleich</a>
						<a href="#" className="cursor-pointer">Mein Merkzettel</a>
						<a href="#" className="cursor-pointer">Mein Wunschzettel</a>
						<a href="#" className="cursor-pointer">Meine Lieblingslisten</a>
						<a href="#" className="cursor-pointer">Meine Downloads</a>
					</div>

					<div className="flex flex-col gap-1">
						<p className="text-xl font-medium pb-2">Anmelden</p>
						<div className="max-w-md w-full">
							<input className="rounded-3xl max-w-md w-full h-8 pl-4 border-2 border-slate-400" placeholder="E-Mail-Adresse" />
						</div>
						<div className="max-w-md w-full">
							<input className="rounded-3xl max-w-md w-full h-8 pl-4 border-2 border-slate-400" placeholder="Passwort" />
						</div>
						<div className="flex gap-2 mt-2">
							<input type="checkbox" id="checkbox" />
							<label htmlFor="checkbox" className="cursor-pointer">Passwort merken</label>
						</div>

						<div className="flex gap-4">
							<a className={ styles.CardButton }>Anmelden</a>
							<a className={ styles.CardButton }>Registrieren</a>
						</div>
					</div>

				</div>
			</div>
			
		</div>
	)
}