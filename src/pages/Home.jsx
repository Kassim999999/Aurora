import "../css/Home.css";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

function Home() {
    const navigate = useNavigate();

    const testimonials = [
  {
    name: "Liz Mbugua",
    review:
      "The best place to be with great customer service. Daisy really delivered top-notch service ❤️",
  },
  {
    name: "Daniel Njeru",
    review:
      "Such a great and unique place. Friendly, skilled and professional staff — especially Daisy. She stands out in massaging.",
  },
  {
    name: "George Munyinyi",
    review:
      "The spa exceeded my expectations with its cleanliness and exceptional service. Vivian was friendly and the room felt so comfortable 😌",
  },
  {
    name: "Joe De Ceo",
    review:
      "I walked in stressed and left feeling like I was floating on a cloud! Professional, peaceful and highly recommended.",
  },
  {
    name: "Diana Andai",
    review:
      "Aurora Spa is a haven for relaxation. Friendly service and excellent customer care. Onika is amazing for deep tissue massage.",
  },
  {
    name: "Michael Mulcahy",
    review:
      "One of the best parts of my Kenya experience. Super clean facility and amazing staff. Definitely ask for Shelly.",
  },
  {
    name: "Brenda Atieno",
    review:
      "Beautiful spa with awesome services ❤️ Would definitely visit again.",
  },
];

  const [currentReview, setCurrentReview] =
  useState(0);

useEffect(() => {
  const interval = setInterval(() => {
    setCurrentReview((prev) =>
      prev === testimonials.length - 1
        ? 0
        : prev + 1
    );
  }, 4000);

  return () => clearInterval(interval);
}, []);

  return (
    <>
      {/* HERO SECTION */}
      <section className="hero">
        <div className="hero-overlay">
          <div className="hero-content" data-aos="fade-up">
            <span className="hero-tag">
  Luxury Wellness • Nairobi
</span>

<h1>
  Rejuvenate Your Body.
  <br />
  Relax Your Mind.
</h1>

<p>
  Experience premium massage therapy,
  wellness treatments and luxury
  relaxation tailored to help you
  unwind, refresh and reconnect.
</p>

            <div className="hero-buttons">
<button
  className="book-now"
  onClick={() => navigate("/contact")}
>
  Book Appointment
</button>

<button
  className="explore-btn"
  onClick={() => navigate("/services")}
>
  Explore Services
</button>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section className="services-section">
        <div className="section-header" data-aos="fade-up">
          <span>Our Premium Services</span>
          <h2>Relaxation Tailored For You</h2>
          <p>
            Discover our carefully curated wellness
            experiences designed to help you unwind,
            rejuvenate and feel refreshed.
          </p>
        </div>

        <div className="services-grid" data-aos="fade-up">
          <div className="service-card">
  <span className="service-category">
    Massage
  </span>

  <h3>Swedish Massage</h3>

  <p>
    Relaxing full body massage
    therapy designed to ease stress.
  </p>

  <div className="service-bottom">
    <h4>Ksh 4,000</h4>
    <span>60 min</span>
  </div>
</div>

<div className="service-card featured-service">
  <span className="popular-tag">
    Most Popular
  </span>

  <span className="service-category">
    Therapy
  </span>

  <h3>Deep Tissue Massage</h3>

  <p>
    Perfect for muscle recovery,
    tension relief and relaxation.
  </p>

  <div className="service-bottom">
    <h4>Ksh 5,000</h4>
    <span>60 min</span>
  </div>
</div>

<div className="service-card">
  <span className="service-category">
    Wellness
  </span>

  <h3>Aromatherapy</h3>

  <p>
    Relax deeply with calming
    essential oils and scents.
  </p>

  <div className="service-bottom">
    <h4>Ksh 5,000</h4>
    <span>60 min</span>
  </div>
</div>

<div className="service-card">
  <span className="service-category">
    Luxury
  </span>

  <h3>Hot Stone Massage</h3>

  <p>
    Luxury heated stone therapy
    to release deep tension.
  </p>

  <div className="service-bottom">
    <h4>Ksh 6,000</h4>
    <span>90 min</span>
  </div>
</div>

<div className="service-card">
  <span className="service-category">
    Skincare
  </span>

  <h3>Facial Treatment</h3>

  <p>
    Glow-enhancing facial therapy
    for refreshed healthy skin.
  </p>

  <div className="service-bottom">
    <h4>Ksh 3,000</h4>
    <span>45 min</span>
  </div>
</div>

<div className="service-card">
  <span className="service-category">
    Signature
  </span>

  <h3>Moroccan Bath</h3>

  <p>
    A premium cleansing ritual
    for deep relaxation.
  </p>

  <div className="service-bottom">
    <h4>Ksh 10,000</h4>
    <span>90 min</span>
  </div>
</div>
        </div>
      </section>

      {/* WHY CHOOSE US */}

<section className="why-section"  data-aos="fade-right">
  <div className="why-left">
    <span>Why Choose Aurora</span>

    <h2>
      A Luxury Wellness
      Experience Like No Other
    </h2>

    <p>
      At Aurora Spa, we combine expert care,
      calming environments and premium
      treatments to help you fully relax
      and rejuvenate.
    </p>

<div className="features">

  <div className="feature-box">
    <div className="feature-icon">
      💆
    </div>

    <div>
      <h3>
        Expert Therapists
      </h3>

      <p>
        Skilled wellness specialists
        delivering personalized care.
      </p>
    </div>
  </div>

  <div className="feature-box">
    <div className="feature-icon">
      🌿
    </div>

    <div>
      <h3>
        Relaxing Atmosphere
      </h3>

      <p>
        A peaceful luxury environment
        designed for total relaxation.
      </p>
    </div>
  </div>

  <div className="feature-box">
    <div className="feature-icon">
      ✨
    </div>

    <div>
      <h3>
        Premium Treatments
      </h3>

      <p>
        Tailored wellness experiences
        to restore body and mind.
      </p>
    </div>
  </div>

</div>
  </div>

  <div className="why-right">
    <img
      src="https://images.unsplash.com/photo-1519823551278-64ac92734fb1?w=900"
      alt="Spa"
    />
  </div>
</section>

{/* TESTIMONIALS */}

<section
  className="testimonial-section"
  data-aos="fade-up"
>

  <div className="section-header">
    <span>Testimonials</span>
    <h2>What Our Clients Say</h2>
  </div>

  <div className="testimonial-slider">

    <div className="testimonial-card">
      <p>
        “{
          testimonials[currentReview]
            .review
        }”
      </p>

      <h4>
        —
        {
          testimonials[currentReview]
            .name
        }
      </h4>
    </div>

    <div className="testimonial-dots">
      {testimonials.map((_, index) => (
        <span
          key={index}
          className={
            currentReview === index
              ? "dot active-dot"
              : "dot"
          }
          onClick={() =>
            setCurrentReview(index)
          }
        />
      ))}
    </div>

  </div>
</section>

{/* CTA SECTION */}

<section className="cta-section" data-aos="zoom-in">
  <div className="cta-content">
    <span>Escape The Stress</span>

<h2>
  Your Mind & Body
  Deserve A Reset
</h2>

<p>
  Step into a world of calm,
  relaxation and luxury wellness.
  Let Aurora Spa help you unwind,
  recharge and feel renewed.
</p>

<button
  className="cta-btn"
  onClick={() => navigate("/contact")}
>
  Book Appointment
</button>
  </div>
</section>

{/* TRUST STRIP */}
{/* 
<section className="trust-strip">

  <div className="trust-item">
    <h2>74+</h2>
    <p>Happy Clients</p>
  </div>

  <div className="trust-item">
    <h2>4.9★</h2>
    <p>Google Rating</p>
  </div>

  <div className="trust-item">
    <h2>100%</h2>
    <p>Relaxation Focused</p>
  </div>

  <div className="trust-item">
    <h2>Luxury</h2>
    <p>Wellness Experience</p>
  </div>

</section> */}
    </>
  );
}

export default Home;