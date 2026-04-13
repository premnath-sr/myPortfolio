import React, { useState } from "react";
import './Certification.css'

import Menu from "./Menu";

import { motion } from "framer-motion";

const Portfolio = () => {
	const [items] = useState(Menu);
	return (
		<section className="portfolio container section" id="certifications">
			<h2 className="section__title">Certifications</h2>

			<div className="portfolio__container grid">
				{items.map((elem) => {
					const { id, image, title} = elem;

					return (
						<motion.div
							layout
							animate={{ opacity: 1 }}
							initial={{ opacity: 0 }}
							exit={{ opacity: 0 }}
							transition={{ duration: 0.3 }}
							className="portfolio__card"
							key={id}>
							<div className="portfolio__thumbnail">
								<img src={image} alt="" className="portfolio__img" height="267" />
								<div className="portfolio__mask"></div>
							</div>
							<h3 className="portfolio__title">{title}</h3>
							
							
						</motion.div>
					);
				})}
			</div>
		</section>
	);
};

export default Portfolio;