import React from "react";
import "../Styles/contact.css";

const ContactUs = () => {
  return (
    <>
      <div className="contact__border" />
      <div className="contact__main">
        <div className="contact__container">
          <main className="contact__row">
            {/* Left Section */}
            <section className="contact__col contact__left">
              <div className="contact__title">
                <h2>Get In Touch</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Aliquam, debitis hic.
                </p>
              </div>

              <div className="contact__info">
                <div className="contact__icon__group">
                  <div className="contact__icon">
                    <i className="fa-solid fa-phone"></i>
                  </div>
                  <div className="contact__details">
                    <span>Phone</span>
                    <span>+1-908-509-1522</span>
                  </div>
                </div>

                <div className="contact__icon__group">
                  <div className="contact__icon">
                    <i className="fa-solid fa-envelope"></i>
                  </div>
                  <div className="contact__details">
                    <span>Email</span>
                    <span>info@rgs-tech.com</span>
                  </div>
                </div>

                <div className="contact__icon__group">
                  <div className="contact__icon">
                    <i className="fa-solid fa-location-dot"></i>
                  </div>
                  <div className="contact__details">
                    <span>Location</span>
                    <span>
                      Hackettstown, <br />
                      New Jersey 07840
                    </span>
                  </div>
                </div>
              </div>

              <div className="contact__socialMedia">
                <a href="https://www.linkedin.com/company/rgs-tech/">
                  <i className="fa-brands fa-linkedin-in"></i>
                </a>
                <a href="https://www.facebook.com/RGSDigital/?view_public_for=280342016002143">
                  <i className="fa-brands fa-facebook-f"></i>
                </a>
                <a href="mailto:info@rgs-tech.com">
                  <i className="fa fa-envelope"></i>
                </a>
              </div>
            </section>
            {/* left section */}

            {/* Right Section */}

            <section className="contact__col contact__right">
              <form action="" className="contact__messageForm">
                <div className="contact__inputGroup halfWdith">
                  <input type="text" name="" required="required" />
                  <label>Your Name</label>
                </div>

                <div className="contact__inputGroup halfWdith">
                  <input type="email" name="" required="required" />
                  <label>Email</label>
                </div>

                <div className="contact__inputGroup fullWidth">
                  <input type="text" name="" required="required" />
                  <label>Subject</label>
                </div>

                <div class="contact__inputGroup fullWidth">
                  <textarea required="required"></textarea>
                  <label>Say Something</label>
                </div>

                <div className="contact__inputGroup fullWidth">
                  <button>Send Message</button>
                </div>
              </form>
            </section>

            {/* right section */}
          </main>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
