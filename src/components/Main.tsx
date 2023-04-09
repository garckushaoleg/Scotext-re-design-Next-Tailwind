import styles from "../styles/Main.module.css";
import Card from "./Card.tsx";

export default function Main() {
	const cards = [{
		isReverse: true,
		isMoreInfo: false,
		logo: '/assets/images/logo-company-2.png',
		mainPic: '/assets/images/card1.png',
		additionalInfo: {
			videos: [],
			images: [],
		},
		desc: 'Der für den Strassenverkehr zugelassene. E-Scooter H10 eignet sich hervorragend für den Weg auf die Arbeit, dies auch in Verbindung mit öffentlichen Verkehrsmitteln. Mit seinem geringen Gewicht von nur 14,8 kg und einer max. Motorleistung von 540 Watt kann man eine Strecke bis zu 30 km zurücklegen.'
	},
	{
		isReverse: false,
		isMoreInfo: true,
		logo: '/assets/images/okai-brand.png',
		mainPic: '/assets/images/card2.png',
		additionalInfo: {
			videos: [],
			images: [ '/assets/images/add-pic1.jpg', '/assets/images/add-pic2.jpg' ],
		},
		desc: 'Hier erfahren sie mehr über den OKAI Neon in der eKFV und EU Version.'
	},
	{
		isReverse: false,
		isMoreInfo: true,
		logo: '/assets/images/logo-company-1.png',
		mainPic: '/assets/images/card3.jpg',
		additionalInfo: {
			videos: [ 'https://www.youtube.com/embed/kESuz6AydDU' ],
			images: [],
		},
		desc: 'Der große Bruder des H10 ist der H20. Mit einer unglaublichen Motorleistung von 1008 Watt und seinem 48 Volt 10,4 Ah Lithiumakku bringt der E-Scooter es auf eine Reichweite von 42 km. Im Vergleich zum H10 stechen hier die Leitung des Motors und des verbauten Akkus besonders heraus.'
	},
	{
		isReverse: false,
		isMoreInfo: true,
		logo: '/assets/images/logo-company-3.png',
		mainPic: '/assets/images/card-main-pic-3.jpg',
		additionalInfo: {
			videos: [],
			images: [],
		},
		desc: 'Das neue Mini E-Quad SCOTEX Spike ist ein mit 4 Luftreifen bestücktes Elektroquad, angetrieben von einem 250W Elektromotor. Das Kinder Elektroquad ist geeignet für Kinder ab 5 Jahren '
	},
	{
		isReverse: true,
		isMoreInfo: true,
		logo: '/assets/images/logo-company-4.png',
		mainPic: '/assets/images/card-main-pic-4.jpg',
		additionalInfo: {
			videos: [],
			images: [],
		},
		desc: 'Das SCOTEX Wheely ist ein E-Scooter im E-Bike Design für Kinder. Aufgrund des höhenverstellbaren Sattels wächst das Bike mit dem Kind mit. Die Rahmen- und Reifengröße ist geeignet für Kinder ab 3 Jahren.'
	}];

	return (
		<div className="bg-[#006450] w-full h-full flex flex-col align-center pt-20 pb-[200px] px-4 gap-[150px]">
			{ cards.map(({ logo, desc, mainPic, isReverse, isMoreInfo, additionalInfo }, index) => (
					<div className="flex justify-center" key={ index }>
						<Card 
							logo={ logo }
							mainPic={ mainPic }
							desc={ desc }
							isReverse={ isReverse }
							isMoreInfo={ isMoreInfo }
							additionalInfo={ additionalInfo }
						/>
					</div>
				))
			}
		</div>
	)
}