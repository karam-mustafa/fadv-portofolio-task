import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";
import work from '../../images/work.png'
import "./styles/works.css";

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
								src={work}
								alt="facebook"
								className="work-image"
							/>
							<div className="work-title">Freelancer</div>
							<div className="work-subtitle">
								Front-End Developer
							</div>
							<div className="work-duration">2022</div>
						</div>

						<div className="work">
							<img
								src={work}
								alt="twitter"
								className="work-image"
							/>
							<div className="work-title">Private Company</div>
							<div className="work-subtitle">
							Front-End Developer
							</div>
							<div className="work-duration">2023</div>
						</div>
					</div>
				}
			/>
		</div>
	);
};

export default Works;
