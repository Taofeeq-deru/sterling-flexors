import React, { useState, FC } from "react";
import { loader } from "icons";

type Props = {
	url: string;
	title: string;
	radius?: string;
};

export const YoutubeVideo: FC<Props> = ({ url, title, radius }) => {
	const [loading, setLoading] = useState(true);

	return (
		<div className="youtube-cont h-full w-full">
			{loading ? (
				<div className="h-full w-full flex items-center justify-center">
					{loader}
				</div>
			) : null}
			<iframe
				src={`https://www.youtube.com/embed/${url}?rel=0`}
				frameBorder="0"
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
				allowFullScreen
				title={title}
				onLoad={() => setLoading(false)}
				loading="lazy"
				width="100%"
				height="100%"
				style={{ borderRadius: radius || "10px" }}
			/>
		</div>
	);
};
