import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";
import Socials from "../components/about/socials";

import INFO from "../data/user";
import SEO from "../data/seo";

import "./styles/contact.css";

const Contact = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const currentSEO = SEO.find((item) => item.page === "contact");

	return (
		<React.Fragment>
			<Helmet>
				<title>{`Contact | ${INFO.main.title}`}</title>
				<meta name="description" content={currentSEO.description} />
				<meta
					name="keywords"
					content={currentSEO.keywords.join(", ")}
				/>
			</Helmet>

			<div className="page-content">
				<NavBar active="contact" />
				<div className="content-wrapper">
					<div className="contact-logo-container">
						<div className="contact-logo">
							<Logo width={46} />
						</div>
					</div>

					<div className="contact-container">
						<div className="title contact-title">
							How to reach me?
						</div>

						<div className="subtitle contact-subtitle">
							First of all, thank you for your interest in communicating with me, as I am a very sociable person. Of course, you can add me to my accounts listed below, or communicate through either<br></br>
							My phone numbers:<br></br>
							<a href={`tel:${INFO.main.phone}`}>
								{INFO.main.phone}
							</a>	<br></br>
							My Whats APP number:<br></br>
							<a href={`tel:${INFO.main.WA}`}>
								{INFO.main.WA}
							</a>	<br></br>
							E-mail: <br></br>
							<a href={`mailto:${INFO.main.email}`}>
								{INFO.main.email}
							</a><br></br>
							I am sure we will come up with genius ideas and great works
							&nbsp;{" "}

						</div>
					</div>

					<div className="socials-container">
						<div className="contact-socials">
							<Socials />
						</div>
					</div>

					<div className="page-footer">
						<Footer />
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Contact;
