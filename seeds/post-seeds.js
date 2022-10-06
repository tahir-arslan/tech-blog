const { Post } = require('../models');

const postdata = [
	{
		title: 'End-User Conversation Partisan',
		body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
		user_id: 1
	},
	{
		title: 'Zealous Wizard of Usability Paragraphs',
		body: 'It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.',
		user_id: 2
	},
	{
		title: 'Senior Wordmonger of Heuristic Style',
		body: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here.'",
		user_id: 3
	},
	{
		title: "Innovative Librettist of Lexical Branding",
		body: "Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
		user_id: 4
	},
	{
		title: 'User Interface Style Balladeer',
		body: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.',
		user_id: 5
	},
	{
		title: 'Fastidious Balladeer of Lingual Voice & Tone',
		body: 'Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.',
		user_id: 6
	},
	{
		title: 'Web Storytelling Overlord',
		body: 'Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC.',
		user_id: 7
	},
	{
		title: 'User-centered Engineer of Online Pixels',
		body: 'This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.',
		user_id: 8
	},
	{
		title: 'Electronic Style Poet',
		body: 'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.',
		user_id: 9
	},
	{
		title: 'Persuasive Visionary of Technology Stories',
		body: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.",
		user_id: 10
	}
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;
