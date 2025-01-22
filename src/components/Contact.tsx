import {
  FaEnvelope,
  FaLocationDot,
  FaPhone,
  FaRegEnvelope,
  FaRegUser,
} from "react-icons/fa6";

import emailjs from "@emailjs/browser";
import { useRef } from "react";

const Contact = () => {
  const form = useRef<HTMLFormElement>(null);
  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (form.current) {
      emailjs
        .sendForm(
          process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "",
          process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "",
          form.current,
          process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || ""
        )
        .then(
          (result) => {
            console.log(result.text);
            alert("Message sent successfully!");
          },
          (error) => {
            console.log(error.text);
            alert("Failed to send the message. Please try again.");
          }
        );
    }
  };

  return (
    <>
      <section id="contact" className="contact-area">
        <div className="container">
          <div className="container-inner">
            <div className="row">
              <div className="col-xl-12 col-lg-12">
                <div className="section-title text-center wow fadeInUp delay-0-2s">
                  <p>contact</p>
                  <h2>Get in Touch with Me!</h2>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-4">
                <div className="contact-content-part  wow fadeInUp delay-0-2s">
                  {/* START CONTACT SINGLEDESIGN AREA */}
                  <div
                    className="single-contact wow fadeInUp"
                    data-wow-delay=".2s"
                  >
                    <div className="contact-icon">
                      <FaLocationDot
                        fontSize={21}
                        color="var(--primary-color)"
                      />
                    </div>
                    <h2>Address:</h2>
                    <p>Dhaka, Bangladesh</p>
                  </div>
                  {/* / END CONTACT SINGLEDESIGN AREA */}
                  {/* START CONTACT SINGLEDESIGN AREA */}
                  <div
                    className="single-contact wow fadeInUp"
                    data-wow-delay=".4s"
                  >
                    <div className="contact-icon">
                      <FaPhone fontSize={21} color="var(--primary-color)" />
                    </div>
                    <h2>contact number:</h2>
                    <p>+880 17 1328-9142</p>
                  </div>
                  {/* / END CONTACT SINGLEDESIGN AREA */}
                  {/* START CONTACT SINGLEDESIGN AREA */}
                  <div
                    className="single-contact wow fadeInUp"
                    data-wow-delay=".6s"
                  >
                    <div className="contact-icon">
                      <FaEnvelope fontSize={21} color="var(--primary-color)" />
                    </div>
                    <h2>Email us:</h2>
                    <p>nomanzawad@gmail.com</p>
                  </div>
                  {/* / END CONTACT SINGLEDESIGN AREA */}
                </div>
              </div>
              {/* START CONTACT FORM DESIGN AREA */}
              <div className="col-lg-8">
                <div className="contact-form contact-form-area wow fadeInUp delay-0-4s">
                  <form
                    id="contactForm"
                    className="contactForm"
                    name="contactForm"
                    method="post"
                    ref={form}
                    onSubmit={sendEmail}
                  >
                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-group">
                          <label htmlFor="name">Full Name</label>
                          <input
                            type="text"
                            id="name"
                            name="name"
                            className="form-control"
                            defaultValue=""
                            placeholder="Steve Milner"
                            required
                            data-error="Please enter your Name"
                          />
                          <label htmlFor="name" className="for-icon">
                            <FaRegUser />
                          </label>
                          <div className="help-block with-errors"></div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label htmlFor="email">Email Address</label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            className="form-control"
                            defaultValue=""
                            placeholder="hello@websitename.com"
                            required
                            data-error="Please enter your Email"
                          />
                          <label htmlFor="email" className="for-icon">
                            <FaRegEnvelope />
                          </label>
                          <div className="help-block with-errors"></div>
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="form-group">
                          <label htmlFor="message">Your Message</label>
                          <textarea
                            name="message"
                            id="message"
                            className="form-control"
                            rows={4}
                            placeholder="Write Your message"
                            required
                            data-error="Please Write your Message"
                          ></textarea>
                          <div className="help-block with-errors"></div>
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="form-group mb-0">
                          <button type="submit" className="theme-btn">
                            Send Me Message <FaRegEnvelope />
                          </button>
                          <div id="msgSubmit" className="hidden"></div>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              {/* / END CONTACT FORM DESIGN AREA */}
            </div>
          </div>
        </div>
      </section>

      <section className="call-to-action-area">
        <div className="container">
          <div className="row">
            {/* START ABOUT TEXT DESIGN AREA */}
            <div className="col-lg-12">
              <div className="call-to-action-part wow fadeInUp delay-0-2s text-center">
                <h2>
                  Are You Ready to <span>kickstart</span> your{" "}
                  <span>project</span> with a touch of magic?
                </h2>
                <p>
                  Reach out and let&apos;s make it happen ✨. I&apos;m also
                  available for full-time or Part-time opportunities to push the
                  boundaries of design and deliver exceptional work.
                </p>
                <div className="hero-btns">
                  <a href="#contact" className="theme-btn">
                    Let&apos;s Talk <FaRegEnvelope />
                  </a>
                </div>
              </div>
            </div>
            {/* / END ABOUT TEXT DESIGN AREA */}
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
