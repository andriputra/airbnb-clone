import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareFacebook, faSquareXTwitter, faSquareInstagram } from '@fortawesome/free-brands-svg-icons';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
    return (
      <footer className="bg-[#f7f7f7] border-t border-[#DDDDDD] py-10">
        <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-gray-700 px-4">
          <div>
            <h3 className="font-semibold mb-4">Support</h3>
            <ul>
              <li className="mb-2 hover:text-gray-900"><a href="#">Help Center</a></li>
              <li className="mb-2 hover:text-gray-900"><a href="#">AirCover</a></li>
              <li className="mb-2 hover:text-gray-900"><a href="#">Anti-discrimination</a></li>
              <li className="mb-2 hover:text-gray-900"><a href="#">Disability support</a></li>
              <li className="mb-2 hover:text-gray-900"><a href="#">Cancellation options</a></li>
              <li className="mb-2 hover:text-gray-900"><a href="#">Report neighborhood concern</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Hosting</h3>
            <ul>
              <li className="mb-2 hover:text-gray-900"><a href="#">Airbnb your home</a></li>
              <li className="mb-2 hover:text-gray-900"><a href="#">AirCover for Hosts</a></li>
              <li className="mb-2 hover:text-gray-900"><a href="#">Hosting resources</a></li>
              <li className="mb-2 hover:text-gray-900"><a href="#">Community forum</a></li>
              <li className="mb-2 hover:text-gray-900"><a href="#">Hosting responsibly</a></li>
              <li className="mb-2 hover:text-gray-900"><a href="#">Airbnb-friendly apartments</a></li>
              <li className="mb-2 hover:text-gray-900"><a href="#">Join a free Hosting class</a></li>
              <li className="mb-2 hover:text-gray-900"><a href="#">Find a co‑host</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Airbnb</h3>
            <ul>
              <li className="mb-2 hover:text-gray-900"><a href="#">Newsroom</a></li>
              <li className="mb-2 hover:text-gray-900"><a href="#">New features</a></li>
              <li className="mb-2 hover:text-gray-900"><a href="#">Careers</a></li>
              <li className="mb-2 hover:text-gray-900"><a href="#">Investors</a></li>
              <li className="mb-2 hover:text-gray-900"><a href="#">Gift cards</a></li>
              <li className="mb-2 hover:text-gray-900"><a href="#">Airbnb.org emergency stays</a></li>
            </ul>
          </div>
        </div>
  
        {/* Footer Bottom Section */}
        <div className="max-w-screen-xl mx-auto border-t border-[#DDDDDD] mt-8 pt-4 flex flex-col md:flex-row justify-between items-center text-sm text-gray-600">
            <div className="flex items-center space-x-4 mt-4 md:mt-0">
                <span>© 2024 Airbnb, Inc.</span>
                <span><a href="#" className="hover:underline">Terms</a></span>
                <span><a href="#" className="hover:underline">Privacy</a></span>
                <span><a href="#" className="hover:underline">Sitemap</a></span>
            </div>
            <div className="flex items-center space-x-4 text-black">
                <span className='items-center flex gap-2'><FontAwesomeIcon icon={faGlobe} className='text-[15px]'/> English (US)</span>
                <span>Rp IDR</span>
                <span>
                  <ul className='flex gap-2'>
                    <li><a href="#"><FontAwesomeIcon icon={faSquareFacebook} className='text-[20px]'/></a></li>
                    <li><a href="#"><FontAwesomeIcon icon={faSquareXTwitter} className='text-[20px]'/></a></li>
                    <li><a href="#"><FontAwesomeIcon icon={faSquareInstagram} className='text-[20px]'/></a></li>
                  </ul>
                </span>
            </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  