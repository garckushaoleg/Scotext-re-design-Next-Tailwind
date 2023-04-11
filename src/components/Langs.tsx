import { useState, useEffect } from "react";
import styles from "../styles/Langs.module.css";

interface LangsProps {
  setIsShowedAllPopups: (show: boolean) => void;
  isShowedAllPopups: boolean;
  getTitleOfOpenedPopup: (title: string) => void;
  isClosedLangsPopup: boolean;
}

export default function Langs({ setIsShowedAllPopups, isShowedAllPopups, getTitleOfOpenedPopup, isClosedLangsPopup }:LangsProps) {

	const [ isShowedLangsPopUp, setIsShowedLangsPopUp ] = useState(isShowedAllPopups);
	const [ selectedLangImg, setSelectedLangImg ] = useState('/assets/icons/flag.png');
	const [ selectedLang, setselectedLang ] = useState('deutsch');

	useEffect(() => {
		if (!isShowedAllPopups) {
			setIsShowedLangsPopUp(isShowedAllPopups);
		}
	}, [ isShowedAllPopups ])

	useEffect(() => {
		if (isClosedLangsPopup) {
			setIsShowedLangsPopUp(false);
		}
	}, [ isClosedLangsPopup ])

	const onClickOnLangs = () => {
		if (!isShowedLangsPopUp) getTitleOfOpenedPopup('LangsPopUp');
		setIsShowedAllPopups(!isShowedLangsPopUp);
		setIsShowedLangsPopUp(state => !state);
	}

	const getSelectedLang = (lang) => {
		switch (lang) {
			case 'deutsch': setSelectedLangImg('/assets/icons/flag.png'); break;
			case 'english': setSelectedLangImg('/assets/icons/flag-uk.svg'); break;
			case 'français': setSelectedLangImg('/assets/icons/flag-france.png'); break;
		}
	}

	const onClickOnLang = (lang) => {
		setselectedLang(lang);
		getSelectedLang(lang);
	}

	const getStyles = (lang) => {
		if (lang === selectedLang) {
			return {
				backgroundColor: '#afc410',
				color: 'white',
			}
		}

		return {}
	}

	return (
		<div className="relative" aria-labelledby="LangsPopUp">
			<div className="flex items-center gap-2 cursor-pointer" onClick={ onClickOnLangs }>
				<img src={ selectedLangImg } alt="Flag" className="w-9 h-6" />
				<img src="/assets/icons/arrow-down.svg" alt="Arrow Down" className="w-4" />
			</div>

			<div className={ `${styles.LangsPopup} ${ isShowedLangsPopUp ? styles.Show : '' }` }>
				<div className={ styles.LangsPopupWrapper }>
					<div className="flex flex-col gap-2">
						<div 
							className="flex gap-2 py-2 px-6 hover:bg-[#afc410] hover:text-white cursor-pointer" 
							onClick={ () => onClickOnLang('deutsch')}
							style={ getStyles('deutsch') }
						>
							<img className="w-8" src="/assets/icons/flag.png" />
							<span>Deutsch</span>
						</div>
						<div 
							className="flex gap-2 py-2 px-6 hover:bg-[#afc410] hover:text-white cursor-pointer"
							onClick={ () => onClickOnLang('english') }
							style={ getStyles('english') }
						>
							<img className="w-8" src="/assets/icons/flag-uk.svg" />
							<span>English</span>
						</div>
						<div 
							className="flex gap-2 py-2 px-6 hover:bg-[#afc410] hover:text-white cursor-pointer"
							onClick={ () => onClickOnLang('français') }
							style={ getStyles('français') }
						>
							<img className="w-8" src="/assets/icons/flag-france.png" />
							<span>Français</span>
						</div>
					</div>
				</div>
			</div>

		</div>
	)
}