import styles from "../styles/Card.module.css";
import { InView } from 'react-intersection-observer';
import Link from 'next/link';

interface CardProps {
  logo: string;
  desc: string;
  mainPic: string;
  isReverse: boolean;
  isMoreInfo: boolean;
  additionalInfo: any;
}

export default function Card({ logo, desc, mainPic, isReverse, isMoreInfo, additionalInfo }: CardProps) {

	return (
		<InView threshold={ 0.4 } triggerOnce>
			{({ inView, ref, entry }) => (
				<div ref={ref} className={ `${ styles.Card } ${ inView ? styles.Show : '' }` }>
					<div className={ styles.CardTop } style={{ flexDirection: isReverse ? 'row-reverse' : 'row' }}>
						<div className={ styles.CardTopInfo }>
							<div className={ styles.CardLogo }>
								<img src={ logo } alt="Logo" className={ styles.Logo } />
							</div>
							<div className={ styles.CardDesc }>
								{ desc }
							</div>
							<div className="mt-10 px-[15px]">
								<Link href="/" className={ styles.CardButton }>{ isMoreInfo ? 'Mehr Infos' : 'Zum Angebot' }</Link>
							</div>
						</div>
						<div className={ styles.CardImage }>
							<img src={ mainPic } className="rounded-xl" />
						</div>
					</div>

					{ !!additionalInfo.videos.length && ( <div className="relative z-10 flex justify-center w-full">
						{ additionalInfo.videos.map((src, index) => (
							<div className={ styles.FrameContainer } key={ index }>
							  <iframe className={ styles.ResponsiveIframe } src={ src } frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
							</div>
						)) }
					</div> )}

					{ !!additionalInfo.images.length && ( <div className={ styles.AdditionalImages }>
						{ additionalInfo.images.map((src, index) => (<div key={ index }><img key={ index } className="rounded-xl" src={ src } /></div>)) }
					</div> )}
				</div>
			)}
		 </InView>
	)
}