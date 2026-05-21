import "../css/Contact.css";
import { useState } from "react";

function Contact() {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const whatsappNumber = "254797118548";

    const text = `
Hello Aurora Spa 🌿

I would like to book an appointment.

Name: ${formData.name}

Email: ${formData.email}

Phone: ${formData.phone}

Treatment Request:
${formData.message}
    `;

    const whatsappURL =
      `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;

    window.open(whatsappURL, "_blank");
  };

  return (
    <div className="contact-page">

      <div className="contact-hero">
        <span>Get In Touch</span>
        <h1>Book Your Spa Experience</h1>

        <p>
          Ready to relax? Reach out to Aurora Spa
          and let us help you book your perfect
          wellness experience.
        </p>
      </div>

      <section className="contact-section">

        <div className="contact-info">

          <div className="info-card">
            <h3>📞 Call Us</h3>
            <p>+254 700 000 000</p>
          </div>

          <div className="info-card">
            <h3>💬 WhatsApp</h3>

            <a
              href="https://wa.me/254141130403"
              target="_blank"
              rel="noreferrer"
            >
              Message Us
            </a>
          </div>

          <div className="info-card">
            <h3>📍 Visit Us</h3>
            <p>Riverside Drive, Nairobi</p>
          </div>

          <div className="info-card">
            <h3>⏰ Opening Hours</h3>
            <p>Mon - Sun: 9AM - 8PM</p>
          </div>

        </div>

        <div className="contact-form">

          <h2>Book Appointment</h2>

          <form onSubmit={handleSubmit}>

            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
            />

            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              required
            />

            <textarea
              rows="6"
              name="message"
              placeholder="Tell us the treatment you want..."
              value={formData.message}
              onChange={handleChange}
            ></textarea>

            <button type="submit">
              Send Booking Request
            </button>

          </form>

        </div>
      </section>

      <section className="map-section">

  <div className="map-header">
    <span>Visit Aurora Spa</span>
    <h2>Find Us Easily</h2>
  </div>

  <iframe
    title="Aurora Spa Location"
    src="https://www.google.com/maps/embed?pb=!1m18"
    width="100%"
    height="500"
    style={{ border: 0 }}
    allowFullScreen=""
    loading="lazy"
  ></iframe>

</section>
    </div>
  );
}

export default Contact;