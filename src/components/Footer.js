import  './styles.css';
import {FaMailBulk , FaGithub , FaLinkedin} from 'react-icons/fa';
const Footer = () => {
  return (
      <section className="footer" id="Contact">
          <p className="footer__title">Haris</p>
            <div className="footer__social">
                <a href="mailto:mohammadharisahmed.18@gmail.com" className="footer__icon" target='_blank' rel="noopener noreferrer"><FaMailBulk /></a>
                <a href="https://github.com/SyedMuhammadHaris" className="footer__icon" target='_blank' rel="noopener noreferrer"><FaGithub /></a>
                <a href="https://www.linkedin.com/in/haris-ahmed-b84148208" className="footer__icon" target='_blank' rel="noopener noreferrer"><FaLinkedin /></a>
            </div>
            <p>&#169; 2022 copyright all right reserved</p>
      </section>
    )
}

export default Footer;