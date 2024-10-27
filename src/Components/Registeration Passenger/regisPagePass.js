import React from 'react';
// import './regisPage.css';
// import Sidebar from '../SideBar for Registeration/registeration';
// import SidebarOrg from '../SideBar/SideBar';
import SidebarPass from '../SideBar Passenger/SideBarPassenger';
import classes from './regisPagePass.module.css'
import { useNavigate } from 'react-router-dom';

function RegisPagePass() {

  const navigate = useNavigate();
  const handleNext = () => {
    navigate('/register/preference');
  } 
  return (
    <div className={classes.container}>
      <SidebarPass />
      <div className={classes.contentSpace}>
        <div className={classes.newDivCnt}>
        <div className={classes.heading}>
          <h3>Personal details</h3>
          <p>Enter your personal details</p>
        </div>


        <div >
          <div className={classes.formContainer}>
            <br />
            <form className={classes.form}>
              <div className={classes.formGroup}>
                <label htmlFor="name">Full Name</label>
                <input
                  type="name"
                  id="name"
                  name="fullName"
                  placeholder='John Doe'
                  required
                  className={classes.inputs}
                />
              </div>
              <div className={classes.formGroup}>
                <label htmlFor="dob">Date of Birth</label>
                <input
                  type="date"
                  name="dob"
                  id="dob"
                  required
                  className={classes.inputs}
                />
              </div>
              <div className={classes.formGroup}>
                <label htmlFor="school">School</label>
                <input
                  type="text"
                  id="school"
                  name="schoolName"
                  placeholder='Olabisi Onabanjo University'
                  required
                  className={classes.inputs}
                />
              </div>
              <div className={classes.formGroup}>
                <label htmlFor="regNum">School Registration Number</label>
                <input
                  type="text"
                  id="regNum"
                  name="RegNum"
                  placeholder='10995898HI'
                  required
                  className={classes.inputs}
                />
              </div>
              <div className={classes.formGroup}>
                <label htmlFor="matric">Matriculation Number</label>
                <input
                  type="text"
                  id="matric"
                  name="matric"
                  placeholder='SCI/22/23/999'
                  required
                  className={classes.inputs}
                />
              </div>
              <div className={classes.formGroup}>
                <label htmlFor="username">Preferred Username</label>
                <input
                  type="text"
                  id="username"
                  name="username"
                  placeholder='John_21'
                  required
                  className={classes.inputs}
                />
              </div>
              <div className={classes.formGroup}>
                <label htmlFor="address">Home Address</label>
                <textarea rows={1}
                  type="address"
                  id="address"
                  name="address"
                  placeholder='Lekki, Phase 1, 2 Onikolo street'
                  required
                  className={classes.inputs}
                />
              </div>
              <div className={classes.formGroup}>
                <label htmlFor="course">Course</label>
                <input 
                  type="text"
                  id="course"
                  name="course"
                  placeholder='Computer Science'
                  required
                  className={classes.inputs}
                />
              </div>
              <div className={classes.formGroup}>
                <label htmlFor="dept">Department</label>
                <input
                  type="text"
                  id="dept"
                  name="dept"
                  placeholder='Computer Science'
                  required
                  className={classes.inputs}
                />
              </div>
              <div className={classes.formGroup}>
                <label htmlFor="phone">Phone Number</label>
                <input 
                  type="phone"
                  id="phone"
                  name="phone"
                  placeholder='08147645851'
                  required
                  className={classes.inputs}
                />
              </div>
              <div className={classes.formGroup}>
                <label htmlFor="socials">Socials</label>
                <textarea
                  id="socials"
                  name="socials"
                  placeholder='Paste link to any of your social media account'
                  className={classes.inputs}
                />
              </div>
            </form>
          </div>
          <br />
        </div>

        <div className={classes.newDiv}>
          <button
            className={`btn btn-success ${classes.btn}`}
            style={{ textAlign: "center", border: 0  }}
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
export default RegisPagePass;
