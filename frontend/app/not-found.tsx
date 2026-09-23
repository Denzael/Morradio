import Link from "next/link";
import { menuItems } from "@/lib/content";

export default function NotFound() {
  return (
    <div className="mor-page mor-section" style={{ textAlign: "center" }}>
      <div className="elementor-element elementor-widget elementor-widget-soundsphere_core_custom_font" data-element_type="widget">
        <div className="elementor-widget-container">
          <p className="qodef-shortcode qodef-m qodef-custom-font qodef-layout--simple qodef-alignment--center mor-giant" style={{ fontFamily: "Syne" }}>
            <span data-content="404">404</span>
          </p>
        </div>
      </div>
      <div className="elementor-element elementor-widget elementor-widget-soundsphere_core_section_title" data-element_type="widget">
        <div className="elementor-widget-container">
          <div className="qodef-shortcode qodef-m qodef-section-title qodef-alignment--center">
            <h2 className="qodef-m-title">Off air — page not found</h2>
            <p className="qodef-m-text" style={{ marginTop: "12px" }}>
              The frequency you dialled doesn&apos;t exist. Try one of the stations below.
            </p>
          </div>
        </div>
      </div>
      <nav aria-label="Not found" style={{ marginTop: "2rem" }}>
        <ul className="mor-grid mor-grid-3" style={{ listStyle: "none", padding: 0 }}>
          {menuItems.slice(0, 6).map((item) => (
            <li key={item.href} className="mor-card mor-card-body">
              <Link href={item.href} className="qodef-m-text" style={{ fontWeight: 600 }}>
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
