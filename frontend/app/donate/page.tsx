import Link from "next/link";
import { PageHero, homeCrumb } from "@/components/PageHero";
import { station } from "@/lib/content";

export const metadata = { title: "Donate – MOR Radio" };

const impact = [
  {
    title: "Keep the station running",
    text: "Every donation helps us keep the station running — day and night, live from Willenhall to the world.",
  },
  {
    title: "Produce new shows",
    text: "Your support funds new shows across Afrobeat, gospel, jazz, talk, business, culture, and youth content.",
  },
  {
    title: "Support local talent",
    text: "Help us platform African creators, hosts, historians, chefs, athletes, and community leaders.",
  },
  {
    title: "Youth development",
    text: "Create opportunities for youth development — from Youth Corner to training new broadcasters.",
  },
];

export default function DonatePage() {
  return (
    <div className="mor-page mor-section">
      <PageHero
        title="Support the Sound of Change"
        crumbs={[homeCrumb, { label: "Donate" }]}
        intro="Support the sound of change. MOR Radio, Voices. Vibes. Vision."
      />

      {/* Donate-now hero band */}
      <div className="elementor-element elementor-widget elementor-widget-soundsphere_core_custom_font" data-element_type="widget" style={{ marginTop: "1rem", textAlign: "center" }}>
        <div className="elementor-widget-container">
          <h2 className="qodef-shortcode qodef-m qodef-custom-font qodef-layout--simple qodef-alignment--center" style={{ fontFamily: "Syne", fontWeight: 800 }}>
            <span data-content="Donate now">Donate now</span>
          </h2>
          <p className="qodef-m-text" style={{ marginTop: "1rem", maxWidth: "56rem", marginInline: "auto" }}>
            MOR Radio is fueled by passion and powered by community. Every donation helps us keep the station running,
            produce new shows, support local talent, and create opportunities for youth development. If you believe in
            what we do, help us go further. No amount is too small, and every seed you sow helps us grow.
          </p>
          <p style={{ marginTop: "1.25rem" }}>
            <a
              className="qodef-shortcode qodef-m qodef-button qodef-layout--outlined qodef-html--link qodef-button-icon--none"
              href="#donate-form"
              target="_self"
              style={
                {
                  "--qode-button-hover-color": "#000000",
                  "--qode-button-bg-hover-color": "#ffffff",
                  padding: "5px 20px",
                  "--qode-border-radius": "20px",
                } as React.CSSProperties
              }
            >
              <span className="qodef-m-text">Donate</span>
            </a>
          </p>
        </div>
      </div>

      {/* Impact grid */}
      <div className="mor-grid-4" style={{ marginTop: "2.5rem" }}>
        {impact.map((item) => (
          <div key={item.title} className="mor-card mor-card-body">
            <p className="mor-card-meta" style={{ color: "#FE7F3F" }}>Your gift</p>
            <h3 className="mor-card-title">{item.title}</h3>
            <p className="mor-card-text">{item.text}</p>
          </div>
        ))}
      </div>

      {/* Donation form + direct contact */}
      <div className="mor-split" style={{ marginTop: "2.5rem" }} id="donate-form">
        <div className="mor-card mor-card-body">
          <h3 className="mor-card-title">Make a donation</h3>
          <p className="mor-card-text">
            Send your details and pledge below — our team will be in touch to complete your donation.
          </p>
          <form
            className="elementor-form"
            method="post"
            action={`mailto:${station.email}?subject=Donation%20pledge%20—%20MOR%20Radio`}
            encType="text/plain"
            aria-label="Donation form"
          >
            <div className="elementor-form-fields-wrapper elementor-labels-above">
              <div className="elementor-field-type-text elementor-field-group elementor-column elementor-col-100 elementor-field-required">
                <input size={1} type="text" name="your-name" id="donate-name" className="elementor-field elementor-size-sm elementor-field-textual" placeholder="Your Name" required />
              </div>
              <div className="elementor-field-type-email elementor-field-group elementor-column elementor-col-100 elementor-field-required">
                <input size={1} type="email" name="your-email" id="donate-email" className="elementor-field elementor-size-sm elementor-field-textual" placeholder="Your Email" required />
              </div>
              <div className="elementor-field-type-textarea elementor-field-group elementor-column elementor-col-100">
                <textarea name="your-message" id="donate-message" className="elementor-field elementor-size-sm elementor-field-textual" placeholder="Your Message" rows={4} />
              </div>
              <div className="elementor-field-type-number elementor-field-group elementor-column elementor-col-100 elementor-field-required">
                <input size={1} type="number" min={1} name="donation-amount" id="donate-amount" className="elementor-field elementor-size-sm elementor-field-textual" placeholder="Enter Amount (USD)" required />
              </div>
              <div className="elementor-field-group elementor-column elementor-field-type-submit elementor-col-100 e-form__buttons">
                <button
                  className="qodef-shortcode qodef-m qodef-button qodef-layout--outlined qodef-button-icon--none elementor-size-sm"
                  type="submit"
                  style={
                    {
                      "--qode-button-hover-color": "#000000",
                      "--qode-button-bg-hover-color": "#ffffff",
                      padding: "5px 20px",
                      "--qode-border-radius": "20px",
                    } as React.CSSProperties
                  }
                >
                  <span className="qodef-m-text">Donate</span>
                </button>
              </div>
            </div>
          </form>
        </div>
        <div className="mor-card mor-card-body">
          <p className="mor-card-meta" style={{ color: "#FE7F3F" }}>Never miss an episode</p>
          <h3 className="mor-card-title">Other ways to give</h3>
          <p className="mor-card-text">
            Prefer to give directly? Reach the studio and we&apos;ll arrange it with you.
          </p>
          <p className="mor-card-text">
            <strong>Email</strong>
            <br />
            <a href={`mailto:${station.email}`}>{station.email}</a>
          </p>
          <p className="mor-card-text">
            <strong>Phone</strong>
            <br />
            <a href={station.phoneHref}>{station.phone}</a>
          </p>
          <p className="mor-card-text">
            {station.address.join(" ")}
          </p>
          <p>
            <Link className="qodef-shortcode qodef-m qodef-button qodef-layout--textual qodef-html--link" href="/contact-us">
              <span className="qodef-m-text">Contact us</span>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
