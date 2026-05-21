import "../css/Home.css";

function Home() {
  return (
    <>
      {/* HERO SECTION */}
      <section className="hero">
        <div className="hero-overlay">
          <div className="hero-content">
            <span className="hero-tag">
              Welcome to Aurora Spa
            </span>

            <h1>
              Relax, Refresh <br />
              and Rejuvenate
            </h1>

            <p>
              Experience premium massage therapy,
              luxurious spa treatments and total
              wellness in a calming environment.
            </p>

            <div className="hero-buttons">
              <button className="book-now">
                Book Appointment
              </button>

              <button className="explore-btn">
                Explore Services
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section className="services-section">
        <div className="section-header">
          <span>Our Premium Services</span>
          <h2>Relaxation Tailored For You</h2>
          <p>
            Discover our carefully curated wellness
            experiences designed to help you unwind,
            rejuvenate and feel refreshed.
          </p>
        </div>

        <div className="services-grid">
          <div className="service-card">
            <h3>Swedish Massage</h3>
            <p>Relaxing full body massage therapy.</p>
            <h4>Ksh 4,000</h4>
          </div>

          <div className="service-card">
            <h3>Deep Tissue</h3>
            <p>Perfect for muscle tension relief.</p>
            <h4>Ksh 5,000</h4>
          </div>

          <div className="service-card">
            <h3>Aromatherapy</h3>
            <p>Relax with calming essential oils.</p>
            <h4>Ksh 5,000</h4>
          </div>

          <div className="service-card">
            <h3>Hot Stone Massage</h3>
            <p>Luxury heated stone therapy.</p>
            <h4>Ksh 6,000</h4>
          </div>

          <div className="service-card">
            <h3>Facial Treatment</h3>
            <p>Glow-enhancing facial therapy.</p>
            <h4>Ksh 3,000</h4>
          </div>

          <div className="service-card">
            <h3>Moroccan Bath</h3>
            <p>Premium body cleansing ritual.</p>
            <h4>Ksh 10,000</h4>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}

<section className="why-section">
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
        <h3>Professional Therapists</h3>
        <p>Highly trained wellness experts.</p>
      </div>

      <div className="feature-box">
        <h3>Relaxing Environment</h3>
        <p>Luxury ambience built for peace.</p>
      </div>

      <div className="feature-box">
        <h3>Premium Treatments</h3>
        <p>Tailored experiences for your body.</p>
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

<section className="testimonial-section">
  <div className="section-header">
    <span>Client Reviews</span>
    <h2>What Our Clients Say</h2>
  </div>

  <div className="testimonial-grid">
    <div className="testimonial-card">
      <p>
        “Absolutely relaxing experience.
        The massage therapy was perfect!”
      </p>
      <h4>— Sarah M.</h4>
    </div>

    <div className="testimonial-card">
      <p>
        “The ambience is amazing and the
        therapists are so professional.”
      </p>
      <h4>— Diana K.</h4>
    </div>

    <div className="testimonial-card">
      <p>
        “Best spa experience in Nairobi.
        Highly recommend Aurora Spa.”
      </p>
      <h4>— Cynthia W.</h4>
    </div>
  </div>
</section>
    </>
  );
}

export default Home;