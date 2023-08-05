import React from "react";

function article_1() {
	return {
		date: "7 May 2023",
		title: "The Benefits of Cloud Computing",
		description:
			"Cloud computing offers a range of benefits, including cost savings and increased flexibility. Find out why more businesses are turning to the cloud.",
		keywords: [
			"The Benefits of Cloud Computing",
			"Tharindu",
			"Tharindu N",
			"Tharindu Nayanajith",
		],
		style: `
				.article-content {
					display: flex;
					flex-direction: column;
					align-items: center;
				}

				.randImage {
					align-self: center;
					outline: 2px solid rgba(0, 0, 0, 0.1);
					width: 100%;
					height: 300px;
					margin: 20px 0;
					border-radius: 8px;
				}
				`,
		body: (
			<React.Fragment>
				<div className="article-content">
				<div className="paragraph">
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Nemo eum fugit ea neque cumque sunt, ducimus dolorem optio earum? Velit!
					</div>
					<img
						src="https://picsum.photos/200/300"
						alt="random"
						className="randImage"
					/>
					<div className="paragraph">
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Nemo eum fugit ea neque cumque sunt, ducimus dolorem optio earum? Velit!
					</div>
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
		title: "Artificial Intelligence in Healthcare",
		description:
			"AI is transforming the healthcare industry, from improving patient outcomes to streamlining operations. Discover the latest applications of this game-changing technology.",
		style: ``,
		keywords: [
			"Artificial Intelligence in Healthcare",
			"Tharindu ",
			"Tharindu N ",
			"Tharindu Nayanajith ",
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
