import styles from "../styles/Header.module.css";
import Link from 'next/link';
import { useState, useEffect } from "react";
import LogIn from "./LogIn.tsx";
import Langs from "./Langs.tsx";
import Cart from "./Cart.tsx";

export default function Header({ isTarget, coordinates }) {
	const [ isShowedAllPopups, setIsShowedAllPopups ] = useState(false);
	const [ titleOfOpenedPopup, setTitleOfOpenedPopup] = useState('');
	const [ isOpenedMobileNav, setIsOpenedMobileNav ] = useState(false);

	const [ isClosedLangsPopup, setIsClosedLangsPopup ] = useState(false);
	const [ isClosedLogInPopup, setIsClosedLogInPopup ] = useState(false);
	const [ isClosedCartPopup, setIsClosedCartPopup ] = useState(false);

	const [ isShowedSubmenu, setIsShowedSubmenu ] = useState(false)

	useEffect(() => {
  	setIsClosedLangsPopup(false);
  	setIsClosedLogInPopup(false);
		setIsClosedCartPopup(false);

    if (!isTarget) {
      setIsShowedAllPopups(false);
    }
	}, [ coordinates ])

	useEffect(() => {
		switch (titleOfOpenedPopup) {
			case 'LangsPopUp': setIsClosedLogInPopup(true); setIsClosedCartPopup(true); break;
			case 'LogInPopUp': setIsClosedLangsPopup(true); setIsClosedCartPopup(true); break;
			case 'CartPopUp': setIsClosedLogInPopup(true); setIsClosedLangsPopup(true); break;
		}
	}, [ titleOfOpenedPopup ])

  const getTitleOfOpenedPopup = (titleOfOpenedPopup) => {
  	setTitleOfOpenedPopup(titleOfOpenedPopup);
  }

  const onClickOnBurgerIcon = () => {
  	setIsOpenedMobileNav(state => !state)
  }

  const onMouseOver = () => {
		setIsShowedSubmenu(true);
  }

  const onMouseLeave = () => {
  	setIsShowedSubmenu(false);
  }

	return (
		<>
			<div className={ styles.Desktop }>
				<header className="flex justify-center w-full bg-[#101010] pt-4 pb-6 px-8">
					<div className="flex flex-col max-w-[1170px] w-full">

						<div className="mb-6 flex justify-center">
							<span className="text-white text-l font-semibold">Beratung & Kontakt von Mo. - Do. 9:00 - 12:00 & 14:00 - 16:00 Uhr am Freitag von 9:00 - 12:00 Uhr - Tel. +49 7623 - 468 412 0 - info@scotex.de</span>
						</div>

						<div className="flex justify-between w-full items-center">
							<div className={ styles.HeaderLogo }>
								<img src="/assets/images/logo.svg" alt="Stotex by sxt" />
							</div>

							<div className="max-w-md w-full">
									<input className="rounded-3xl max-w-md w-full h-12 pl-4" placeholder="Suchbegriff eingeben..." />
							</div>

							<div className="flex items-end gap-14" >
								<Langs 
									setIsShowedAllPopups={ setIsShowedAllPopups } 
									isShowedAllPopups={ isShowedAllPopups } 
									getTitleOfOpenedPopup={ getTitleOfOpenedPopup } 
									isClosedLangsPopup={ isClosedLangsPopup }
								/>
								<LogIn 
									setIsShowedAllPopups={ setIsShowedAllPopups } 
									isShowedAllPopups={ isShowedAllPopups } 
									getTitleOfOpenedPopup={ getTitleOfOpenedPopup } 
									isClosedLogInPopup={ isClosedLogInPopup }
								/>
							</div>
						</div>
					</div>
				</header>
			</div>
			<nav className={ styles.DesktopNav }>
				<Link className="text-[#d4d4d4] h-full flex items-center text-center" href="/">Startseite</Link>
				<Link className="h-full flex items-center text-center text-[#afc410]" href="/">Scooters</Link>
				<Link className="h-full flex items-center text-center text-[#afc410]" href="/">Kinderfahrzeuge</Link>
				<Link className="h-full flex items-center text-center text-[#afc410]" href="/">Gebrauchte</Link>
				<div className="h-full flex items-center relative text-center" onMouseOver={ onMouseOver } onMouseLeave={ onMouseLeave }>
					<div className="flex gap-2 h-full items-center">
						<Link className={ styles.SubMenuItem } href="/">Ersatzteile</Link>
						<img src="/assets/icons/arrow-down.svg" alt="Arrow Down" className="w-2" />
					</div>
					<div className={`${styles.Submenu} ${isShowedSubmenu ? styles.Show : ''}`}>
						<Link href="/" className="whitespace-nowrap text-[#50C878]">Scotex H10</Link>
						<Link href="/" className="whitespace-nowrap text-[#50C878]">Scotex H20</Link>
						<Link href="/" className="whitespace-nowrap text-[#50C878]">Scotex Spike</Link>
						<Link href="/" className="whitespace-nowrap text-[#50C878]">Scotex Wheely</Link>
					</div>
				</div>
				<Link className="h-full flex items-center text-center text-[#afc410]" href="/">Zubehör</Link>
				<Link className="h-full flex items-center text-center text-[#afc410]" href="/">über uns</Link>
				<Link className="h-full flex items-center text-center text-[#afc410]" href="/">Scotex Care</Link>
				<Cart 
					setIsShowedAllPopups={ setIsShowedAllPopups } 
					isShowedAllPopups={ isShowedAllPopups } 
					getTitleOfOpenedPopup={ getTitleOfOpenedPopup } 
					isClosedCartPopup={ isClosedCartPopup }
				/>
			</nav>

			<div className={ styles.Mobile }>
				<header className="flex justify-center w-full bg-[#101010] pt-4">
					<div className="flex flex-col w-full">
						<div className="flex justify-between w-full items-center flex-col ">

							<div className={ styles.HeaderLogo }>
								<img src="/assets/images/logo.svg" alt="Stotex by sxt" />
							</div>

							<div className="mb-6 flex justify-center px-8 pt-8 text-center">
								<span className="text-white text-l font-semibold">Support & Contact from Mo - Thu 9:00 - 12:00h & 14:00 - 16:00h on Fridays 9:00 - 12:00h - Tel. +49 7623 - 468 412 0 - info@scotex.de</span>
							</div>

							<div className="max-w-md w-full">
									<input className="rounded-3xl max-w-md w-full h-12 pl-4" placeholder="Enter a search term..." />
							</div>

						</div>
					</div>
				</header>
			</div>

			<div className={ styles.MobileNav }>
				<nav className={ styles.MobileNavWrapper }>
					<div onClick={ onClickOnBurgerIcon }>
						<img src="/assets/icons/menu-burger.svg" alt="Mobile menu" className="w-8 cursor-pointer" />
					</div>

					<Langs 
						setIsShowedAllPopups={ setIsShowedAllPopups } 
						isShowedAllPopups={ isShowedAllPopups } 
						getTitleOfOpenedPopup={ getTitleOfOpenedPopup } 
						isClosedLangsPopup={ isClosedLangsPopup }
					/>

					<LogIn 
						setIsShowedAllPopups={ setIsShowedAllPopups } 
						isShowedAllPopups={ isShowedAllPopups } 
						getTitleOfOpenedPopup={ getTitleOfOpenedPopup } 
						isClosedLogInPopup={ isClosedLogInPopup }
					/>

					<Cart 
						setIsShowedAllPopups={ setIsShowedAllPopups } 
						isShowedAllPopups={ isShowedAllPopups } 
						getTitleOfOpenedPopup={ getTitleOfOpenedPopup } 
						isClosedCartPopup={ isClosedCartPopup }
					/>
				</nav>

				<div className={ `${ styles.MobileMenu } ${ isOpenedMobileNav ? styles.Show : '' }` }>
					<Link className="text-[#d4d4d4]" href="/">Home</Link>
					<Link href="/">Scooter models</Link>
					<Link href="/">Children's vehicles</Link>
					<Link href="/">used & returns</Link>
					<Link href="/">Spare parts</Link>
					<Link href="/">Accessories</Link>
					<Link href="/">Packing material</Link>
				</div>
			</div>
		</>
	)
}