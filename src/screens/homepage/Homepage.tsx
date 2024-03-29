import { FC } from "react";
import Slider from "react-slick";
import { Button, YoutubeVideo } from "components";
import {
	certified,
	star,
	stretch,
	rightArrowCircle,
	people,
	rightArrow,
} from "icons";
import {
	trainers,
	TrainerProp,
	fitness,
	FitnessProps,
	reasons,
	ReasonProps,
	clients,
	ClientProps,
	vibes,
	VibeProps,
	headers,
	HeadersProps,
} from "./partials";
import session from "images/session-bg.png";
import { form, youtube } from "utilities/constants";

const Homepage: FC = () => {
	const settings = {
		dots: false,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		pauseOnHover: true,
		autoplay: true,
	};

	return (
		<div className="homepage">
			<Slider {...settings}>
				{headers?.map((item: HeadersProps, i: number) => (
					<div key={i}>
						<header style={{ backgroundImage: `url(${item?.img})` }}>
							<div className="header-text-cont w-full h-full flex flex-col justify-center items-center">
								<h1 className="text-center">{item?.heading}</h1>
								<p className="text-center mt-4">{item?.body}</p>
								<p className="text-center mb-4">{item?.extraText}</p>
								<Button
									text={item?.btnText}
									kind="link"
									btnType="primary"
									to={item?.btnLink}
									target="_form"
									className="my-3 mx-auto"
								/>
							</div>
						</header>
					</div>
				))}
			</Slider>
			<section className="trainers-section">
				<h1 className="title text-center mb-3">Meet our Trainers</h1>
				<p className="sub-title-lg text-center mb-12">
					Enjoy a 1-on-1 live fitness training with an expert fitness trainer
					right on your screen. You only get trained per your needs, easy to get
					started and affordable.
				</p>
				<div className="trainers flex overflow-x-scroll w-full scrollbar py-3">
					{trainers?.map((trainer: TrainerProp, i: number) => (
						<div
							className="trainer w-64 h-80 rounded-md mr-4 flex-shrink-0"
							style={{
								backgroundImage: `url(${trainer?.img})`,
							}}
							key={i}
						>
							<div className="trainer-bg w-full h-full rounded-md flex flex-col justify-between p-2">
								<span className="certified flex items-center self-end px-1">
									{certified} Certified trainer
								</span>
								<div className="flex justify-between">
									<div>
										<p className="trainer-name">{trainer?.name}</p>
										<div className="trainer-title w-44 h-auto p-1">
											{trainer?.title}
										</div>
									</div>
									<div>
										<span className="trainer-badge flex flex-nowrap items-center justify-between p-1 h-5 w-12 mt-2 mb-1">
											{star} {trainer?.star}
										</span>
										<span className="trainer-badge flex flex-nowrap items-center justify-between p-1 h-5 w-12">
											{stretch} {trainer?.stretch}
										</span>
									</div>
								</div>
							</div>
						</div>
					))}
				</div>
			</section>
			<section className="vision-section">
				<div className="flex rounded-sm w-full flex-col md:flex-row">
					<div className="vision flex flex-col justify-center pl-12 text-left h-72 lg:h-96 w-full md:w-1/2">
						<p className="sub-title-xl mb-3">
							By 2030, Sterling flexors have a vision to bring fitness training
							to over 10million people around the world via their smartphone
							screen. Due to this, thousands of fitness jobs will be available
							for our youths in Africa and across the globe.
						</p>
						<h1 className="sub-title-sm">
							John Oginni Founder, <br /> Sterling Flexors
						</h1>
					</div>
					<div className="vision-img rounded-sm w-full md:w-1/2">
						<img
							src={session}
							alt="trainer and girl excercising"
							className="w-full h-full"
						/>
					</div>
				</div>
				<a
					href={form}
					target="_form"
					rel="noopener noreferrer"
					className="session-link w-max flex items-center sub-title-lg my-5 ml-8"
				>
					Book a session now {rightArrowCircle}
				</a>
			</section>
			<section className="experience-section">
				<div className="flex flex-col md:flex-row items-center">
					<div className="experience-story w-full md:w-60 lg:w-72 h-80 p-7">
						<h1 className="sub-title-sm mb-2">Experience Story</h1>
						<h2 className="sub-title-xl mb-8">Mrs Folashade O.</h2>
						<p className="sub-title-sm mb-3 italic">
							“Sterling flexor is like having a gym coach tailored to your
							personal need at your own personal time. So, to burn up that
							excess fat and have your muscles toned at your convenient time and
							place, choose them”
						</p>
						<h3 className="sub-title-md">An Enterpreneur</h3>
					</div>
					<div className="youtube-video flex-grow h-64 mt-4 md:h-96 md:mt-0 md:ml-6">
						<YoutubeVideo url={youtube} title="Training Story" />
					</div>
				</div>
			</section>
			<section className="fitness-section">
				<h1 className="title text-center mb-3">
					Join other people around the globe keeping fit with us.
				</h1>
				<p className="sub-title-sm text-center mb-12">
					These are curated list of fitness program we help people with.{" "}
					<a href={form} target="_form" rel="noopener noreferrer">
						Start a session too!
					</a>
				</p>
				<div className="fitness-sessions flex flex-wrap justify-around sm:justify-between">
					{fitness?.map((item: FitnessProps, i: number) => (
						<div className="fitness w-72 h-80 my-4 lg:mr-2 xl:mr-0" key={i}>
							<img src={item?.img} alt={item?.title} className="w-full h-36" />
							<div className="w-full h-44 flex flex-col justify-around px-4">
								<h1 className="sub-title-lg capitalize">{item?.title}</h1>
								<p className="text">{item?.story}</p>
								<span className="flex items-center tiny-text session-no">
									{people}&nbsp; {item?.number}+ people started this session
									this week
								</span>
								<div className="flex justify-between items-center">
									<a
										href={item?.link}
										target="_more"
										rel="noopener noreferrer"
										className="small-text learn-more"
									>
										Learn more
									</a>
									<a
										href={form}
										target="_form"
										rel="noopener noreferrer"
										className="start-session flex flex-nowrap items-center text"
									>
										start a session {rightArrow}
									</a>
								</div>
							</div>
						</div>
					))}
				</div>
			</section>
			<section className="reasons-section">
				<h1 className="title text-center mb-3">
					Why Chose Sterling flexors as your Fitness Partner
				</h1>
				<p className="sub-title-sm text-center mb-12">
					Enjoy unlimited and global standard Fitness & Exercise on demand.
				</p>
				<div className="flex flex-wrap justify-around sm:justify-between">
					{reasons?.map((item: ReasonProps, i: number) => (
						<div
							className="reason h-52 w-52 flex flex-col justify-around px-4 my-2"
							key={i}
						>
							{item?.svg}
							<p className="sub-title-lg capitalize">{item?.text}</p>
						</div>
					))}
				</div>
				<div className="flex justify-center mt-12">
					<Button
						text="Get Started For Free"
						kind="link"
						btnType="primary"
						to={form}
						target="_form"
					/>
				</div>
			</section>
			<section className="clients-section">
				<h1 className="title text-center mb-3">
					What our clients are saying about us
				</h1>
				<p className="sub-title-sm text-center mb-12">
					We ask people who use Sterling flexors and people who are excited
					about what we do here what sees that makes them consider us to be
					their fitness training partner.
				</p>
				<div className="flex overflow-x-scroll w-full scrollbar py-3 lg:justify-center">
					{clients?.map((client: ClientProps, i: number) => (
						<div
							className="flex client w-64 md:w-96 flex-shrink-0 mr-2 xl:mr-4"
							key={i}
						>
							<img
								src={client?.img}
								alt={client?.name}
								className="w-20 md:w-32"
							/>
							<div className="px-2 py-4 flex flex-col flex-grow">
								<p className="text">{client?.story}</p>
								<div className="mt-auto">
									<h1 className="text capitalize">{client?.name}</h1>
									<p className="text job">{client?.job}</p>
								</div>
							</div>
						</div>
					))}
				</div>
			</section>
			<div className="vibes-big-cont">
				<section className="vibes-section">
					<h1 className="title mb-7">Fitness Vibes</h1>
					<div className="flex overflow-x-scroll w-full scrollbar-white py-3">
						{vibes?.map((vibe: VibeProps, i: number) => (
							<div
								className="vibe flex flex-col justify-between w-60 mr-4 flex-shrink-0 lg:w-80"
								key={i}
							>
								<img
									src={vibe?.img}
									alt={vibe?.title}
									className="vibe-img w-full"
								/>
								<h1 className="sub-title-lg">{vibe?.title}</h1>
								<p className="sub-title-sm">{vibe?.story}</p>
								<div className="flex justify-between items-center">
									<p className="author sub-title-sm capitalize">
										Posted by {vibe?.author}
									</p>
									<a
										href={vibe?.link}
										target="_blank"
										rel="noopener noreferrer"
										className="sub-title-sm continue flex flex-nowrap items-center cursor-pointer"
									>
										Continue reading {rightArrow}
									</a>
								</div>
							</div>
						))}
					</div>
				</section>
			</div>
			<div className="extra-big-cont">
				<section className="extra-section flex flex-col justify-center items-center h-full">
					<h1 className="text-center">
						Join other top executives, home makers and many hat wearers
					</h1>
					<p className="text-center my-4">
						Try Sterling Flexors and enjoy a healthy fit life.
					</p>
					<Button
						text="Get Started for free"
						kind="link"
						btnType="primary"
						to={form}
						target="_form"
						className="mt-9 mx-auto"
					/>
				</section>
			</div>
		</div>
	);
};

export default Homepage;
