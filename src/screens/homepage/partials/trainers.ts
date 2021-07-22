import john from "images/trainers/john.png";
import bamidele from "images/trainers/bamidele.png";
import gideon from "images/trainers/gideon.png";
import tosin from "images/trainers/tosin.png";
import egumena from "images/trainers/egumena.png";
import igho from "images/trainers/igho.png";

export type TrainerProp = {
	name: string;
	img: string;
	title: string;
	star: string;
	stretch: string;
};

export const trainers = [
	{
		name: "john oginni",
		img: john,
		title: "senior fitness trainer",
		star: "4.6",
		stretch: "12",
	},
	{
		name: "tosin aderinto",
		img: tosin,
		title: "weight loss",
		star: "5.0",
		stretch: "24",
	},
	{
		name: "bamidele akeem",
		img: bamidele,
		title: "cardio, weight loss",
		star: "4.5",
		stretch: "10",
	},
	{
		name: "gideon akintonde",
		img: gideon,
		title: "aerobic, weight, rehabilitation",
		star: "5.0",
		stretch: "24",
	},
	{
		name: "egumena faith",
		img: egumena,
		title: "tummy workout, cardio programs for stamina and weight loss",
		star: "4.7",
		stretch: "09",
	},
	{
		name: "igho hope",
		img: igho,
		title:
			"high intensity interval training (HIIT), abs and strength (build up) programs",
		star: "4.5",
		stretch: "15",
	},
];
