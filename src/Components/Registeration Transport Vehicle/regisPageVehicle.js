import React from 'react';
// import './regisPage.css';
// import Sidebar from '../SideBar for Registeration/registeration';
import SidebarOrg from '../SideBar/SideBar';
import classes from './regisPageVehicle.module.css'
import { useNavigate } from 'react-router-dom';

function RegisPageVehicle() {

  const navigate = useNavigate();
  const handleNext = () => {
    navigate('/register/transport_checkout');
  } 
  return (
    <div className={classes.container}>
      <SidebarOrg />
      <div className={classes.contentSpace}>
        <div className={classes.newDivCntSe}>
        <div className={classes.heading}>
          <h3>Vehicle and Destination Details</h3>
          <p>Enter your Vehicle and Destination details</p>
        </div>


        <div >
          <div className={classes.formContainer}>
            <br />
            <form className={classes.form}>
              <div className={classes.formGroup}>
                <label htmlFor="Name">Vehicle Type</label>
                <select
                  className={classes.inputs}
                >
                  <option>Toyota Hiace Bus</option>
                  <option>Coaster Bus</option>
                  <option>Luxirious Bus</option>
                  <option>Mini Bus</option>
                  <option>Jeep</option>
                </select>
              </div>
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
                <label htmlFor="Name">Transportation Rate</label>
                <input
                  type="text"
                  id="name"
                  name="schoolName"
                  placeholder='5000'
                  required
                  className={classes.inputs}
                />
              </div>
              <div className={classes.formGroup}>
                <label htmlFor="Name">Slot Subsriction</label>
                <select
                  className={classes.inputs}
                >
                  <option>Monthly: 2500 Naira</option>
                  <option>Weekly: 1000 Naira</option>
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
export default RegisPageVehicle;
