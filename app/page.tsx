import Link from "next/link";

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="est">Elevate Every Journey</div>
        <h1>Fly smarter. Fly Skyline.</h1>
        <p className="lead">
          From flagship international routes to short-hop regionals, Skyline Airways connects you to 187 destinations in 74 countries — on time, every time.
        </p>
        <div className="hero-actions">
          <Link href="/login" className="btn-primary">Manage Booking</Link>
          <Link href="/search" className="btn-ghost">Book a Flight</Link>
        </div>
      </section>

      <section className="stats">
                <div className="stat"><strong>412</strong><span>Aircraft in fleet</span></div>
        <div className="stat"><strong>187</strong><span>Destinations</span></div>
        <div className="stat"><strong>68M</strong><span>Passengers a year</span></div>
        <div className="stat"><strong>87%</strong><span>On-time performance</span></div>
      </section>

      <div className="section-title">
        <h2>Fly with Us</h2>
        <div className="divider" />
        <p>Premium cabins, global connectivity, and the Star Network.</p>
      </div>

      <section className="features">
                <div className="feature">
          <div className="icon">F</div>
          <h3>First & Business</h3>
          <p>Lie-flat suites, dedicated chefs, and ground concierge on every long-haul route.</p>
        </div>
        <div className="feature">
          <div className="icon">E</div>
          <h3>Economy Plus</h3>
          <p>Extra legroom, priority boarding, and complimentary meals on flights over four hours.</p>
        </div>
        <div className="feature">
          <div className="icon">S</div>
          <h3>SkyClub Lounges</h3>
          <p>52 airport lounges worldwide with showers, workspaces, and full dining.</p>
        </div>
        <div className="feature">
          <div className="icon">M</div>
          <h3>SkyMiles Rewards</h3>
          <p>Earn and redeem miles across Star Network's 28 member airlines.</p>
        </div>
      </section>

      <div className="section-title">
        <h2>From Our Travelers</h2>
        <div className="divider" />
      </div>

      <section>
                <div className="testimonial">"The SkyClub lounge in Singapore is hands down the best in the alliance. I never take any other airline to Asia."<cite>SkyMiles Diamond member, 14 years</cite></div>
        <div className="testimonial">"Our crew got rebooked overnight after a mechanical. Skyline put us up in the Hilton and gave every passenger a voucher. Classy."<cite>Business traveler, NYC→LHR</cite></div>
      </section>
    </>
  );
}
