import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";

import "./styles/works.css";

import facebookIcon from "./../../assets/facebook.png";
import twitterIcon from "./../../assets/twitter.png";

const Works = () => {
	return (
		<div className="works">
			<Card
				icon={faBriefcase}
				title="Work"
				body={
					<div className="works-body">
						<div className="work">
							<img
								src={facebookIcon}
								alt="facebook"
								className="work-image"
							/>
							<div className="work-title">Facebook</div>
							<div className="work-subtitle">
								Full Stack Web Developer
							</div>
							<div className="work-duration">2019 - Present</div>
						</div>

						<div className="work">
							<img
								src={twitterIcon}
								alt="twitter"
								className="work-image"
							/>
							<div className="work-title">Twitter</div>
							<div className="work-subtitle">
							Full Stack Web Developer
							</div>
							<div className="work-duration">2012 - Present</div>
						</div>
					</div>
				}
			/>
		</div>
	);
};

export default Works;
