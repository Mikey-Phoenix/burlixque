import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './signUp.css';
import { GoEyeClosed } from "react-icons/go";
import { RxEyeOpen } from "react-icons/rx";
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import logo from './newlogo.svg';
import { CiMail } from "react-icons/ci";
import { RiUser3Line } from "react-icons/ri";
import Car3D from './Car3d';
import Modal from 'react-modal'

// Starfield Effect (Unchanged)
const Starfield = () => {
    useEffect(() => {
        const svg = document.getElementById("starfield");
        const numStars = 100;
        const width = window.innerWidth;
        const height = window.innerHeight;

        function random(min, max) {
            return Math.random() * (max - min) + min;
        }

        function createStar() {
            const cx = random(0, width);
            const cy = random(0, height);
            const r = random(0.5, 1.3);

            const star = document.createElementNS("http://www.w3.org/2000/svg", "circle");
            star.setAttribute("cx", cx);
            star.setAttribute("cy", cy);
            star.setAttribute("r", r);
            star.setAttribute("fill", "white");
            svg.appendChild(star);
            return star;
        }

        function animateStar(star) {
            let xPos = parseFloat(star.getAttribute("cx"));
            let yPos = parseFloat(star.getAttribute("cy"));
            const speedX = random(-0.34, 0.18);
            const speedY = random(-0.06, 0.28);

            function move() {
                xPos += speedX;
                yPos += speedY;

                if (xPos < 0) xPos = width;
                if (xPos > width) xPos = 0;
                if (yPos < 0) yPos = height;
                if (yPos > height) yPos = 0;

                star.setAttribute("cx", xPos);
                star.setAttribute("cy", yPos);

                requestAnimationFrame(move);
            }
            move();
        }

        for (let i = 0; i < numStars; i++) {
            const star = createStar();
            animateStar(star);
        }

        return () => {
            svg.innerHTML = ''; // Clean up when component unmounts
        };
    }, []);

    return (
        <svg id="starfield" width="100%" height="100%" style={{ position: 'absolute', top: 0, left: 0, zIndex: -1 }} preserveAspectRatio="none"></svg>
    );
};

function SignUpPage() {
    const [showPassword1, setShowPassword1] = useState(false);
    const [showPassword2, setShowPassword2] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);  // Control the modal state
    const [selectedRole, setSelectedRole] = useState(null);  // Role selection
    const [clickable, setClickable] = useState(false);
    const navigate = useNavigate();

    const togglePasswordVisibility = () => {
        setShowPassword1(!showPassword1);
    };
    const togglePassword2Visibility = () => {
        setShowPassword2(!showPassword2);
    };

    // Handle opening the modal when "Sign Up" is clicked
    const handleSignUpClick = (e) => {
        e.preventDefault();  // Prevent form submission
        setIsModalOpen(true); // Open the modal
    };

    // Handle role selection and navigation
    const handleRoleSelection = (role) => {
        setSelectedRole(role);  // Store the selected role
        setClickable(true);
    };

    // Handle confirmation and navigate based on role
    const handleConfirmRole = (e) => {
        if (selectedRole === 'organizer') {
            navigate('/register/transport_organizer');
        } else if (selectedRole === 'passenger') {
            navigate('/register/passenger');
        }
        setIsModalOpen(false);  // Close the modal
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);  // Close the modal
    };

    const rightSlideIn = {
        hidden: { opacity: 0, x: -200 },
        visible: { opacity: 1, x: 0, transition: { duration: 1.5 } }
    };

    return (
        <motion.div
            className="login-page"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 3.5 }}
            style={{ position: 'relative', height: '100vh', overflow: 'hidden' }}
        >

            <Starfield />

            <motion.div
                className="login-container"
                initial="hidden"
                animate="visible"
                transition={{ staggerChildren: 0.2 }}
            >
                <motion.div className="signup-container22">
                    <motion.div
                        className="signup-forms"
                        variants={rightSlideIn}
                    >
                        <motion.div className="headertop" variants={rightSlideIn} >
                            <motion.div className='imgaeflex' variants={rightSlideIn} >
                                <motion.img
                                    src={logo}
                                    alt="Pela Design"
                                    className="logo"
                                    variants={rightSlideIn}
                                />
                                <motion.p className='burlixtype' variants={rightSlideIn}>Burlixque</motion.p>
                            </motion.div>
                            <motion.h2 className='h222' variants={rightSlideIn}>GET STARTED</motion.h2>
                            <motion.p className='atypeshii' variants={rightSlideIn}>
                                Already have an account? <Link to='/login'><a style={{ color: '#ffffff' }}>Log In</a> </Link>
                            </motion.p>
                        </motion.div>

                        <form>
                            <motion.div className="inputGroupDivSign" variants={rightSlideIn}>
                                <motion.label htmlFor="fullName">Full Name</motion.label>
                                <motion.input
                                    type="text"
                                    id="fullName"
                                    placeholder="Enter your full name"
                                    required
                                />
                                <p className='imgRep22'><RiUser3Line /></p>
                            </motion.div>

                            <motion.div className="inputGroupDivSign" variants={rightSlideIn}>
                                <motion.label htmlFor="email">Email</motion.label>
                                <motion.input
                                    type="email"
                                    id="email"
                                    placeholder="Enter your email"
                                    required
                                />
                                <p className='imgRep22'><CiMail /></p>
                            </motion.div>

                            <motion.div className="inputGroupDivSign" variants={rightSlideIn}>
                                <motion.label htmlFor="password">Password</motion.label>
                                <motion.input
                                    type={showPassword1 ? 'text' : 'password'}
                                    id="password"
                                    placeholder="Enter your password"
                                    required
                                />
                                <motion.p
                                    className='imgRep22'
                                    onClick={togglePasswordVisibility}
                                >
                                    {showPassword1 ? <GoEyeClosed /> : <RxEyeOpen />}
                                </motion.p>
                            </motion.div>

                            <motion.div className="inputGroupDivSign" variants={rightSlideIn}>
                                <motion.label htmlFor="password">Confirm Password</motion.label>
                                <motion.input
                                    type={showPassword2 ? 'text' : 'password'}
                                    id="password"
                                    placeholder="Confirm your password"
                                    required
                                />
                                <motion.p
                                    className='imgRep22'
                                    onClick={togglePassword2Visibility}
                                >
                                    {showPassword2 ? <GoEyeClosed /> : <RxEyeOpen />}
                                </motion.p>
                            </motion.div>

                            {/* Sign Up Button */}
                            <motion.button
                                type="button"
                                className="signup-btn"
                                onClick={handleSignUpClick} // Open the modal
                                variants={rightSlideIn}
                            >
                                Sign Up
                            </motion.button>
                        </form>
                    </motion.div>

                    <motion.div className="car-3d-section" variants={rightSlideIn}>
                        <Car3D variants={rightSlideIn} />
                    </motion.div>

                </motion.div>
            </motion.div>

            {/* Modal for Role Selection */}
            <Modal
                isOpen={isModalOpen}
                onRequestClose={handleCloseModal}
                className="modalContent"
                overlayClassName="modalOverlay"
            >
                <div>
                    <h2>Select Your Role</h2>
                    <div className="role-toggle-container">
                    <label
                        className={`role-toggle ${selectedRole === 'passenger' ? 'selected' : ''}`}
                        onClick={() => handleRoleSelection('passenger')}
                    >
                        Student Passenger
                    </label>
                    <label
                        className={`role-toggle ${selectedRole === 'organizer' ? 'selected' : ''}`}
                        onClick={() => handleRoleSelection('organizer')}
                    >
                        Transport Organizer
                    </label>

                    </div>
                    <div className="modal-actions">
                        <button onClick={handleConfirmRole} disabled={!clickable} className="modal-confirm-btn">
                            Confirm
                        </button>
                        <button onClick={handleCloseModal} className="modal-cancel-btn">
                            Cancel
                        </button>
                    </div>
                </div>
            </Modal>

        </motion.div>
    );
}

export default SignUpPage;
