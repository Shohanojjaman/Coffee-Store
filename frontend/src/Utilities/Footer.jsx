import { FaFacebook, FaInstagram, FaLinkedin, FaLocationDot, FaPhone, FaTwitter } from 'react-icons/fa6';
import { MdEmail } from 'react-icons/md';
const Footer = () => {
  return (
    <footer className="footer-bg pt-28 pb-12">
      <div className="container grid grid-cols-1 md:grid-cols-2 items-center gap-12 md:gap-36">
        <div className="space-y-8">
          <img src="/assets/logo.png" className="w-16" alt="Coffee Store" />
          <h1 className="text-theme text-5xl drop-shadow-[5px_5px_5px_rgba(51,26,21,0.6)]">Coffee Store</h1>
          <p className="text-xl">
            Always ready to be your friend. Come & Contact with us to share your memorable moments, to share with your
            best companion.
          </p>
          <div className="flex gap-5 text-2xl text-theme">
            <a href="http://facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebook />
            </a>
            <a href="http://twitter.com" target="_blank" rel="noopener noreferrer">
              <FaTwitter />
            </a>
            <a href="http://instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>
            <a href="http://linkedin.com" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </a>
          </div>
          <h4 className="text-theme text-5xl drop-shadow-[5px_5px_5px_rgba(51,26,21,0.6)]">Get in Touch</h4>
          <div className="space-y-4 text-xl">
            <div className="flex items-center gap-4">
              <FaPhone className="text-theme" />
              <a href="tel:+88 01533 333 333">+88 01533 333 333</a>
            </div>
            <div className="flex items-center gap-4">
              <MdEmail className="text-theme" />
              <a href="mailto:info@gmail.com">info@gmail.com</a>
            </div>
            <div className="flex items-center gap-4">
              <FaLocationDot className="text-theme" />
              <p>72, Wall street, King Road, Dhaka</p>
            </div>
          </div>
        </div>
        <div className="space-y-8">
          <h4 className="text-theme text-5xl drop-shadow-[5px_5px_5px_rgba(51,26,21,0.6)]">Connect with Us</h4>
          <form onSubmit={(e) => e.preventDefault()} className="text-[#1B1A1A99] space-y-4 text-base">
            <input
              className="w-full rounded-md py-4 px-3 focus:outline-2 outline-secondary transition-all duration-200 focus:shadow-[0px_0px_15px_1px_#1B1A1A]"
              type="text"
              placeholder="Name"
            />
            <input
              className="w-full rounded-md py-4 px-3 focus:outline-2 outline-secondary transition-all duration-200 focus:shadow-[0px_0px_15px_1px_#1B1A1A]"
              type="text"
              placeholder="Email"
            />
            <textarea
              className="w-full rounded-md py-4 px-3 focus:outline-2 outline-secondary transition-all duration-200 focus:shadow-[0px_0px_15px_1px_#1B1A1A]"
              name="massage"
              id="massage"
              rows="10"
              placeholder="Massage"></textarea>
            <input className="secondary-btn" type="button" value="Sand Massage" />
          </form>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
