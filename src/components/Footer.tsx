export default function Footer() {
	return(
		<div className="flex justify-center flex-col items-center w-full h-full text-[#e3e3e3] bg-[#101010] py-20">
			<div className="flex justify-between max-w-[1218px] w-full flex-wrap px-6 gap-6">
				<div className="flex flex-col gap-2">
					<p className="text-xl font-medium pb-2">SERVICE</p>
					<a href="#">Kontakt</a>
					<a href="#">Rücksendung</a>
					<a href="#">Warenkorb</a>
					<a href="#">Konto</a>
					<a href="#">Merkzettel</a>
					<a href="#">Mein Wunschzettel</a>
					<a href="#">Öffentlicher Wunschzettel</a>
					<a href="#">Meine Downloads</a>
				</div>

				<div className="flex flex-col gap-2">
					<p className="text-xl font-medium pb-2">INFORMATIONEN</p>
					<a href="#">Batterieverordnung / BattG</a>
					<a href="#">Impressum</a>
					<a href="#">AGB</a>
					<a href="#">Datenschutz</a>
					<a href="#">Zahlung und Lieferung</a>
					<a href="#">Widerrufsrecht</a>
					<a href="#">Wie bestellen?</a>
					<a href="#">Newsletter</a>
				</div>

				<div className="flex flex-col gap-2">
					<p className="text-xl font-medium pb-2">KATEGORIEN</p>
					<a href="#">Scooters</a>
					<a href="#">Kinderfahrzeuge</a>
					<a href="#">Gebrauchte</a>
					<a href="#">Ersatzteile</a>
					<a href="#">Zubehör</a>
					<a href="#">über uns</a>
					<a href="#">Scotex Care</a>
				</div>

				<div className="flex flex-col gap-2">
					<p className="text-xl font-medium pb-2">NEWSLETTER</p>
					<span className="max-w-md">Die neuesten Produkte und die besten Angebote per E-Mail, damit Ihr nichts mehr verpasst.</span>

					<div className="max-w-md w-full">
							<input className="rounded-3xl max-w-md w-full h-12 pl-4" placeholder="Subscribe" />
					</div>
					<div className="flex gap-4 mt-4">
						<img className="w-12 h-12 cursor-pointer" src="/assets/icons/facebook.svg" alt="Facebook" />
						<img className="w-14 h-14 relative bottom-1 cursor-pointer" src="/assets/icons/instagram.svg" alt="Instagram" />
						<img className="w-16 h-16 relative bottom-2 cursor-pointer" src="/assets/icons/youtube.svg" alt="Youtube" />
					</div>
				</div>
			</div>

			<div className="flex justify-between max-w-[1218px] w-full pt-12 gap-8 px-6 flex-wrap">
				<span>Onlineshop für Emobility wie Elektroscooter, Eroller, Ersatzteile, Tuning & Zubehör und vieles mehr</span>
				<span>* * Alle Preise inkl. MwSt., zzgl. Versandkosten.</span>
			</div>
		</div>
	)
}