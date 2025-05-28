import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Contact = () => {
  return (
     <section >   
 <h1 className='wc-title'>Contact</h1>
    <section className="contact">
      <div >
        <FontAwesomeIcon icon={faWhatsapp} className="icon1" />
        <h3>WHATSAPP</h3>
        <p>+601111110348</p>
        <p>+601111113033</p>
      </div>

      <div >
        <FontAwesomeIcon icon={faEnvelope} className="icon1" />
        <h3>EMAIL</h3>
        <p>info@7expres.com</p>
      </div>
    </section>
    </section>
  );
};

export default Contact;
