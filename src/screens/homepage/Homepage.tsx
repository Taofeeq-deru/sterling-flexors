import { FC } from "react";
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
} from "./partials";
import session from "images/session-bg.png";

const Homepage: FC = () => {
	return (
		<div className="homepage">
			<header className="flex flex-col justify-center items-center">
				<h1 className="text-center">
					Live Fitness/Workout Session Tailored to your fitness needs.
				</h1>
				<p className="text-center my-4">
					Enjoy a 1-on-1 live fitness training with an expert fitness trainer
					right on your screen. You only get trained per your needs, easy to get
					started and affordable.
				</p>
				<Button
					text="Book Fitness Session"
					kind="link"
					btnType="primary"
					to="http://bit.ly/3oLLhZe"
					target="_form"
					className="my-3 mx-auto"
				/>
			</header>
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
										<span className="trainer-title w-40 h-6 p-1">
											{trainer?.title}
										</span>
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
					href="http://bit.ly/3oLLhZe"
					target="_form"
					rel="noopener noreferrer"
					className="session-link w-max flex sub-title-lg my-5 ml-8"
				>
					Book a session now {rightArrowCircle}
				</a>
			</section>
			<section className="experience-section">
				<div className="flex flex-col md:flex-row items-center">
					<div className="experience-story w-full md:w-60 lg:w-72 h-80 p-7">
						<h1 className="sub-title-sm mb-3">Experience Story</h1>
						<h2 className="sub-title-xl mb-12">Mrs Idoko Blessing</h2>
						<p className="sub-title-sm mb-5">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
							eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
							viverra nibh cras pulvinar mattis nunc.
						</p>
						<h3 className="sub-title-md">An Enterpreneur</h3>
					</div>
					<div className="youtube-video flex-grow h-64 mt-4 md:h-96 md:mt-0 md:ml-6">
						<YoutubeVideo
							url="UBMk30rjy0o"
							title="Mrs Idoko Blessing's Story"
						/>
					</div>
				</div>
			</section>
			<section className="fitness-section">
				<h1 className="title text-center mb-3">
					Join other people around the globe keeping fit with us.
				</h1>
				<p className="sub-title-sm text-center mb-12">
					These are curated list of fitness program we help people with.{" "}
					<a
						href="http://bit.ly/3oLLhZe"
						target="_form"
						rel="noopener noreferrer"
					>
						Start a session too!
					</a>
				</p>
				<div className="fitness-sessions flex flex-wrap justify-around sm:justify-between">
					{fitness?.map((item: FitnessProps, i: number) => (
						<div className="fitness w-60 h-80 my-4" key={i}>
							<img src={item?.img} alt="weight loss" className="w-full h-36" />
							<div className="w-full h-44 flex flex-col justify-around px-4">
								<h1 className="sub-title-lg capitalize">{item?.title}</h1>
								<p className="text">{item?.story}</p>
								<span className="flex items-center tiny-text session-no">
									{people}&nbsp; {item?.number}+ people started this session
									this week
								</span>
								<div className="flex justify-between items-center">
									<span className="small-text reviews">
										{item?.reviews} reviews
									</span>
									<a
										href="http://bit.ly/3oLLhZe"
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
				<div className="flex justify-center my-14">
					<Button
						text="Get Started For Free"
						kind="link"
						btnType="primary"
						to="http://bit.ly/3oLLhZe"
						target="_form"
					/>
				</div>
			</section>
		</div>
	);
};

export default Homepage;