import React from "react";

function article_1() {
	return {
		date: "7 May 2023",
		title: "Difference between declarative and imperative in React.js?",
		description: `Recently I've been studying a lot about the functionality and the ways to use the Facebook JavaScript library React.js. When speaking of its differences to the rest of the JavaScript world often the two programming styles declarative and imperative are mentioned.
			What's the difference between both?`,
		keywords: ["declarative", "imperative ", "Tharindu Nayanajith"],
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
					<div className="paragraph">
						A declarative style, like what react has, allows you to
						control flow and state in your application by saying "It
						should look like this". An imperative style turns that
						around and allows you to control your application by
						saying "This is what you should do". The benefit of
						declarative is that you don't get bogged down in the
						implementation details of representing the state. You're
						delegating the organizational component of keeping your
						application views consistent so you just have to worry
						about state. Imagine you have a butler, who is kind of a
						metaphor for a framework. And you would like to make
						dinner. In an imperative world, you would tell them step
						by step how to make dinner. You have to provide these
						instructions: Go to the kitchen Open fridge Remove
						chicken from fridge ... Bring food to the table In a
						declarative world, you would simply describe what you
						want I want dinner with chicken. If your butler doesn't
						know how to make chicken, then you cannot operate in a
						declarative style. Just like if Backbone doesn't know
						how to mutate itself to do a certain task, you can't
						just tell it to do that task. React is able to be
						declarative because it "knows how to make chicken", for
						example. Compared to Backbone, which only knows how to
						interface with the kitchen. Being able to describe the
						state reduces the surface area for bugs dramatically,
						which is a benefit. On the other hand, you might have
						less flexibility in how things occur because you're
						delegating or abstracting away how you implement the
						state.
					</div>
					<img
						src="https://picsum.photos/200/300"
						alt="random"
						className="randImage"
					/>
				</div>
			</React.Fragment>
		)
	};
}

function article_2() {
	return {
		date: "7 May 2023",
		title: "10 articles every ReactJS developer should read",
		description:
			"React is a very popular framework today, and rightfully so. Once you are comfortable with it, the experience of writing a web application becomes downright enjoyable. The community of React developers is vibrant. The pace of change in the framework is fast (maybe a little too fast at times) but well supported by Facebook and the open source community. Most importantly, it allows you to focus on simple pieces of functionality that can easily be composed and reused throughout your application. 👨‍💻",
		style: ``,
<<<<<<< HEAD
		keywords: ["Articles", "React js"],
=======
		keywords: [
			"Artificial Intelligence in Healthcare",
			"Tharindu ",
			"Tharindu N ",
			"Tharindu Nayanajith ",
		],
>>>>>>> aa5836fda926dd57586e0e14925c3a4d7521ad17
		body: (
			<React.Fragment>
				<p>
					Welcome! If you’re reading this, you have probably been told
					that React is the best library for FrontEnd guys 👍. Or
					maybe you’re a little React curious: you’re coming from
					another front-end framework like EmberJS, VueJS, or
					AngularJS and wondering if there may be a better way 😊.
					React is a very popular framework today, and rightfully so.
					Once you are comfortable with it, the experience of writing
					a web application becomes downright enjoyable. The community
					of React developers is vibrant. The pace of change in the
					framework is fast (maybe a little too fast at times) but
					well supported by Facebook and the open source community.
					Most importantly, it allows you to focus on simple pieces of
					functionality that can easily be composed and reused
					throughout your application. 👨‍💻 I really enjoy writing code
					with React, and I want you to have the best experience
					possible as well. So now I highly recommend these articles
					for you. Hope they will help you 😊.
					https://medium.freecodecamp.org/grabs-front-end-guide-for-large-teams-484d4033cc41
					https://medium.freecodecamp.org/10-points-to-remember-thatll-help-you-master-coding-in-reactjs-library-d0520d8c73d8
					https://medium.freecodecamp.org/mindset-lessons-from-a-year-with-react-1de862421981
					https://github.com/Microsoft/TypeScript-React-Starter
					https://hackernoon.com/6-reasons-why-javascripts-async-await-blows-promises-away-tutorial-c7ec10518dd9
					https://medium.freecodecamp.org/all-the-fundamental-react-js-concepts-jammed-into-this-single-medium-article-c83f9b53eac2
					https://blog.hellojs.org/fetching-api-data-with-react-js-460fe8bbf8f2
					https://medium.com/javascript-training/beginner-s-guide-to-webpack-b1f1a3638460
					https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0
					https://medium.freecodecamp.org/the-5-things-you-need-to-know-to-understand-react-a1dbd5d114a3
					Thanks for reading! 🚀
				</p>
			</React.Fragment>
		)
	};
}

const myArticles = [article_1, article_2];

export default myArticles;
