import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp, faInstagram, faFacebookF } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <figure className="footer-logo">
          <img
            src="../src/assets/newLogo-t.png"
            alt="7Express Sdn Bhd Logo"
            width="150"
            height="auto"
          />
        </figure>

        <ul className="footer-nav">
          <li><a href="#">About</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="#">Why Us?</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
       <div className="footer-address">
  <h3>ADDRESS</h3>
  <p>
    G-05, Flexis@Onesouth, Pardana Section 62, <br />
    Jln OS, Taman Serdang Raya, <br />
    43300 Seri Kembangan, Selangor
  </p>
  <a
    href="https://www.google.com/maps/place/SEVEN+EXPRESS+SERVICE+SDN+BHD/@3.043098,101.7060193,19.25z/data=!4m6!3m5!1s0x31cc4b7c3b8d5785:0x85c2c761d2c5cde0!8m2!3d3.0428008!4d101.7059661!16s%2Fg%2F11j1f8xj14?entry=ttu&g_ep=EgoyMDI1MDUyMS4wIKXMDSoJLDEwMjExNDU1SAFQAw%3D%3D"
    target="_blank"
    rel="noopener noreferrer"
    className="map-button"
  >
    View on Map
  </a>
</div>
 <ul className="social-media">
   <li>
      <a href="https://wa.me/601111110348" target="_blank" rel="noopener noreferrer">
       <FontAwesomeIcon icon={faWhatsapp} />
            </a>
    </li>
   <li>
     <a href="https://www.instagram.com/7express_Service/" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
          </li>
          <li>
            <a href="https://www.facebook.com/7expressservices" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faFacebookF} />
            </a>
          </li>
        </ul>
      </div>
      <div className="footer-bottom">
        <p>
          &copy; {new Date().getFullYear()} <span className="highlight">7Express</span> Services Sdn Bhd. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
