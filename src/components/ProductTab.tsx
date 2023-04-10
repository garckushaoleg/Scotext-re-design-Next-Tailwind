import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import React from "react";
import styles from "../styles/ProductTab.module.css";

export default function ProductTab({ desc, specs, manual, video }) {
	return (
		<Tabs
      defaultActiveKey="beschreibung"
      id="uncontrolled-tab-example"
    >
      <Tab eventKey="beschreibung" title="Beschreibung">
        <div className="mt-4 flex flex-col gap-4">
	        <iframe className={ styles.ResponsiveIframe } src={ video } frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
        	<span dangerouslySetInnerHTML={{ __html: desc }}></span>

        	<div className="flex justify-center flex-col items-center mt-20">
        		<p className="text-6xl mb-2">Reviews</p>
        		<span className="text-center max-w-[650px]">Hier findest du eine Auswahl verschiedener Testberichte unseres H10 E-Scooters, mit einem Klick auf das Logo kommst du zum Video.</span>
        		<div className="flex justify-center mt-14 gap-10 flex-wrap">
        			<div className="flex flex-col items-center gap-4">
        				<a href="https://www.youtube.com/watch?v=C8VuUo4MdyE&ab_channel=ScooterheldenBerlin"><img src="/assets/images/-4bcddb.png" /></a>
        				<span className="text-center max-w-[150px]">"Der Roller wirkt wie auf Schienen, Preis - Leistung TOP! "</span>
        			</div>

        			<div className="flex flex-col items-center gap-4">
        				<a href="https://www.youtube.com/watch?v=3qr59pFG_yM&ab_channel=TechnikTests"><img src="/assets/images/-yy61yv.png" /></a>
        				<span className="text-center max-w-[150px]">"Wer einen letze Meile Scooter mit guter Qualität und Service sucht macht hier nichts falsch"</span>
        			</div>

        			<div className="flex flex-col items-center gap-4">
        				<a href="https://www.youtube.com/watch?v=UPJyQdqR5F4&ab_channel=E-BikeamElm"><img src="/assets/images/ebike-am-elm-exiny3.jpg" /></a>
        				<span className="text-center max-w-[150px]">"Absolut hochwertig verarbeitet, Super Handling"</span>
        			</div>

        			<div className="flex flex-col items-center gap-4">
        				<a href="https://www.youtube.com/watch?v=eFuhUKimeG4&ab_channel=WickaWille"><img src="/assets/images/wickawille.png" /></a>
        				<span className="text-center max-w-[150px]">"Der Roller ist sehr portabel und passt somit auch in jeden gängigen Kofferraum"</span>
        			</div>
        		</div>
        	</div>
        </div>
      </Tab>
      <Tab eventKey="spezifikation" title="Spezifikation">
        
        <div className={ styles.Specs }>
	        <div className={ styles.SpecsWrapper }>
	        	{ specs.map((spec, index) => (
							<React.Fragment key={ index }>
								<span className={ styles.SpecTitle }>{spec.title}</span>
					    	<span className={ styles.SpecValue }>{spec.value}</span>
							</React.Fragment>
	        	))}

			    </div>
		    </div>

      </Tab>
      <Tab eventKey="manual" title="Manual">
        <div className="p-4">
        	<a className="text-2xl text-teal-500 font-semibold" href={ manual }>Scotex H10</a>
        </div>
      </Tab>
    </Tabs>
		)
}