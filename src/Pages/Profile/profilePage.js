import React, { useState } from "react";
import styles from "./ProfilePage.module.css";
import pfp from '../../Assets/pfp.png';
import Modal from 'react-modal'

const ProfilePage = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState(pfp);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedRide, setSelectedRide] = useState(null);
  const [profileInfo, setProfileInfo] = useState({
    imageFile: null,
    matricNumber: "202100001",
    email: "johndoe@example.com",
    phoneNumber: "+234 123 456 7890",
    username: "John_21",
    fullName: "John Doe",
    user: "Student Passenger",
    school: "Olabisi Onabanjo University",
    address: "Lekki, Phase 1",
  });

  const handleEditClick = () => {
    setIsEditing(!isEditing);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfileInfo((prevState) => ({
      ...prevState,
      [name]: value,
    }));
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

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedRide(null);
  };

  const openModal = (ride) => {
    setSelectedRide(ride);
    setIsModalOpen(true);
  };

  const ridesData = [
    {
      from: 'Lagos',
      to: 'Illorin',
      date: '11-08-2024',
      time: '11:00 AM',
      organizerName: 'John Doe',
      organizerPhone: '08012345678',
      vehicleType: 'SUV',
      price: '₦5000',
      pickUpTime: '10:30 AM',
      totalTime: '4 hours',
    },
    {
      from: 'Ibadan',
      to: 'Osogbo',
      date: '24-08-2024',
      time: '01:00 PM',
      organizerName: 'Jane Smith',
      organizerPhone: '08087654321',
      vehicleType: 'Sedan',
      price: '₦4000',
      pickUpTime: '01:30 PM',
      totalTime: '3.5 hours',
    },
  ];


  return (
    <div className={styles.profileContainer}>
      <div className={styles.profileCard}>
        <div className={styles.header}>
          <div className={styles.flexImg}>
            <img
              src={profileInfo.imageFile ? URL.createObjectURL(profileInfo.imageFile) : profile}
              alt="Profile"
              className={styles.profileImage}
            />
            <div className={styles.uploadImg}>
              <p>Change Photo</p>
              <input
                type="file"
                id="fileInput"
                accept="image/jpeg, image/png, image/jpg, image/gif"
                onChange={handleImageChange}
                style={{ display: "none" }}
              /> <button type="button" onClick={() => document.getElementById("fileInput").click()}>
                Upload Image
              </button>
            </div>
          </div>

        </div>

        <div className={styles.buttons}>
          <button onClick={handleEditClick} className={styles.shareButton}>
            {isEditing ? "Save" : "Edit"}
          </button>
          <button className={styles.shareButton}>Share Profile</button>
        </div>

        <div className={styles.associatedPeople}>
          <div className={styles.profileDetails}>
            {isEditing ? (
              <>
                <label htmlFor="fullName" >Full Name</label>
                <input
                  id="fullName"
                  type="text"
                  name="fullName"
                  value={profileInfo.fullName}
                  onChange={handleChange}
                  className={styles.editInput}
                />
                <label htmlFor="user" >User Type</label>
                <select
                  id="user"
                  name="user"
                  value={profileInfo.user}
                  onChange={handleChange}
                  className={styles.editInput}
                >
                  <option value="Transport Organizer">Transport Organizer</option>
                  <option value="Student Passenger">Student Passenger</option>
                </select>
                <label htmlFor="fullName" >Matric Number</label>
                <input
                  type="text"
                  name="matricNumber"
                  value={profileInfo.matricNumber}
                  onChange={handleChange}
                  className={styles.editInput}
                />
                <label htmlFor="fullName" >Email</label>
                <input
                  type="text"
                  name="email"
                  value={profileInfo.email}
                  onChange={handleChange}
                  className={styles.editInput}
                />
                <label htmlFor="fullName" >Phone Number</label>
                <input
                  type="text"
                  name="phoneNumber"
                  value={profileInfo.phoneNumber}
                  onChange={handleChange}
                  className={styles.editInput}
                />
                <label htmlFor="fullName" >Username</label>
                <input
                  type="text"
                  name="username"
                  value={profileInfo.username}
                  onChange={handleChange}
                  className={styles.editInput}
                />
                <label htmlFor="fullName" >School</label>
                <input
                  type="text"
                  name="school"
                  value={profileInfo.school}
                  onChange={handleChange}
                  className={styles.editInput}
                />
                <label htmlFor="fullName" >Home Address</label>
                <input
                  type="text"
                  name="address"
                  value={profileInfo.address}
                  onChange={handleChange}
                  className={styles.editInput}
                />
              </>
            ) : (
              <>

                <h2>{profileInfo.fullName}</h2>
                <p>User type: <span> {profileInfo.user}</span></p>
                <p>Matric / Reg num: <span> {profileInfo.matricNumber} </span></p>
                <p>Email: <span> {profileInfo.email} </span></p>
                <p>Phone: <span> {profileInfo.phoneNumber}</span></p>
                <p>Username: <span> @{profileInfo.username}</span></p>
                <p>School: <span> {profileInfo.school}</span></p>
                <p>Address: <span> {profileInfo.address}</span></p>

              </>
            )}

          </div>
        </div>

        <div className={styles.recentRidesGroup}>
          <div className={styles.recentRides}>
            <h5>Recent Rides</h5>
            <button>View All</button>
          </div>
          <div className={styles.tableContainer}>
            <table className={styles.ridesTableers}>
              <thead>
                <tr>
                  <th>From</th>
                  <th>To</th>
                  <th>Date</th>
                  <th>Time</th>
                  <th></th>
                </tr>
              </thead>

              <tbody>
                {ridesData.map((ride, index) => (
                  <tr key={index}>
                    <td>{ride.from}</td>
                    <td>{ride.to}</td>
                    <td>{ride.date}</td>
                    <td>{ride.time}</td>
                    <td
                      title="View details"
                      style={{ cursor: 'pointer' }}
                      onClick={() => openModal(ride)}
                    >
                      ...
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {selectedRide && (
          <Modal
            isOpen={isModalOpen}
            onRequestClose={handleCloseModal}
            overlayClassName={styles.modalOverlay}
            className={styles.modalContent}
          >
            <h2 className={styles.modalContenth2}>Ride Details</h2>
            <p onClick={handleCloseModal} className={styles.absolutePP11}>X</p>
            <p><strong>From:</strong> {selectedRide.from}</p>
            <p><strong>To:</strong> {selectedRide.to}</p>
            <p><strong>Date:</strong> {selectedRide.date}</p>
            <p><strong>Time:</strong> {selectedRide.time}</p>
            <p><strong>Organizer Name:</strong> {selectedRide.organizerName}</p>
            <p><strong>Organizer Phone:</strong> {selectedRide.organizerPhone}</p>
            <p><strong>Vehicle Type:</strong> {selectedRide.vehicleType}</p>
            <p><strong>Price:</strong> {selectedRide.price}</p>
            <p><strong>Pick Up Time:</strong> {selectedRide.pickUpTime}</p>
            <p><strong>Total Journey Time:</strong> {selectedRide.totalTime}</p>
            
          </Modal>
        )}
      </div>
    </div>
  );
};

export default ProfilePage;
