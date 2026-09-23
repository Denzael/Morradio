"use client";

import Link from "next/link";
import { useEffect } from "react";

export function Footer() {
  useEffect(() => {
    const btn = document.getElementById("qodef-back-to-top");
    if (!btn) return;
    let ticking = false;
    function onScroll() {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        btn?.classList.toggle("qodef--on", window.scrollY > 600);
        ticking = false;
      });
    }
    function onClick(e: Event) {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
    btn.classList.add("qodef--off");
    window.addEventListener("scroll", onScroll, { passive: true });
    btn.addEventListener("click", onClick);
    onScroll();
    return () => {
      window.removeEventListener("scroll", onScroll);
      btn.removeEventListener("click", onClick);
    };
  }, []);

  return (
    <>
      <footer id="qodef-page-footer" className="qodef-skin--dark" role="contentinfo">
        <div id="qodef-page-footer-top-area">
          <div id="qodef-page-footer-top-area-inner" className="qodef-content-full-width">
            <div className="qodef-grid qodef-layout--columns qodef-responsive--custom qodef-col-num--3 qodef-col-num--1024--1 qodef-col-num--880--1 qodef-col-num--680--1 qodef-proportion--custom qodef-alignment--left" style={{
              "--qode-gutter-custom": "0px",
              "--qode-gutter-custom-1512": "0px",
              "--qode-gutter-custom-1200": "0px",
              "--qode-gutter-custom-880": "0px"
            } as React.CSSProperties}>
              <div className="qodef-grid-inner">
                {/* Column 1: Donate */}
                <div className="qodef-grid-item">
                  <div className="widget widget_block" data-area="qodef-footer-top-area-column-1">
                    <div className="wp-block-group">
                      <div className="wp-block-group__inner-container is-layout-flow wp-block-group-is-layout-flow">
                        <h2 className="wp-block-heading">Donate <br />now</h2>
                      </div>
                    </div>
                  </div>
                  <div className="widget widget_block widget_text" data-area="qodef-footer-top-area-column-1">
                    <p className="qodef-custom-footer-text wp-block-paragraph"><em>Support the sound of change. MOR Radio, Voices. Vibes. Vision.</em></p>
                  </div>
                  <div className="widget widget_soundsphere_core_separator" data-area="qodef-footer-top-area-column-1">
                    <div className="qodef-shortcode qodef-m qodef-separator clear qodef-show--yes qodef-show-1600--yes qodef-show-1512--yes qodef-show-1368--yes qodef-show-1200--yes qodef-show-1024--yes qodef-show-880--yes qodef-show-680--yes">
                      <div className="qodef-m-line" style={{ borderColor: "transparent", marginTop: "7px" }}></div>
                    </div>
                  </div>
                  <div className="widget widget_soundsphere_core_button" data-area="qodef-footer-top-area-column-1">
                    <Link href="/donate" className="qodef-shortcode qodef-m qodef-button qodef-layout--filled qodef-html--link" style={{
                      "--qode-button-color": "#000000",
                      "--qode-button-bg-color": "#b3b1e0",
                      "--qode-button-border-color": "#000000"
                    } as React.CSSProperties}>
                      <span className="qodef-m-text">Donate</span>
                    </Link>
                  </div>
                  <div className="widget widget_soundsphere_core_separator" data-area="qodef-footer-top-area-column-1">
                    <div className="qodef-shortcode qodef-m qodef-separator clear qodef-show--yes qodef-show-1600--yes qodef-show-1512--yes qodef-show-1368--yes qodef-show-1200--yes qodef-show-1024--yes qodef-show-880--yes qodef-show-680--yes">
                      <div className="qodef-m-line" style={{ borderColor: "transparent", marginTop: "20px" }}></div>
                    </div>
                  </div>
                  <div className="widget widget_soundsphere_core_separator" data-area="qodef-footer-top-area-column-1">
                    <div className="qodef-shortcode qodef-m qodef-separator clear qodef-show--yes qodef-show-1600--yes qodef-show-1512--yes qodef-show-1368--yes qodef-show-1200--yes qodef-show-1024--yes qodef-show-880--no qodef-show-680--no">
                      <div className="qodef-m-line" style={{ borderColor: "transparent", marginTop: "16px" }}></div>
                    </div>
                  </div>
                  <div className="widget widget_block" data-area="qodef-footer-top-area-column-1">
                    <h4 className="wp-block-heading" style={{ fontSize: "16px" }}>
                      <a href="mailto:sound@morradio.co.uk">sound@</a>
                      <a href="/">morradio</a>.co.uk
                    </h4>
                  </div>
                </div>

                {/* Column 2: Contact */}
                <div className="qodef-grid-item">
                  <div className="widget widget_block" data-area="qodef-footer-top-area-column-2">
                    <h4 className="wp-block-heading">Contact</h4>
                  </div>
                  <div className="widget widget_block widget_text" data-area="qodef-footer-top-area-column-2">
                    <p className="qodef--custom-underline wp-block-paragraph">
                      <a href="/" target="_blank" rel="noreferrer noopener">MOR Radio<br /></a>
                      1 - 3 Market Place,<br />
                      Willenhall, WV13 2AA<br />
                      United Kingdom
                    </p>
                  </div>
                  <div className="widget widget_block widget_text" data-area="qodef-footer-top-area-column-2">
                    <p className="qodef--custom-underline wp-block-paragraph">
                      <strong>Email</strong><br />
                      <a href="mailto:sound@morradio.co.uk">sound@</a>
                      <a href="/">morradio.co.uk</a>
                    </p>
                  </div>
                  <div className="widget widget_block widget_text" data-area="qodef-footer-top-area-column-2">
                    <p className="qodef--custom-underline wp-block-paragraph">
                      <strong>Phone</strong><br />
                      <a href="tel:+447565541996">+44 7565 541996</a>
                    </p>
                  </div>
                </div>

                {/* Column 3: Follow */}
                <div className="qodef-grid-item">
                  <div className="widget widget_block" data-area="qodef-footer-top-area-column-3">
                    <h4 className="wp-block-heading">Follow</h4>
                  </div>
                  <div className="widget widget_block widget_text" data-area="qodef-footer-top-area-column-3">
                    <p className="qodef--custom-underline wp-block-paragraph"></p>
                  </div>
                  <div className="widget widget_block widget_text" data-area="qodef-footer-top-area-column-3">
                    <p className="qodef--custom-underline wp-block-paragraph">
                      <a href="https://www.linkedin.com/company/qode-themes/" target="_blank" rel="noreferrer noopener">Linkedin</a>
                    </p>
                  </div>
                  <div className="widget widget_block widget_text" data-area="qodef-footer-top-area-column-3">
                    <p className="qodef--custom-underline wp-block-paragraph">
                      <a href="https://www.facebook.com/QodeInteractive/" target="_blank" rel="noreferrer noopener">Facebook</a>
                    </p>
                  </div>
                  <div className="widget widget_block widget_text" data-area="qodef-footer-top-area-column-3">
                    <p className="qodef--custom-underline wp-block-paragraph">
                      <a href="https://www.instagram.com/qodeinteractive/" target="_blank" rel="noreferrer noopener">Instagram</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div id="qodef-page-footer-bottom-area">
          <div id="qodef-page-footer-bottom-area-inner" className="qodef-content-full-width">
            <div className="qodef-grid qodef-layout--columns qodef-responsive--custom qodef-col-num--3 qodef-col-num--1024--1 qodef-col-num--880--1 qodef-col-num--680--1" style={{
              "--qode-gutter-custom": "0px",
              "--qode-gutter-custom-1512": "0px",
              "--qode-gutter-custom-1200": "0px",
              "--qode-gutter-custom-880": "0px"
            } as React.CSSProperties}>
              <div className="qodef-grid-inner">
                {/* Bottom Column 1: Brand */}
                <div className="qodef-grid-item">
                  <div className="widget widget_block" data-area="qodef-footer-bottom-area-column-1">
                    <div className="wp-block-qi-blocks-advanced-text qodef-block-container qodef-widget-block-4ae429cf">
                      <div className="qi-block-advanced-text qodef-block qodef-m">
                        <p>MORRadio</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Bottom Column 2: Menu */}
                <div className="qodef-grid-item">
                  <div className="widget widget_nav_menu" data-area="qodef-footer-bottom-area-column-2">
                    <div className="menu-footer-bottom-container">
                      <ul id="menu-footer-bottom" className="menu">
                        <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-10863">
                          <Link href="/contact-us">Help</Link>
                        </li>
                        <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-11290">
                          <Link href="/meet-your-host">Members</Link>
                        </li>
                        <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-10866">
                          <Link href="/podcast-list-dark">Podcast</Link>
                        </li>
                        <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item page_item page-item-2655 current_page_item menu-item-10864">
                          <Link href="/" aria-current="page">Reserved</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Bottom Column 3: Empty */}
                <div className="qodef-grid-item"></div>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Back to top button */}
      <a id="qodef-back-to-top" href="#" className="qodef--predefined">
        <span className="qodef-back-to-top-icon">
          <svg className="qodef-svg--back-to-top qodef-e-back-to-top-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 12" width="12" height="12">
            <path d="M 3.641 5.579 L 1.5 0 L 10.5 5.579 L 1.5 12 L 3.641 5.579 Z" data-name="Path 3386" style={{ transformBox: "fill-box", transformOrigin: "50% 50%" }} transform="matrix(0, -1, 1, 0, 0, 0)" />
          </svg>
        </span>
      </a>

      {/* Podcast popup modal */}
      <div id="qodef-podcast-popup-modal" className="qodef-pp-holder">
        <div className="qodef-content-grid">
          <div className="qodef-m-player-box">
            <div className="qodef-e-image"></div>
            <div className="qodef-m-box-info">
              <a className="qodef-e-title-link" href="#">
                <h6 itemProp="name" className="qodef-e-title entry-title qodef-podcast-title">Live Stream — MOR Radio</h6>
              </a>
              <div className="qodef-m-info-top">
                <div className="qodef-m-episode-number"></div>
              </div>
            </div>
            <div className="qodef-podcast-player"></div>
          </div>
          {/* Close btn for responsive */}
          <button type="button" className="qodef-pp-close">
            <svg className="qodef-svg--close-large" xmlns="http://www.w3.org/2000/svg" width="29.707" height="29.707" viewBox="0 0 29.707 29.707">
              <g fill="none" stroke="currentColor">
                <path d="m29.354.354-29 29" />
                <path d="m.354.354 29 29" />
              </g>
            </svg>
          </button>
        </div>
        <button type="button" className="qodef-pp-close">
          <svg className="qodef-svg--close-large" xmlns="http://www.w3.org/2000/svg" width="29.707" height="29.707" viewBox="0 0 29.707 29.707">
            <g fill="none" stroke="currentColor">
              <path d="m29.354.354-29 29" />
              <path d="m.354.354 29 29" />
            </g>
          </svg>
        </button>
      </div>

      {/* Fullscreen navigation lives in the Header component (interactive).
          IDs must stay unique for the mirrored theme scripts. */}
    </>
  );
}