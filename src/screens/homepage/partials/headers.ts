import { ReactNode } from "react";
import banner1 from "images/banners/banner-1.png";
import banner2 from "images/banners/banner-2.png";
import { form } from "utilities/constants";

export type HeadersProps = {
	img: string;
	heading: string;
	body: ReactNode;
	btnLink: string;
	btnText: string;
	extraText?: string;
};

export const headers = [
	{
		img: banner1,
		heading: "Live Fitness/Workout Session Tailored to your fitness needs.",
		body: "Enjoy a 1-on-1 live fitness training with an expert fitness trainer right on your screen. You only get trained per your needs, easy to get started and affordable.",
		btnLink: form,
		btnText: "Book Fitness Session",
	},
	{
		img: banner2,
		heading: "Fitness Summer Challenge Starting 14th to 25th of July ",
		body: "6-weeks Challenge Targeted at Weight Loss, Tummy blast, Shedding Arms & Thigh Fat",
		extraText: "Subscription fee ₦5000",
		btnLink: "https://forms.gle/d6CEVqTARgmP16Zy5",
		btnText: "Register for Event",
	},
];
