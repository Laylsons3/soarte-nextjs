import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import Image from 'next/image';

export default class NextJsCarousel extends Component {
	render() {
		return (
			<div>
			<h2>NextJs Carousel - GeeksforGeeks</h2>
			<Carousel>
				<div>
				<Image src="/images/galeria/img1.jpg" width={400} height={320} alt="Imagem" />
				<p className="legend">Image 1</p>

				</div>
				<div>
				<Image src="/images/galeria/img2.jpg" width={400} height={320} alt="Imagem" />
				<p className="legend">Image 2</p>

				</div>
				<div>
				<Image src="/images/galeria/img3.jpg" width={400} height={320} alt="Imagem" />

					<p className="legend">Image 3</p>

				</div>
				<div>
				<Image src="/images/galeria/img4.jpg" width={400} height={320} alt="Imagem" />

					<p className="legend">Image 4</p>

				</div>
				<div>
				<Image src="/images/galeria/img5.jpg" width={400} height={320} alt="Imagem" />
					<p className="legend">Image 5</p>

				</div>
			</Carousel>
			</div>
		);
	}
};
