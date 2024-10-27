import React, { useState, useRef, useEffect } from "react";
import classes from './otpPage.module.css'
import Form from 'react-bootstrap/Form';
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Button, Spinner } from "react-bootstrap";
// import AsyncStorage from "@react-native-async-storage/async-storage";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function OTP() {
    const navigate = useNavigate();
    const [otp, setOtp] = useState(new Array(6).fill(""));
    const inputRefs = useRef([]);
    const [timer, setTimer] = useState(120); // 2 minutes countdown
    const [resendDisabled, setResendDisabled] = useState(true);

    useEffect(() => {
        if (timer > 0) {
            const countdown = setInterval(() => setTimer(timer - 1), 1000);
            return () => clearInterval(countdown);
        } else {
            setResendDisabled(false);
        }
    }, [timer]);

    const handleResendOtp = () => {
        setTimer(120); // Reset timer
        setResendDisabled(true); // Disable resend button
    };

    const handleChange = (element, index) => {
        const value = element.value;
        if (isNaN(value)) return;

        let newOtp = [...otp];
        newOtp[index] = value;
        setOtp(newOtp);

        // Move to the next input field if not the last input
        if (value && index < 5) {
            inputRefs.current[index + 1].focus();
        }
    };

    const handleKeyDown = (event, index) => {
        if (event.key === 'Backspace' && !otp[index] && index > 0) {
            inputRefs.current[index - 1].focus();
        }
    };

    const handleContinue = () => {
        navigate('/welcome');
    }


    return (

        <div className={classes.background}>
            <ToastContainer />
            <div className={classes.mainContainerx}>
                <div className={classes.thecntnt}>
                    <div className={classes.head}>
                        <p className={classes.SignUptxt1}>Enter Code</p>
                        <p className={classes.SignUptxtsub1}>A 6-digit OTP has been sent to your email. Please enter it below to verify your account.</p>
                    </div>
                    <Form>
                        <Form.Group className={classes.otpGroup}>
                            <div className={classes.otpInputs}>
                                {otp.map((data, index) => (
                                    <Form.Control
                                        key={index}
                                        type="text"
                                        name="otp"
                                        maxLength="1"
                                        className={classes.otpInput}
                                        value={data}
                                        onChange={e => handleChange(e.target, index)}
                                        onKeyDown={e => handleKeyDown(e, index)}
                                        ref={el => inputRefs.current[index] = el}
                                        autoFocus={index === 0}
                                        style={{ backgroundColor: 'rgba(0, 0, 0, 0.8)', color: "#fff" }}
                                    />
                                ))}
                            </div>
                        </Form.Group>
                    </Form>

                    <div className={classes.resend_section}>
                        <p>Resend OTP in: {Math.floor(timer / 60)}:{timer % 60 < 10 ? `0${timer % 60}` : timer % 60}</p>
                        <button
                            onClick={handleResendOtp}
                            disabled={resendDisabled}
                            className={`${classes.resend_btn} ${resendDisabled ? 'disabled' : ''}`}
                        >
                            Resend OTP
                        </button>
                    </div>
                    <Button onClick={handleContinue} variant="success" className={classes.snupbtn} >
                        Confirm OTP
                    </Button>
                    {/* <p className={classes.lgin}>Don't have an account? <Link to={'/signup'} style={{ textDecoration: 'none' }}><span>Sign Up</span></Link></p> */}
                </div>
            </div>
        </div>
    );

}
export default OTP;