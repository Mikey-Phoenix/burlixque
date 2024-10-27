import React from 'react';
import { Link } from 'react-router-dom';
import styles from './payments.module.css';
// import { toast } from 'react-toastify';

export default function payment() {

    function pay (e) {
        e.preventDefault();
        alert('Booking successful');
        document.getElementById('link').click();
    }

  return (
    <div className={styles.container}>
        <div className={styles.rideInfo}>
            <img src='' alt='' />
            <div>
                <h1>Baba Cash</h1>
                <p>University: <span>UNILAG</span></p>
                <p>Destination/Stops: <span>Ibadan/Berger/Sagamu/InterChange/Kuto</span></p>
                <p>Plate Number: <span>IE342FR</span></p>
                <p>Vehicle Type: <span>Coaster Bus</span></p>
                <p>Rate: #<span>5000</span></p>
            </div>
        </div>

        <div className={styles.paymentContainer}>
            <div className={styles.paymentDetails}>
                <h2 className={styles.title}>Payment details</h2>
                <form>
                    <div className={styles.inputGroupings}>
                        <label>Credit Card Number</label>
                        <input type="text" placeholder="xxxx xxxx xxxx xxxx" required  />
                    </div>

                    <div className={styles.cardDetails}>
                        <div className={styles.inputGroupings}>
                        <label>Expiry Date</label>
                        <input type="text" placeholder="mm / yy" required  />
                        </div>
                        <div className={styles.inputGroupings}>
                        <label>CVV</label>
                        <input type="text" placeholder="xxx" required  />
                        </div>
                    </div>

                    <div className={styles.summary}>
                        <div className={styles.summaryItem}>
                        <span>Subtotal</span>
                        <span>₦1000</span>
                        </div>
                        <div className={styles.summaryItem}>
                        <span>Additional Fee</span>
                        <span>₦0.00</span>
                        </div>
                        <div className={styles.summaryTotal}>
                        <span>Total Amount</span>
                        <span>₦5000</span>
                        </div>
                    </div>

                    <button onClick={pay} className={styles.paymentButton}>Make payment</button>
                    <Link to="/check_rides" id='link' style={{display: "none"}} />
                </form>
            </div>

        </div>
    </div>
  )
}
