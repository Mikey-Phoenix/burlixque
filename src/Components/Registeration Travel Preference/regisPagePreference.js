import React from 'react';
// import './regisPage.css';
// import Sidebar from '../SideBar for Registeration/registeration';
// import SidebarOrg from '../SideBar/SideBar';
import SidebarPass from '../SideBar Passenger/SideBarPassenger';
import classes from './regisPagePreference.module.css'
import { useNavigate } from 'react-router-dom';

function RegisPagePreference() {

  const navigate = useNavigate();
  const handleNext = () => {
    navigate('/register/passenger_checkout');
  } 
  return (
    <div className={classes.container}>
      <SidebarPass />
      <div className={classes.contentSpace}>
        <div className={classes.newDivCntS}>
        <div className={classes.heading}>
          <h3>Travel Preferences</h3>
          <p>Enter your travel preferences</p>
        </div>


        <div >
          <div className={classes.formContainer}>
            <br />
            <form className={classes.form}>
              
              <div className={classes.formGroup}>
                <label htmlFor="lastName">Destinations</label>
                <select
                  className={classes.inputs}
                >
                  <option>Lagos</option>
                  <option>Abuja</option>
                  <option>Kaduna</option>
                  <option>Portharcourt</option>
                  <option>Imo</option>
                  <option>Delta</option>
                  <option>Kogi</option>
                </select>
              </div>
              <div className={classes.formGroup}>
                <label htmlFor="Name">Stops</label>
                <select
                  className={classes.inputs}
                >
                  <option>Berger</option>
                  <option>Ojota</option>
                  <option>Maryland</option>
                  <option>Iyana Ipaja</option>
                </select>
              </div>
              
              <div className={classes.formGroup}>
                <label htmlFor="Name">Slot Subsriction</label>
                <select
                  className={classes.inputs}
                >
                  <option>Monthly: 1000 Naira</option>
                  <option>Weekly: 500 Naira</option>
                  <option>Daily: 250 Naira</option>
                  <option>Custom</option>
                </select>
              </div>
              
            </form>
          </div>
          <br />
        </div>

        <div className={classes.newDiv}>
          <button
            className={`btn btn-success ${classes.btn}`}
            style={{ textAlign: "center", border: 0 }}
            onClick={handleNext}
          >
            Next
          </button>
        </div>
        </div>
      </div>
    </div>
  );
}
export default RegisPagePreference;
