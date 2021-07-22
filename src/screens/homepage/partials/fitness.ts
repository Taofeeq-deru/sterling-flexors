import weight from "images/fitness/weight-loss.png";
import abs from "images/fitness/flat-tummy.png";
import thighs from "images/fitness/tone-thighs.png";

export type FitnessProps = {
	img: string;
	title: string;
	story: string;
	number: number;
	link: string;
};

export const fitness = [
	{
		img: weight,
		title: "weight loss",
		story:
			"Your weight is a balancing act, and calories are part of that equation. Weight loss comes down to burning more calories than you take in.",
		number: 255,
		link: "https://link.medium.com/2wibnxAOXhb",
	},
	{
		img: abs,
		title: "flat tummy (abs)",
		story:
			"Fat is stored and distributed into different areas in the body and one of these areas is the midsection (the tummy).",
		number: 255,
		link: "https://link.medium.com/lQZJjgxOXhb",
	},
	{
		img: thighs,
		title: "tone thighs, arms & butt",
		story:
			"Stop sweating through your workout time by only working one muscle group at a time. ",
		number: 255,
		link: "https://link.medium.com/S0Uz54mOXhb",
	},
];
