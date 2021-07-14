import { NavLink } from "react-router-dom";
import { phoneNumber, email, smLinks } from "utilities/constants";

export const Footer = () => {
	return (
		<footer>
			<div className="footer">
				<div className="w-full h-full flex flex-col sm:flex-row justify-between sm:items-start">
					<div className="sm:mr-auto mb-8 sm:mb-0">
						<img
							src="images/logo.png"
							alt="sterling flexors"
							className="mb-3"
						/>
						<div className="flex flex-col">
							<p className="sub-title-lg mb-3 w-80">
								Welcome to your personal virtual fitness centre. Enjoy unlimited
								and global standard Fitness & Exercise on demand.
							</p>
							<a href={`tel:${phoneNumber?.link}`} className="contacts mb-2">
								{phoneNumber?.text}
							</a>
							<a href={`mailto:${email}`} className="contacts mb-3">
								{email}
							</a>
							<div className="sm-icons flex">
								<a
									href={smLinks?.facebook}
									target="_blank"
									rel="noopener noreferrer"
									className="text-black no-underline"
								>
									<i className="bg-white p-1 rounded mr-3 fab fa-facebook-f"></i>
								</a>
								<a
									href={smLinks?.twitter}
									target="_blank"
									rel="noopener noreferrer"
									className="text-black no-underline"
								>
									<i className="bg-white p-1 rounded mr-3 fab fa-twitter"></i>
								</a>
								<a
									href={smLinks?.instagram}
									target="_blank"
									rel="noopener noreferrer"
									className="text-black no-underline"
								>
									<i className="bg-white p-1 rounded mr-3 fab fa-instagram"></i>
								</a>
							</div>
						</div>
					</div>
					<div className="flex flex-row flex-nowrap">
						<div className="flex flex-col my-2 mr-1 sm:my-0 sm:mr-5">
							<h1 className="sub-title-xl uppercase mb-3">products</h1>
							<div className="flex flex-col">
								<NavLink to="/" className="mb-2 sub-title-lg">
									Features
								</NavLink>
								<NavLink to="/" className="mb-2 sub-title-lg">
									Explore Fitness Programs
								</NavLink>
								<NavLink to="/" className="mb-2 sub-title-lg">
									Fitness Trainers
								</NavLink>
								<NavLink to="/" className="mb-2 sub-title-lg">
									Pricing
								</NavLink>
								<NavLink to="/" className="mb-2 sub-title-lg">
									Free Consultation
								</NavLink>
								<NavLink to="/" className="mb-2 sub-title-lg">
									Chat Support
								</NavLink>
							</div>
						</div>
						<div className="flex flex-col my-2 sm:my-0">
							<h1 className="sub-title-xl uppercase mb-3">about</h1>
							<div className="flex flex-col">
								<NavLink to="/" className="mb-2 sub-title-lg">
									Testimonials
								</NavLink>
								<NavLink to="/" className="mb-2 sub-title-lg">
									About us
								</NavLink>
								<NavLink to="/" className="mb-2 sub-title-lg">
									Blog
								</NavLink>
								<NavLink to="/" className="mb-2 sub-title-lg">
									Become a Trainer
								</NavLink>
								<NavLink to="/" className="mb-2 sub-title-lg">
									Login
								</NavLink>
							</div>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
};
