import arewa from "images/clients/arewa.png";
import utomi from "images/clients/utomi.png";

export type ClientProps = {
	img: string;
	name: string;
	job: string;
	story: string;
};

export const clients = [
	{
		name: "miss utomi",
		story:
			"Sterling Flexors is a great platform for body fitness and a healthy shape. My experience with them has been so amazing. Their motivation, dedication and hardwork towards their client is top notch. I strongly recommend them to you all.",
		job: "Software engineer, SalesForce",
		img: utomi,
	},
	{
		name: "miss arewa",
		story:
			"My sessions with Sterling flexors were awesome. The exercises were targeted at the specific areas that I wanted, i.e the thighs, cardio and tummy. The sessions were also personal, with the trainer treating you as an individual and not a 'one size fits all'.",
		job: "Mompreneur & Business Analyst",
		img: arewa,
	},
];
