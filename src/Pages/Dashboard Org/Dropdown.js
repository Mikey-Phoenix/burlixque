import React, { useState } from 'react';
import './Dropdown.css'; // Ensure this CSS is handling the hover state
// import profile from '../../Assets/pfp.png'
import { useNavigate } from 'react-router-dom';


const Dropdown = ({openModal}) => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const handlePay = () => {
    navigate('/register/transport_checkout');
  };
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleProfile = () => {
    navigate('/profile');
  }

  const handleMonitor = () => {
    navigate('/check_myrides')
  }

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about-us');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Scroll to Contact Us section
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact-us');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };
    
  


  return (
    <div className="dropdown" onMouseLeave={() => setIsOpen(false)}>
      <div className='dropdownGroo'>
        <button className="dropdown-button" onMouseEnter={toggleDropdown} onClick={toggleDropdown}
        >
          Menu
        </button>
      </div>
      {isOpen && (
        <div className="dropdown-content">
          <button className="dropdown-item" onClick={handleProfile}>Profile</button>
          <button className="dropdown-item" onClick={openModal}>Create a Ride</button>
          <button className="dropdown-item" onClick={handleMonitor}>Monitor your Ride</button>
          <button className="dropdown-item" onClick={scrollToAbout}>About Us</button>
          <button className="dropdown-item" onClick={scrollToContact}>Contact Us</button>
          <button onClick={handlePay} className="dropdown-item">Pay Now</button>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
