import '../styles/Footer.css';
import logo from '../assets/logo.svg';

const Footer = () => {
    return (
<footer className='Footer'>
    <div className='conta'>
  <div className='logo'>
    <img src={logo} alt="Blogr Logo" />
  </div>
  
  <div className='footer-section'>
    <h4>Product</h4>
    <ul>
      <li><a href="#overview">Overview</a></li>
      <li><a href="#pricing">Pricing</a></li>
      <li><a href="#marketplace">Marketplace</a></li>
      <li><a href="#features">Features</a></li>
      <li><a href="#integrations">Integrations</a></li>
    </ul>
  </div>
  
  <div className='footer-section'>
    <h4>Company</h4>
    <ul>
      <li><a href="#about">About</a></li>
      <li><a href="#team">Team</a></li>
      <li><a href="#blog">Blog</a></li>
      <li><a href="#careers">Careers</a></li>
    </ul>
  </div>
  
  <div className='footer-section'>
    <h4>Connect</h4>
    <ul>
      <li><a href="#contact">Contact</a></li>
      <li><a href="#newsletter">Newsletter</a></li>
      <li><a href="#linkedin">LinkedIn</a></li>
    </ul>
  </div>
  </div>
</footer>

    );
}

export default Footer;