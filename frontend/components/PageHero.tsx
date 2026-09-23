import Link from "next/link";

export type Crumb = { label: string; href?: string };

/**
 * Shared page header used by every route: mirror breadcrumb trail
 * followed by a consistent section-title block.
 */
export function PageHero({
  title,
  crumbs,
  intro,
  align = "center",
}: {
  title: string;
  crumbs: Crumb[];
  intro?: string;
  align?: "center" | "left";
}) {
  return (
    <>
      <div className="qodef-page-title qodef-m qodef-title--breadcrumbs qodef-alignment--left qodef-vertical-alignment--header-bottom">
        <div className="qodef-m-inner">
          <div className="qodef-m-content qodef-content-full-width">
            <div itemProp="breadcrumb" className="qodef-breadcrumbs">
              {crumbs.map((crumb, i) => (
                <span key={crumb.label}>
                  {i > 0 && <span className="qodef-breadcrumbs-separator"></span>}
                  {crumb.href ? (
                    <Link itemProp="url" className="qodef-breadcrumbs-link" href={crumb.href}>
                      <span itemProp="title">{crumb.label}</span>
                    </Link>
                  ) : (
                    <span itemProp="title" className="qodef-breadcrumbs-current">
                      {crumb.label}
                    </span>
                  )}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="elementor-element elementor-widget elementor-widget-soundsphere_core_section_title" data-element_type="widget">
        <div className="elementor-widget-container">
          <div className={`qodef-shortcode qodef-m qodef-section-title qodef-alignment--${align}`}>
            <h2 className="qodef-m-title">{title}</h2>
            {intro && (
              <p className="qodef-m-text" style={{ marginTop: "12px" }}>
                {intro}
              </p>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export const homeCrumb: Crumb = { label: "Home", href: "/" };
