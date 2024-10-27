// RideArrivedPage.js
import React from 'react';
import styles from './homePage.module.css'; // Import the module CSS
import placeholderImage from '../../Assets/OfficeWelcome.jpg'; // Placeholder for car
import mapPlaceholder from '../../Assets/OfficeWelcome.jpg'; // Placeholder for map
import driverAvatar from '../../Assets/OfficeWelcome.jpg'; // Placeholder for driver avatar

const RideArrivedPage = () => {
  return (
    <div className={styles.pageContainer}>
      {/* Header Section */}
      <div className={styles.header}>
        <a href="/" className={styles.backLink}>&larr; back to Order</a>
        <h1 className={styles.title}>Your Ride Has Arrived</h1>
        <p className={styles.subtitle}>
          Your ride has arrived, and the car is parked in the assigned location. 
          It took 5 minutes and 32 seconds from the moment you placed the order.
        </p>
        <p className={styles.waitingTime}>
          Charged waiting time starts at: <strong>04:59</strong>
        </p>
      </div>

      {/* Car Image Section */}
      <div className={styles.mainContent}>
        <div className={styles.carSection}>
          <img src={placeholderImage} alt="Car" className={styles.carImage} />
          <p className={styles.rideDetails}>
            Your Ride X - 878E36<br/>
            Is waiting for you at this location: <br/>
            <strong>1179 Corpening Drive Southfield</strong>
          </p>
        </div>

        {/* Ride Info and Map Section */}
        <div className={styles.mapAndInfo}>
          <div className={styles.mapSection}>
            <img src={mapPlaceholder} alt="Map" className={styles.mapImage} />
            <div className={styles.destinationDetails}>
              <p className={styles.destination}>Your Destination</p>
              <p className={styles.location}>Montréal-Pierre Elliott Trudeau International Airport</p>
              <p className={styles.route}>Fastest route</p>
              <p className={styles.distance}>7.8 km • 23 minutes</p>
            </div>
          </div>

          {/* Ride Options Section */}
          <div className={styles.rideOptions}>
            <div className={styles.option}>
              <p>Regular • 4</p>
              <p className={styles.price}>$27.55</p>
            </div>
            <div className={styles.option}>
              <p>Van • 6</p>
              <p className={styles.price}>$40.69</p>
            </div>
            <div className={styles.option}>
              <p>Premium • 4</p>
              <p className={styles.price}>$62.87</p>
            </div>
            <div className={styles.selectedOption}>
              <p>Ride X • 2</p>
              <p className={styles.askDriver}>Ask driver</p>
            </div>
          </div>
        </div>
      </div>

      {/* Driver Message Section */}
      <div className={styles.driverMessage}>
        <img src={driverAvatar} alt="Driver" className={styles.driverAvatar} />
        <p className={styles.messageText}>
          <strong>Michael</strong> &bull; 4.9
        </p>
        <p className={styles.message}>“Hey sir, I’m arrived :)”</p>
      </div>
    </div>
  );
};

export default RideArrivedPage;
