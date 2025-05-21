import { FaInstagram, FaTwitter, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import "./SocialBTN.css";
import { Link } from "react-router";

const SocialBTN = () => {
  return (
    <div className="flex flex-wrap gap-4 w-[100px] md:w-full mx-auto">
      <Link
        to="https://www.instagram.com/greenverse_/"
        target="_blank"
        className="socialContainer containerOne" aria-label="Instagram">
        <FaInstagram className="socialIcon" />
      </Link>

      <Link
        to="https://twitter.com/Greenverse_1"
        target="_blank" className="socialContainer containerTwo" aria-label="Twitter">
        <FaTwitter className="socialIcon" />
      </Link>

      <Link 
        to="https://www.linkedin.com/in/greenverse-1/" 
        target="_blank" className="socialContainer containerThree" aria-label="LinkedIn">
        <FaLinkedinIn className="socialIcon" />
      </Link>

      <Link
      to="https://wa.me/2347060734431"
      target="_blank" 
      className="socialContainer containerFour" aria-label="WhatsApp">
        <FaWhatsapp className="socialIcon" />
      </Link>
    </div>
  );
};

export default SocialBTN;