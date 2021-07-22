import seniors from "images/vibes/seniors.png";
import partner from "images/vibes/partner.png";
import bellyFat from "images/vibes/belly-fat.png";

export type VibeProps = {
	img: string;
	title: string;
	story: string;
	author: string;
	link: string;
};

export const vibes = [
	{
		img: seniors,
		title: "Health & Diet Advice for Grandpa & Grandma!",
		story:
			"Enjoy a 1-on-1 live fitness training with an expert fitness trainer right on your screen. You only get trained per your needs, easy to get started and affordable.",
		author: "Ayo Balogun",
		link: "https://link.medium.com/MkTNwU094hb",
	},
	{
		img: bellyFat,
		title: "Nah Belly Fat you get! You no kill Pesin",
		story:
			"Enjoy a 1-on-1 live fitness training with an expert fitness trainer right on your screen. You only get trained per your needs, easy to get started and affordable.",
		author: "Tosin Aderinto",
		link: "https://link.medium.com/qTZV7PPJ2hb",
	},
	{
		img: partner,
		title: "How to motivate your partner to keep fit before & after marriage",
		story:
			"Enjoy a 1-on-1 live fitness training with an expert fitness trainer right on your screen. You only get trained per your needs, easy to get started and affordable.",
		author: "Beth Okanlawon",
		link: "https://link.medium.com/3Z14WN594hb",
	},
];
