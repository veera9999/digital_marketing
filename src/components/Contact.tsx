import React from "react";
import { motion } from "framer-motion";
import "../style/Contact.css";

const Contact = () => {
  return (
    <motion.section
      className="contact-section"
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      id="contact">
      <h2 className="contact-title">Let's Connect</h2>
      <p className="contact-subtitle">
        Have a project in mind? Drop us a message and let’s make magic happen.
      </p>

      <form className="contact-form">
        <div className="form-group">
          <input type="text" placeholder="Your Name" required />
        </div>
        <div className="form-group">
          <input type="email" placeholder="Your Email" required />
        </div>
        <div className="form-group">
          <textarea rows={5} placeholder="Your Message" required />
        </div>
        <button type="submit" className="contact-btn">
          Send Message
        </button>
      </form>
    </motion.section>
  );
};

export default Contact;
