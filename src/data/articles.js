import React from "react";

function article_1() {
	return {
		date: "9 May 2023",
		title: "Cybersecurity Threats in the Digital Age: How to Protect Your Business and Personal Information",
		description:
			"This article explores the growing threat of cyber attacks and how individuals and businesses can protect themselves from these threats. It discusses common types of cyber attacks, such as phishing and malware, and provides tips for securing personal and sensitive information online.",
		keywords: [
			"Cybersecurity Threats in the Digital Age",
			"Abdulhadi",
			"Abdulhadi",
			"Abdulhadi"
		],
		style: `
				.article-content {
					display: flex;
					flex-direction: column;
					align-items: center;
				}

				.randImage {
					align-self: center;
					outline: 2px solid red;
				}
				`,
		body: (
			<React.Fragment>
				<div className="article-content">
					<div className="paragraph">Content of article 1</div>
					<img
						src="https://picsum.photos/200/300"
						alt="random"
						className="randImage"
					/>
				</div>
			</React.Fragment>
		),
	};
}

function article_2() {
	return {
		date: "7 May 2023",
		title: "The Future of Artificial Intelligence: How It Will Transform Industries and Society",
		description:
			"This article delves into the world of artificial intelligence (AI) and its potential to revolutionize various industries, from healthcare to finance. It discusses the current state of AI, its limitations, and future developments that could shape the way we live and work.",
		style: ``,
		keywords: [
			"Artificial Intelligence in Healthcare",
			"Abdulhadi",
			"Abdulhadi",
			"Abdulhadi"
		],
		body: (
			<React.Fragment>
				<h1>Content of article 2</h1>
			</React.Fragment>
		),
	};
}

const myArticles = [article_1, article_2];

export default myArticles;
