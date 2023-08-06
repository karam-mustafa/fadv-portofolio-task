import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import Arenalogo from '../../images/arenamall.jpg'
import Nouhlogo from '../../images/nouharch.jpg'

import Card from "../common/card";

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
								src={Arenalogo}
								alt="facebook"
								className="work-image"
							/>
							<div className="work-title">Arena Mall</div>
							<div className="work-subtitle">
								IT Administrator
							</div>
							<div className="work-duration">2019 - 2021</div>
						</div>

						<div className="work">
							<img
								src={Nouhlogo}
								alt="twitter"
								className="work-image"
							/>
							<div className="work-title">Nouh Architect's</div>
							<div className="work-subtitle">
								IT Administrator & Web Devoloper
							</div>
							<div className="work-duration">2021 - Present</div>
						</div>
					</div>
				}
			/>
		</div>
	);
};

export default Works;
