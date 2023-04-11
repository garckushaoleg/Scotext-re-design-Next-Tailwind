import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import ProductTab from "../components/ProductTab.tsx";
import Comment from "../components/Comment.tsx";
import Card from 'react-bootstrap/Card';
import Accordion from 'react-bootstrap/Accordion';
import ListGroup from 'react-bootstrap/ListGroup';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { useState } from 'react';
import styles from "../styles/Product.module.css";

interface ProductProps {
	product: any;
}

export default function Product({ product }: ProductProps) {

	const [ isShowedFrame, setIsShowedFrame ] = useState(false);

	const onSelect = (eventKey) => setIsShowedFrame(eventKey === '3DModell');
	
	return (
		<div className="flex flex-col justify-center items-center mt-10 mb-20 px-4">

			<div className="max-w-[1340px] w-full border-b-slate-300 border-b-[1px] mb-14">
				<Breadcrumb>
		      <Breadcrumb.Item href="#">Sie sind hier</Breadcrumb.Item>
		      <Breadcrumb.Item href="/scotex-h10">
		        Scooters
		      </Breadcrumb.Item>
		    </Breadcrumb>
			</div>

			<div className={ styles.ProductTopStripe }>
				<div className={ styles.ProductTopStripeLeft }>
					<img className="w-6" src="/assets/icons/burger-overview.svg" />
					<span className="font-bold">Zur Übersicht</span>
				</div>
				<div className={ styles.ProductOrder }>
					<div>Artikel 1 von 3</div>
					<div className="flex gap-2 cursor-pointer">
						<span className="font-bold">nächster Artikel</span>
						<img className="w-6 h-6" src="/assets/icons/arrow-right.svg" />
					</div>
				</div>
			</div>

			<div className={ styles.ProductCnt }>

				<div className="flex flex-col gap-4">
					<h1 className="text-4xl">{ product.title }</h1>
					<div>
						<p>Artikelnummer: <span className="font-medium">{ product.sku }</span></p>
					</div>

					<div className={ styles.ProductRating }>
						<div className="flex gap-2">
							{ Array(Number(product.rating)).fill(0).map((item, index) => (
								<img className="w-[23px] h-[22px]" src="/assets/icons/star.svg" alt="Star" key={ index } />
							))}

							{ Array(5-Number(product.rating)).fill(0).map((item, index) => (
								<img className="w-[23px] h-[22px]" src="/assets/icons/star-grey.svg" alt="Star" key={ index } />
							))}
						</div>
						<span>{ `${ product.comments.length } Kundenmeinungen` }</span>
					</div>

					<div id="product-cnt-view" className={ styles.ProductCntView }>
						<Tabs
				      defaultActiveKey="produktbilder"
				      id="uncontrolled-tab-example"
				      className="mb-3"
				      onSelect={ onSelect }
				    >
				      <Tab eventKey="produktbilder" title="Produktbilder">
				        <div className="flex flex-col my-20">
									<Carousel showIndicators={ false } >
										{ product.pics.map((pic, index) => (
											<div key={ index } >
						            <img src={ pic } />
						          </div>
										))}
					        </Carousel>
								</div>
				      </Tab>
				      <Tab eventKey="3DModell" title="3D-Modell">
				        { isShowedFrame && (<iframe className={ styles.IFrame } src="https://www.scotex.de//out/pictures/360/ESCH10.1/ESCH10.1_Scotex_H10.html"></iframe>) }
				      </Tab>
				    </Tabs>
			    </div>

				</div>

				<div className="flex flex-col gap-6">
					<div className="flex gap-2 items-center">
						<span className="bg-[#3c763d] w-[20px] h-[20px] rounded-full"></span>
						<span>Sofort lieferbar</span>
					</div>

					<Accordion>
			      <Accordion.Item eventKey="0">
			        <Accordion.Header>Menü</Accordion.Header>
			        <Accordion.Body>
			          <ListGroup defaultActiveKey="#link1">
						      <ListGroup.Item action href="#">
						        Vergleichen
						      </ListGroup.Item>
						      <ListGroup.Item action href="##">
						        Empfehlen
						      </ListGroup.Item>
						      <ListGroup.Item action href="###">
						        In die Lieblingsliste
						      </ListGroup.Item>
						      <ListGroup.Item action href="####">
						        Auf den Merkzettel
						      </ListGroup.Item>
						      <ListGroup.Item action href="#####">
						        Auf den Wunschzettel
						      </ListGroup.Item>
						      <ListGroup.Item action href="######">
						        Fragen zum Artikel
						      </ListGroup.Item>
						    </ListGroup>
			        </Accordion.Body>
			      </Accordion.Item>
			    </Accordion>

					<div className="text-xl mt-6">{ product.shortDesc }</div>

					<div className={ styles.PricesCnt }>	
						<span className={ styles.ProductPrice }>{ product.priceWithDiscount + ' ' + product.currency }</span>
						<span className="text-4xl line-through decoration-red-600 font-medium">{ product.price + ' ' + product.currency }</span>
					</div>

					<div className="flex flex-col">
						<span className="font-bold">Rahmenfarbe:</span>
						<Form.Select aria-label="Default select example">
				      <option>Rahmenfarbe Variante wählen</option>
				      { product.frameColor.map((option, index) => (
				      		<option value={ option } key={ index }>{ option }</option>
				      ))}
				    </Form.Select>
			    </div>

			    <div className="flex flex-col">
						<span className="font-bold">Scotex Care Paket:</span>
						<Form.Select aria-label="Default select example">
				      <option value="Standard +0,00 €">Standard +0,00 €</option>
				      <option value="Plus +99,00 €">Plus +99,00 €</option>
				    </Form.Select>
			    </div>

			    <div className="flex gap-4">
			    	<Form.Control className="w-[50px] text-center" type="text" placeholder="1" />
			    	<Button variant="success" type="button" className="bg-[#198754] w-full h-[50px]">In den Warenkorb</Button>
			    </div>

					<div className={ styles.PayPalCnt }>
				    <div className="max-w-xs cursor-pointer">
			    		<img src="/assets/icons/paypal-button.png" alt="PayPal Button" />
			    	</div>
			    	<Form.Check 
	            type="checkbox"
	            id="default-checkbox"
	            label="Warenkorb in PayPal anzeigen"
	          />
		    	</div>

		    	<div className="flex flex-col gap-2 max-w-[300px] w-full cursor-pointer">
		    		<span className="font-bold">Finanzierung:</span>
		    		<img src="/assets/images/Finanzierung.png" />
	    		</div>

	    		<div className="flex flex-col gap-2 mt-16">
	    			<span className="font-bold">Zahlungsarten:</span>
		    		<div className="flex gap-2">
			    		<div className="flex flex-col gap-2">
			    			<img src="/assets/images/Rechnung.png" />
			    			<img src="/assets/images/Kartenzahlung.png" />
			    		</div>

			    		<div className="flex flex-col gap-2">
				    		<img src="/assets/images/Nachnahme.png" />
				    		<img src="/assets/images/Paypal.png" />
			    		</div>

			    		<div className="flex flex-col gap-2">
				    		<img src="/assets/images/Vorauskasse.png" />
				    		<img src="/assets/images/Googleapplepay.png" />
			    		</div>
		    		</div>
	    		</div>

				</div>
			</div>

			<div className="max-w-[1340px] w-full">
				<ProductTab desc={ product.desc } specs={ product.specs } manual={ product.manual } video={ product.video }/>
			</div>

			<div className="max-w-[1340px] w-full mt-20">
				<p className="text-5xl">Artikel bewerten</p>
				<div className="flex items-center gap-2 my-2">
					<img src="/assets/icons/user-icon.svg" className="w-4" />
					<a href="#">Sie müssen angemeldet sein, um eine Bewertung schreiben zu können.</a>
				</div>

				{ product.comments.map(({ name, rating, date, text }, index) => (
					<Comment 
						name={ name } 
						rating={ rating }
						date={ date }
						text={ text }
						key={ index } 
					/>
				))}

			</div>

			<div className="max-w-[1340px] w-full mt-20 flex flex-col items-center gap-6">
				<div className="flex flex-col items-center gap-2">
					<h3 className="text-5xl text-center">Kunden, die diesen Artikel gekauft haben, kauften auch</h3>
					<span className="text-center">Kunden die sich diesen Artikel gekauft haben, kauften auch folgende Artikel.</span>
				</div>
				<div className={ styles.Cards }>
				  <Card className="p-4 border-[#006450]" style={{ maxWidth: '18rem', width: '100%' }}>
			      <Card.Img className="mb-4" variant="top" src="/assets/images/esc_h20.1_scotex_seitenansicht_links.jpg" />
			      <Card.Body>
			        <Card.Link href="#">SCOTEX H20 eKFV schwarz</Card.Link>
			        <Card.Text>
			          Gewicht 24.8 kg
			        </Card.Text>
			        <Card.Text className="mt-4 text-2xl">
			        	849,00 €
			        </Card.Text>
			        <Button variant="secondary" type="button" className="bg-[#6c757d] w-full h-[50px] my-2">In den Warenkorb</Button>
			        <Button variant="success" type="button" className="bg-[#198754] w-full h-[50px]">Mehr Informationen</Button>
			      </Card.Body>
			    </Card>
		    </div>
			</div>


			<div className="max-w-[1340px] w-full mt-20 flex items-center flex-col gap-6">
				<div className="flex flex-col items-center gap-2">
					<h3 className="text-5xl text-center">Ähnliche Produkte</h3>
					<span className="text-center">Schauen Sie sich doch auch unsere ähnlichen Artikel an.</span>
				</div>
				<div className="flex flex-col items-center gap-2">
					<h3 className="text-5xl text-center">Schon gesehen?</h3>
					<span className="text-center">Kunden die sich diesen Artikel angesehen haben, haben sich auch folgende Artikel angesehen.</span>
				</div>
				<div className={ styles.Cards }>
				 	<Card className="p-4 border-[#006450]" style={{ width: '18rem' }}>
			      <Card.Img className="mb-4" variant="top" src="/assets/images/sp1255_scotex_h10_steuergeraet_36v_300w.jpg" />
			      <Card.Body className="flex flex-col justify-end">
			        <Card.Link href="#">Steuergerät 36V 300W</Card.Link>
			        <Card.Text>
			          Gewicht 0.28 kg
			        </Card.Text>
			        <Card.Text className="mt-4 text-2xl">
			        	49,00 €
			        </Card.Text>
			        <Button variant="secondary" type="button" className="bg-[#6c757d] w-full h-[50px] my-2">In den Warenkorb</Button>
			        <Button variant="success" type="button" className="bg-[#198754] w-full h-[50px]">Mehr Informationen</Button>
			      </Card.Body>
			    </Card>

			    <Card className="p-4 border-[#006450]" style={{ width: '18rem' }}>
			      <Card.Img className="mb-4" variant="top" src="/assets/images/sp0143_sxt_light_ventilverlaengerung.jpg" />
			      <Card.Body className="flex flex-col justify-end">
			        <Card.Link href="#">Ventilverlängerung 130 mm</Card.Link>
			        <Card.Text>
			           Gewicht 0.06 kg
			        </Card.Text>
			        <Card.Text className="mt-4 text-2xl">
			        	8,00 €
			        </Card.Text>
			        <Button variant="secondary" type="button" className="bg-[#6c757d] w-full h-[50px] my-2">In den Warenkorb</Button>
			        <Button variant="success" type="button" className="bg-[#198754] w-full h-[50px]">Mehr Informationen</Button>
			      </Card.Body>
			    </Card>

			    <Card className="p-4 border-[#006450]" style={{ width: '18rem' }}>
			      <Card.Img className="mb-4" variant="top" src="/assets/images/sp1335_scotex_h10_pu_vollreifen.jpg" />
			      <Card.Body className="flex flex-col justify-end">
			        <Card.Link href="#">Vollgummireifen 9x2</Card.Link>
			        <Card.Text>
			          Gewicht 1.03 kg
			        </Card.Text>
			        <Card.Text className="mt-4 text-2xl">
			        	32,50 €
			        </Card.Text>
			        <Button variant="secondary" type="button" className="bg-[#6c757d] w-full h-[50px] my-2">In den Warenkorb</Button>
			        <Button variant="success" type="button" className="bg-[#198754] w-full h-[50px]">Mehr Informationen</Button>
			      </Card.Body>
			    </Card>

			    <Card className="p-4 border-[#006450] flex" style={{ width: '18rem' }}>
			      <Card.Img className="mb-4" variant="top" src="/assets/images/sp1319_scotex_h10_lithiumakku_36v_10ah.jpg" />
			      <Card.Body className="flex flex-col justify-end">
			        <Card.Link href="#">Lithiumakku 36V 10Ah</Card.Link>
			        <Card.Text>
			          Gewicht 2.41 kg
			        </Card.Text>
			        <Card.Text className="mt-4 text-2xl">
			        	328,50 €
			        </Card.Text>
			        <Button variant="secondary" type="button" className="bg-[#6c757d] w-full h-[50px] my-2">In den Warenkorb</Button>
			        <Button variant="success" type="button" className="bg-[#198754] w-full h-[50px]">Mehr Informationen</Button>
			      </Card.Body>
			    </Card>
		    </div>
			</div>

		</div>
	)
}