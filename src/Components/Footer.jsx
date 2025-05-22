import { Link } from 'react-router';
import logo from '../assets/logo.png'
import SocialBTN from '../Utilities/SocialBTN';


const Footer = () => {
  return (
    <footer className="px-4 divide-y text-gray-100">
	<div className="w-11/12 flex flex-col justify-between py-10 mx-auto space-y-8 lg:flex-row lg:space-y-0">
		<div className="lg:w-1/3">
			<Link to="/" rel="noopener noreferrer" className="flex justify-center space-x-3 lg:justify-start">
				<div className="flex items-center justify-center w-12 h-12">

        <img src={logo} alt="" />

				</div>
				<h1 className="self-center text-3xl md:text-3xl italic">Green Verse</h1>
			</Link>
		</div>
		<div className="grid grid-cols-2 text-sm gap-x-3 gap-y-8 lg:w-2/3 sm:grid-cols-4 text-center md:text-left">
			<div className="space-y-3">
				<h3 className="tracking-wide uppercase text-gray-50">Contract Info</h3>
				<ul className="space-y-1">
					<li>
						<a rel="noopener noreferrer" href="#">Features</a>
					</li>
					<li>
						<a rel="noopener noreferrer" href="#">Integrations</a>
					</li>
					<li>
						<a rel="noopener noreferrer" href="#">Pricing</a>
					</li>
					<li>
						<a rel="noopener noreferrer" href="#">FAQ</a>
					</li>
				</ul>
			</div>
			<div className="space-y-3">
				<h3 className="tracking-wide uppercase text-gray-50">Terms</h3>
				<ul className="space-y-1">
					<li>
						<a rel="noopener noreferrer" href="#">Privacy</a>
					</li>
					<li>
						<a rel="noopener noreferrer" href="#">Terms of Service</a>
					</li>
				</ul>
			</div>
			<div className="space-y-3">
				<h3 className="uppercase text-gray-50">Developers</h3>
				<ul className="space-y-1">
					<li>
						<a rel="noopener noreferrer" href="#">Public API</a>
					</li>
					<li>
						<a rel="noopener noreferrer" href="#">Documentation</a>
					</li>
					<li>
						<a rel="noopener noreferrer" href="#">Guides</a>
					</li>
				</ul>
			</div>
			<div className="space-y-3">
				<div className="uppercase text-gray-50">Social media</div>
				<div className='grid '>
          <SocialBTN />
				</div>
			</div>
		</div>
	</div>
	<div className="py-6 text-md text-center text-white">© 1968 Green Verse All rights reserved.</div>
</footer>
  );
};

export default Footer;