import React, { useState, useEffect, useRef } from 'react';
import styles from './landing.module.css'; // Using CSS modules
import { Link } from 'react-router-dom'; // Assuming you're using react-router
import heroImg from '../../Assets/OfficeWelcome.jpg';
import profile from '../../Assets/pfp.png';
import logo from '../../Assets/newlogo.svg'


function LandingPage() {
    const [active, setActive] = useState('home');
    const sections = useRef({}); // To store section refs

    // Scroll functions to scroll into view
    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
        setActive(sectionId);
    };

    // Hook for intersection observer to animate and set active section
    useEffect(() => {
        const options = {
            threshold: 0.30, // Trigger when 30% of the section is visible
        };
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                const sectionId = entry.target.id;
                if (entry.isIntersecting) {
                    entry.target.classList.add(styles.sectionVisible);
                    setActive(sectionId); // Set active header when section is in view
                }
            });
        }, options);

        // Observe each section
        const sectionsArray = ['home', 'about', 'services', 'contact'];
        sectionsArray.forEach(section => {
            const element = document.getElementById(section);
            if (element) {
                sections.current[section] = element;
                observer.observe(element);
            }
        });

        // Cleanup observer on unmount
        return () => {
            sectionsArray.forEach(section => {
                observer.unobserve(sections.current[section]);
            });
        };
    }, []);

    return (
        <div className={styles.landingPage}>
            {/* Header Section */}
            <header className={styles.headerland}>
                <div className={styles.logoGroup}>
                    <img src={logo} alt="" />
                    <div className={styles.logo}>Burlixque</div>
                </div>
                <nav className={styles.navbar}>
                    <p onClick={() => scrollToSection('home')} className={`${styles.navLink} ${active === 'home' ? styles.activeP : ''}`}>Home</p>
                    <p onClick={() => scrollToSection('about')} className={`${styles.navLink} ${active === 'about' ? styles.activeP : ''}`}>About</p>
                    <p onClick={() => scrollToSection('services')} className={`${styles.navLink} ${active === 'services' ? styles.activeP : ''}`}>Services</p>
                    <p onClick={() => scrollToSection('contact')} className={`${styles.navLink} ${active === 'contact' ? styles.activeP : ''}`}>Contact</p>
                </nav>
                <div className={styles.authButtons}>
                    <Link to="/login" className={styles.loginBtn}>Login</Link>
                    <Link to="/sign_up" className={styles.signupBtn}>Sign Up</Link>
                </div>
            </header>

            {/* Hero Section */}
            <section id="home" className={`${styles.heroSection} ${styles.sectionHidden}`}>
                <div className={styles.heroContent}>
                    <h1 className={styles.heroTitle}>Seamless Transportation</h1>
                    <p className={styles.heroSubtitle}>Book rides, share rides, and explore with ease.</p>
                    <Link to="/sign_up" className={styles.heroButton}>Get Started</Link>
                </div>
                <div className={`${styles.heroImage}`}>
                    <img src={heroImg} alt="Transport Illustration" />
                </div>
            </section>

            {/* About Section */}
            <section id="about" className={`${styles.aboutSection} ${styles.sectionHidden}`}>
                <div className={styles.aboutContent}>
                    <h2 className={styles.sectionTitle}>About Us</h2>
                    <div className={styles.aboutGroupthings}>
                        <img src={profile} alt="" />
                        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur</p>
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section id="services" className={`${styles.servicesSection} ${styles.sectionHidden}`}>
                <h2 className={styles.sectionTitle}>Our Services</h2>
                <div className={styles.flexServices}>
                    <div>
                        <h6 className={styles.flexServH6}>Effortless Transport </h6>
                        <p className={styles.flexServP}>Discover a range of services designed to make your travel smooth, convenient, and reliable.</p>
                    </div>
                    <div className={styles.serviceCards}>
                        <div className={styles.serviceCard}>
                            <h3>Carpooling</h3>
                            <p>Share a ride and reduce your carbon footprint.</p>
                        </div>
                        <div className={styles.serviceCard}>
                            <h3>On-Demand Transport</h3>
                            <p>Book rides quickly with our app.</p>
                        </div>
                        <div className={styles.serviceCard}>
                            <h3>Ride Sharing</h3>
                            <p>Split the cost of rides with others traveling in the same direction.</p>
                        </div>
                        <div className={styles.serviceCard}>
                            <h3>Cashless Payments</h3>
                            <p>Safe and convinient payment options.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            {/* <section id="testimonials" className={styles.testimonialsSection}>
                <h2 className={styles.sectionTitle}>What Our Users Say</h2>
                <div className={styles.testimonial}>
                    <p>"Burlixque made my daily commute so much easier!"</p>
                    <p>- Alex, Happy Rider</p>
                </div>
                <div className={styles.testimonial}>
                    <p>"The carpooling feature helped me save on travel expenses."</p>
                    <p>- Chris, Regular User</p>
                </div>
            </section> */}

            {/* Contact Section */}
            <section id="contact" className={`${styles.contactSection} ${styles.sectionHidden}`}>
            <h2 className={styles.sectionTitle}>Contact Us</h2>
                <div className={styles.tivcontainer}>
                    <div className={styles.formSectionings}>
                        <h3 className={styles.bigh3}>Get in Touch</h3>
                        <h1>Let's Chat, Reach Out to Us</h1>
                        <p>
                            Have questions or feedback? We're here to help. Send us a message, and we'll respond
                            within 24 hours.
                        </p>
                        <form className={styles.formers}>
                            <div className={styles.inputGroupers}>
                                <div className={styles.inputFielders}>
                                    <label htmlFor="firstName">First Name</label>
                                    <input type="text" id="firstName" placeholder="First name" />
                                </div>
                                <div className={styles.inputFielders}>
                                    <label htmlFor="lastName">Last Name</label>
                                    <input type="text" id="lastName" placeholder="Last name" />
                                </div>
                            </div>
                            <div className={styles.inputFielders}>
                                <label htmlFor="email">Email Address</label>
                                <input type="email" id="email" placeholder="Email address" />
                            </div>
                            <div className={styles.inputFielders}>
                                <label htmlFor="message">Message</label>
                                <textarea id="message" placeholder="Leave us a message" />
                            </div>
                            <div className={styles.checkboxers}>
                                <input type="checkbox" id="privacyPolicy" />
                                <label htmlFor="privacyPolicy">
                                    I agree to our friendly <a style={{ color: 'blue' }} href="/dashboard">privacy policy</a>
                                </label>
                            </div>
                            <button type="submit" className={styles.submitButtoners}>Send Message</button>
                        </form>
                    </div>

                    <div className={styles.imageSection}>
                        <img src="https://media.istockphoto.com/id/1995370992/photo/discover-seamless-customer-support-through-a-businessman-touching-virtual-screen-icons-for.webp?a=1&b=1&s=612x612&w=0&k=20&c=knQlbQamISORsNNZcAU_4VoFhFOd3WZL7_Rtb_h4sVo=" alt="Contact Us" />
                        <div className={styles.contactDetails}>
                            <div className={styles.contactInfo}>
                                <span className={styles.icon}>📧</span>
                                <p>Email: <a style={{ color: 'blue' }} href="mailto:techteam@kawruh.com" target='_blank' rel="noreferrer">techteam@burlixque.com</a></p>
                            </div>
                            <div className={styles.contactInfo}>
                                <span className={styles.icon}>📞</span>
                                <p>Phone:<a style={{ color: 'blue' }} href="tel: 08147645851" target='_blank' rel="noreferrer"> 08147645851 </a> </p>
                            </div>
                            <div className={styles.contactInfo}>
                                <span className={styles.icon}>🗨</span>
                                <p>Whatsapp:<a style={{ color: 'blue' }} href="https://wa.me/+2348147645851" target='_blank' rel="noreferrer"> 08133445566 </a> </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className={styles.footer}>
                <p>© 2024 Burlixque. All Rights Reserved.</p>
            </footer>
        </div>
    );
}

export default LandingPage;
