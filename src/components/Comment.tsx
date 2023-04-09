export default function Comment({ name, rating, date, text }) {
	return(
		<div className="flex flex-col mb-4 gap-4 border-b-[16px] border-b-gray-100 py-4">
			<div className="flex flex-col">
				<p className="font-bold">{ name }</p>
				<div className="flex gap-2">
					<div className="flex gap-2">
						{ Array(Number(rating)).fill(0).map((item, index) => (
							<img className="w-[23px] h-[22px]" src="/assets/icons/star.svg" alt="Star" key={ index } />
						))}

						{ Array(5-Number(rating)).fill(0).map((item, index) => (
							<img className="w-[23px] h-[22px]" src="/assets/icons/star-grey.svg" alt="Star" key={ index } />
						))}
					</div>
					<span className="italic">{ date }</span>
				</div>
			</div>

			<div dangerouslySetInnerHTML={{ __html: text }}></div>
		</div>
	)
}