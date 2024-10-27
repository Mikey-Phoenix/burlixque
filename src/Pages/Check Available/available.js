import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './available.module.css';
import popStyles from "./popUp.module.css";
import Dropdown from '../../Components/Dropdown/dropdown';
import { FaImage } from "react-icons/fa6";
import { FaStar, FaRegStar, FaStarHalfAlt, FaSave } from "react-icons/fa";
import { MdCancel, MdEdit } from "react-icons/md";
import logo from '../../Assets/newlogo.svg';
// import { Link } from 'react-router-dom'

const CheckAvailableRides = () => {

  const [isAreaToggle, setIsAreaToggle] = useState(false);
  const [isStateToggle, setIsStateToggle] = useState(false);
  const [isPoppedUp, setIsPoppedUp] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [isNew, setIsNew] = useState(false);
  const [profile, setProfile] = useState(null);
  const [profileInfo, setProfileInfo] = useState({
    imageFile: null,
    matricNumber: "202100001",
    email: "johndoe@example.com",
    phoneNumber: "+234 123 456 7890",
    fullName: "John Doe",
    user: "Student Passenger",
    school: "Olabisi Onabanjo University",
    address: "Lekki, Phase 1",
  });;
  // let phoneNumber = document.getElementById('yourPhone').innerText;

  const poppedUp = (e) => {
    if (e.target.id === 'notNew') {
      setIsNew(true)
    } else {
      setIsNew(false)
    }
    setIsPoppedUp(!isPoppedUp);
  }
  function stateToggle() {
    if (!isStateToggle) {
        setIsStateToggle(true);
    } else {
        setIsStateToggle(false);            
    }
  }
  function areaToggle() {
      if (!isAreaToggle) {
          setIsAreaToggle(true);
      } else {
          setIsAreaToggle(false);            
      }
  }
  function edit() {
    if(!isEditing) {
      // name = document.getElementById('yourName').innerText;
      // uni = document.getElementById('yourUni').innerText;
      // address = document.getElementById('yourAddress').innerText;
      // matricNumber = document.getElementById('yourMN').innerText;
      document.getElementById('editImage').style.display = "flex";
    } else {
      document.getElementById('editImage').style.display = "none";
      // document.getElementById('yourName').innerText = name;
      // document.getElementById('yourUni').innerText = uni;
      // document.getElementById('yourAddress').innerText = address;
      // document.getElementById('yourMN').innerText = matricNumber;
    }
    setIsEditing(!isEditing);
  }
  const handleChange = (e) => {
    // const { name, value } = e.target;
    setProfileInfo((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
      
    }));
    // console.log([name]);
  };
  const handleImageChange = (e) => {
    const file = e.target.files[0]; // Get the selected file
    if (file) {
      // Check if it's a valid image type (jpeg, png, jpg, gif)
      const validImageTypes = ["image/jpeg", "image/png", "image/jpg", "image/gif"];
      if (validImageTypes.includes(file.type)) {
        const reader = new FileReader();
        reader.onloadend = () => {
          setProfile(reader.result); // This is for showing the image preview
        };
        reader.readAsDataURL(file);

        // Store the file itself in profileInfo to send to API
        setProfileInfo((prev) => ({
          ...prev,
          imageFile: file, // Store the file for future API usage
        }));
      } else {
        alert("Please upload a valid image (jpeg, png, jpg, gif)");
      }
    }
  };

  const navigate = useNavigate();

  return (
    <div className={styles.containerers}>
      <header className={styles.header} style={{background: "#000"}}>
            <div className={styles.logoGroup}>
                <img src={logo} alt="" />
                <h1>Burlixque</h1>
            </div>

            <input type='search' placeholder='Search' />

            <div className={styles.container}>
              <div onClick={stateToggle} className={styles.toggle}>State</div>
              {isStateToggle && (
                  <Dropdown />
              )}
              <div onClick={areaToggle} className={styles.toggle}>Area</div>
              {isAreaToggle && (
                  <Dropdown />
              )}
            </div>
        </header>

      <div className={styles.profileContainer}>
        <div className={styles.imageContainer}>
            <img src={profileInfo.imageFile ? URL.createObjectURL(profileInfo.imageFile) : profile}/>
            <div id='editImage' className={styles.profileImgCast}>
              <label htmlFor="imageChanger" onClick={()=>{document.getElementById('imageEdit').click()}} ><FaImage /></label>
              <input
              onChange={handleImageChange}
              type='file'
              id='imageEdit'
              name="imageChanger" />
            </div>
        </div>

          {!isEditing ? (
            <>
              <div className={styles.profileWords}>
                <h1 id='yourName'>{profileInfo.fullName}</h1>
                <p id='yourUni'>{profileInfo.school}</p>
                <p id='yourAddress'>{profileInfo.address}</p>
                <p id='yourMN'>{profileInfo.matricNumber}</p>
                <button onClick={()=>{navigate("/login")}}>Create a ride</button>
              </div>

              <div onClick={edit} className={styles.profileEditIcon}>Edit <MdEdit /></div>
            </>
          ) : (
            <>
              <form>
                <label htmlFor='fullName'>Name</label>
                <input
                onChange={handleChange}
                id='fullName'
                type='text'
                name='fullName'
                placeholder={profileInfo.fullName}
                value={profileInfo.fullName} />
                <label htmlFor='school'>University</label>
                <input
                onChange={handleChange}
                id='school'
                type='text'
                name='school'
                placeholder={profileInfo.school}
                value={profileInfo.school} />
                <label htmlFor='address'>Address</label>
                <input
                onChange={handleChange}
                id='address'
                type='text'
                name='address'
                placeholder={profileInfo.address}
                value={profileInfo.address} />
                <label htmlFor='matricNumber'>Matric Number</label>
                <input
                onChange={handleChange}
                id='matricNumber'
                type='text'
                name='matricNumber'
                placeholder={profileInfo.matricNumber}
                value={profileInfo.matricNumber} />
                <label htmlFor='phoneNumber'>Phone Number</label>
                <input
                onChange={handleChange}
                id='phoneNumber'
                type='telephone'
                name='phoneNumber'
                placeholder={profileInfo.phoneNumber}
                value={profileInfo.phoneNumber} />

                <div>
                  <a href='#'>Change Email</a>
                  <a href='#'>Change Password</a>
                </div>
              </form>

              <div onClick={edit} className={styles.profileSaveIcon} >Save <FaSave /></div>
            </>
            
          )}
        

      </div>

      <div className={styles.heading}>
        <p>Active Rides: <span>1</span></p>
      </div>
      <div className={styles.tableContainer}>
        <table className={styles.ridesTables}>
          <thead>
            <tr>
              <th>Name</th>
              <th>Vehicle</th>
              <th>Price</th>
              <th>Available Seats</th>
              <th>Destination</th>
              <th>From</th>
              <th>Date</th>
              <th>Time</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>John Doe</td>
              <td>Sedan</td>
              <td>₦3000</td>
              <td>3</td>
              <td>Abeokuta</td>
              <td>Ibadan</td>
              <td>3rd, Nov</td>
              <td>10:00 AM</td>
              <td><button id='notNew' onClick={poppedUp} className={styles.bookNow}>Cancel Booking</button></td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* <div className={styles.bottomHeaders}>
        <p>Available Rides: <span>42</span></p>
        <button>View All</button>
        <input type='search' placeholder='Search' />
      </div> */}
      
      <div className={styles.heading} style={{marginTop: "10px"}}>
        <p>New Rides: <span>4</span></p>
      </div>
      <div className={styles.tableContainer}>
        <table className={styles.ridesTables}>
          <thead>
            <tr>
              <th>Name</th>
              <th>Vehicle</th>
              <th>Price</th>
              <th>Available Seats</th>
              <th>Destination</th>
              <th>From</th>
              <th>Date</th>
              <th>Time</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>John Doe</td>
              <td>Sedan</td>
              <td>₦3000</td>
              <td>3</td>
              <td>Abeokuta</td>
              <td>Ibadan</td>
              <td>3rd, Nov</td>
              <td>10:00 AM</td>
              <td><button id='new1' onClick={poppedUp} className={styles.bookNow}>Book Now</button></td>
            </tr>
            <tr>
              <td>James Murray</td>
              <td>Corrolla</td>
              <td>₦5000</td>
              <td>7</td>
              <td>Sango Ota</td>
              <td>Ibadan</td>
              <td>4th, Nov</td>
              <td>11:00 AM</td>
              <td><button id='new2' onClick={poppedUp} className={styles.bookNow}>Book Now</button></td>
            </tr>
            <tr>
              <td>Ali Tyson</td>
              <td>Coaster Bus</td>
              <td>₦2500</td>
              <td>9</td>
              <td>Lagos</td>
              <td>Illorin</td>
              <td>4th, Nov</td>
              <td>2:00 PM</td>
              <td><button id='new3' onClick={poppedUp} className={styles.bookNow}>Book Now</button></td>
            </tr>
            <tr>
              <td>Daniel Jane</td>
              <td>Sienna</td>
              <td>₦5000</td>
              <td>2</td>
              <td>Lagos</td>
              <td>Osogbo</td>
              <td>4th, Nov</td>
              <td>11:00 AM</td>
              <td><button id='new4' onClick={poppedUp} className={styles.bookNow}>Book Now</button></td>
            </tr>
          </tbody>
        </table>
      </div>

      {isPoppedUp && (
            <div className={popStyles.window}>
            <div className={popStyles.container}>
                <div className={popStyles.imageContainer}>
                    <div className={popStyles.vehicleImg}></div>
                    <img />
                    <div className={popStyles.dash}>
                        <h1>Baba Cash</h1>
                        <p className={popStyles.ratings}><FaStar /><FaStar /><FaStar /><FaStarHalfAlt /><FaRegStar /></p>
                        <p>300votes</p>
                    </div>
                </div>
    
                <div className={popStyles.details}>
                    <p>University: <span>UNILAG</span></p>
                    <p>Destination/Stops: <span>Ibadan/Berger/Sagamu/InterChange/Kuto</span></p>
                    <p>Plate Number: <span>IE342FR</span></p>
                    <p>Vehicle Type: <span>Coaster Bus</span></p>
                    <p>Rate: #<span>5000</span></p>
                </div>
    
                <div className={popStyles.moreImgs}>
                    <img src='' alt=''/>
                    <img src='' alt=''/>
                    <img src='' alt=''/>
                </div>
    
                <div className={popStyles.bottomFixed}>
                    <button>Chat</button>
                    {isNew ? (
                      <button style={{backgroundColor: "darkred"}}>Cancel Booking</button>
                    ) : (
                      <button onClick={()=>{navigate("/payments")}} style={{backgroundColor: "#28a745"}}>Book Now</button>
                    )}
                </div>
    
                <div onClick={()=>{setIsPoppedUp(!isPoppedUp)}} className={popStyles.leave}><MdCancel /></div>
            </div>
        </div>
        )}

    </div>
  );
};

export default CheckAvailableRides;
