import React from 'react';
import SidebarOrg from '../SideBar/SideBar';
import classes from './regisPage.module.css';
import { useNavigate } from 'react-router-dom';

function RegisPage() {

  const navigate = useNavigate();
  const handleNext = () => {
    navigate('/register/transport_vehicle');
  } 

  return (
    <div className={classes.container}>
      <SidebarOrg />
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
                <label htmlFor="fullName">Full Name</label>
                <input
                  type="name"
                  id="fullName"
                  name="fullName"
                  placeholder='John Doe'
                  required
                  className={classes.inputs}
                />
              </div>
              <div className={classes.formGroup}>
                <label htmlFor="date">Date of Birth</label>
                <input
                  type="date"
                  name="date"
                  id="date"
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
                  placeholder='08056758243'
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
export default RegisPage;
