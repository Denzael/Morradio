import { PageHero, homeCrumb } from "@/components/PageHero";
import { station } from "@/lib/content";

export const metadata = { title: "Contact Us – MOR Radio" };

export default function ContactUsPage() {
  return (
    <div className="mor-page mor-section">
      <PageHero
        title="Get in Touch"
        crumbs={[homeCrumb, { label: "Contact Us" }]}
        intro="Whether you have feedback, questions, requests, or just want to say hello, get in touch with us."
      />
      <div className="mor-split" style={{ marginTop: "2.5rem" }}>
        <div className="mor-card mor-card-body">
          <h3 className="mor-card-title">We’d Love to Hear From You!</h3>
          {station.address.map((line) => (
            <p key={line} className="mor-card-text" style={{ margin: 0 }}>
              {line}
            </p>
          ))}
          <p className="mor-card-text" style={{ marginBottom: 0 }}>
            <strong>Email</strong>
            <br />
            <a href={`mailto:${station.email}`}>{station.email}</a>
          </p>
          <p className="mor-card-text" style={{ marginBottom: 0 }}>
            <strong>Phone</strong>
            <br />
            <a href={station.phoneHref}>{station.phone}</a>
          </p>
          <p className="mor-card-text" style={{ marginBottom: 0 }}>
            Follow us on social media to stay update!
          </p>
        </div>
        <div className="mor-card mor-card-body">
          <h3 className="mor-card-title">Send a message</h3>
          <form className="elementor-form" method="post" name="Contact Form" aria-label="Contact Form">
            <div className="elementor-form-fields-wrapper elementor-labels-above">
              <div className="elementor-field-type-text elementor-field-group elementor-column elementor-col-100 elementor-field-required">
                <input size={1} type="text" name="form_fields[name]" id="form-field-name" className="elementor-field elementor-size-sm elementor-field-textual" placeholder="Your Name" required />
              </div>
              <div className="elementor-field-type-email elementor-field-group elementor-column elementor-col-100 elementor-field-required">
                <input size={1} type="email" name="form_fields[email]" id="form-field-contact-email" className="elementor-field elementor-size-sm elementor-field-textual" placeholder="Your Email" required />
              </div>
              <div className="elementor-field-type-textarea elementor-field-group elementor-column elementor-col-100 elementor-field-required">
                <textarea name="form_fields[message]" id="form-field-message" className="elementor-field elementor-size-sm elementor-field-textual" placeholder="Your Message" rows={5} required />
              </div>
              <div className="elementor-field-group elementor-column elementor-field-type-submit elementor-col-100 e-form__buttons">
                <button className="elementor-button elementor-size-sm" type="submit">
                  <span className="elementor-button-content-wrapper">
                    <span className="elementor-button-text">Send message</span>
                  </span>
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
