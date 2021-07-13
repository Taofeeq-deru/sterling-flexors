import { ReactNode } from "react";
import {
	personalized,
	checkCircleBig,
	support,
	industry,
	certifiedBig,
} from "icons";

export type ReasonProps = {
	svg: ReactNode;
	text: string;
};

export const reasons = [
	{ svg: personalized, text: "Personalised Live Fitness Training" },
	{ svg: certifiedBig, text: "Expert & Certified Fitness Trainer" },
	{ svg: industry, text: "Industry Standard Fitness Training" },
	{ svg: checkCircleBig, text: "1:1 Training + Realtime Result" },
	{ svg: support, text: "24/7 Chat Support" },
];
