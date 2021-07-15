import { useState } from "react";
import { STORY_DATA } from "../../data/data";
import "./StoryStyle.css";

export default function Story() {
	const [showLess, setShowLess] = useState(true);
	let maxLength = 220;
	const title = "Our story";

	if (STORY_DATA[0].text.length <= maxLength) {
		return <p className="text">{STORY_DATA[0].text} </p>;
	}

	const handleOnClick = (event) => {
		event.preventDefault();
		setShowLess(!showLess);
	};

	return (
		<>
			{STORY_DATA.map(({ image, image_main, text }, index) => {
				return (
					<div className="container" key={index}>
						<div className="text">
							<h3 className="title">{`${title.toUpperCase()}`}</h3>
							<p>
								{showLess ? `${text.substring(0, maxLength)}...` : text}
								<button  onClick={(event) => handleOnClick(event)} className="btn-more-less">
									{showLess ? "more" : "less"}
								</button>
							</p>
						</div>
						<div className="image-card">
							<img src={image_main} alt="MainImage" className="main-photo" />
						</div>
						<div className="image-card">
							<img src={image} alt="Story" className="photo-second" />
						</div>
					</div>
				);
			})}
		</>
	);
}
