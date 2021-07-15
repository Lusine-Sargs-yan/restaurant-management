import React, { useState, useEffect } from "react";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import { STAFF_DATA } from "../../../data/staff-data";
import "./Staff.css";

export default function StaffData() {
	const [people, setPeople] = useState(STAFF_DATA);
	const [activeIndex, setActiveIndex] = useState(0);

	useEffect(() => {
		setPeople(people);
	}, [people]);

	const nextSlide = () => {
		setActiveIndex((prevIndex) => {
			let activeIndex = prevIndex + 1;
			if (activeIndex > people.length - 1) {
				activeIndex = 0;
			}
			return activeIndex;
		});
	};
	const prevSlide = () => {
		setActiveIndex((prevIndex) => {
			let activeIndex = prevIndex - 1;
			if (activeIndex < 0) {
				activeIndex = people.length - 1;
			}
			return activeIndex;
		});
	};

	useEffect(() => {
		let slider = setInterval(() => {
			setActiveIndex((prevIndex) => {
				let activeIndex = prevIndex + 1;
				if (activeIndex > people.length - 1) {
					activeIndex = 0;
				}
				return activeIndex;
			});
		}, 5000);
		return () => {
			clearInterval(slider);
		};
	}, [people.length]);

	return (
		<div className="staffDataContainer">
		<section className="section">
			<div className="title">
				<h2>OUR TEAM </h2>
			</div>
			<div className="section-center">
				{people.map((person, personIndex) => {
					const { id, image, name, title, quote } = person;

					let position = "nextSlide";
					if (personIndex === activeIndex) {
						position = "activeSlide";
					}
					if (
						personIndex === activeIndex - 1 ||
						(activeIndex === 0 && personIndex === people.length - 1)
					) {
						position = "lastSlide";
					}

					return (
						<article className={position} key={id}>
							<img src={image} alt={name} className="person-img" />
							<h4>{name}</h4>
							<p className="staff-title">{title}</p>
							<p className="text">{quote}</p>
						</article>
					);
				})}
				<button className="prev" onClick={prevSlide}>
					<FiChevronLeft />
				</button>
				<button className="next" onClick={nextSlide}>
					<FiChevronRight />
				</button>
			</div>
		</section>
		</div>
	);
}
