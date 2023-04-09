export default function Footer() {
	return(
		<div className="flex justify-center flex-col items-center w-full h-full text-[#e3e3e3] bg-[#101010] py-20">
			<div className="flex justify-between max-w-[1218px] w-full flex-wrap px-6 gap-6">
				<div className="flex flex-col gap-2">
					<p className="text-xl font-medium pb-2">SERVICE</p>
					<a href="#">Contact</a>
					<a href="#">Rücksendung</a>
					<a href="#">Cart</a>
					<a href="#">Account</a>
					<a href="#">Wish list</a>
					<a href="#">My gift registry</a>
					<a href="#">Public gift registries</a>
					<a href="#">My downloads</a>
				</div>

				<div className="flex flex-col gap-2">
					<p className="text-xl font-medium pb-2">INFORMATION</p>
					<a href="#">Battery disposal / BattG</a>
					<a href="#">About Us</a>
					<a href="#">Terms and Conditions</a>
					<a href="#">Privacy Policy</a>
					<a href="#">Shipping and Charges</a>
					<a href="#">Right of Withdrawal</a>
					<a href="#">How to order?</a>
					<a href="#">Credits</a>
					<a href="#">Newsletter</a>
				</div>

				<div className="flex flex-col gap-2">
					<p className="text-xl font-medium pb-2">CATEGORIES</p>
					<a href="#">Scooter models</a>
					<a href="#">Children's vehicles</a>
					<a href="#">used & returns</a>
					<a href="#">Spare parts</a>
					<a href="#">Accessories</a>
					<a href="#">Packing material</a>
				</div>

				<div className="flex flex-col gap-2">
					<p className="text-xl font-medium pb-2">NEWSLETTER</p>
					<span>Get informed about the latest products and offers per email.</span>

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
				<span>Online shop for emobility such as electric scooters, e-scooters, spare parts, tuning & accessories and much more</span>
				<span>* * All prices incl. tax, plus shipping</span>
			</div>
		</div>
	)
}