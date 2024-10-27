import React from 'react';
import styles from './WelcomePageTransport.module.css'; // Importing the CSS Module
// import SidebarPass from '../SideBar Passenger/SideBarPassenger';
import SidebarOrg from '../SideBar/SideBar';
import welcomeImg from '../../Assets/OfficeWelcome.jpg'
import { useNavigate } from 'react-router-dom';

const WelcomePageTransport = () => {

    const navigate = useNavigate();
  const handleNext = () => {
    navigate('/dashboard_org');
  } 
  return (
    <div className={styles.container}>
      <SidebarOrg />
    <div className={styles.containerClassName}>
      <div className={styles.content}>
        <h2 className={styles.h2ClassName}>Welcome to Burlixque</h2>
        <p className={styles.pClassName}>Easier and Faster Transportation</p>
        <div className={styles.imagePlaceholder}>
          {/* Placeholder for the image */}
          <img src={welcomeImg} alt="Placeholder" />
        </div>
        <button onClick={handleNext} className={styles.finishButton}>Finish up</button>
      </div>
      
    </div>
    </div>
  );
}

export default WelcomePageTransport;
