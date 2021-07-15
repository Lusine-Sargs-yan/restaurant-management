import React from "react";
import slide from "../../assets/video/testvideo8.mp4";
import "./Header.css";

export const Header = () => {
	return (
		<div className="restaurant-video">
			<video
				autoPlay
				loop
				muted
				style={{
					position: "absolute",
					width: "100%",
					height: "355px",
					objectFit: "cover",
				}}
			>
				<source key={slide} src={slide} type="video/mp4" />
			</video>
		</div>
	);
};
