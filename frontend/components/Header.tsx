"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { menuItems, station } from "@/lib/content";
import { ThemeSwitch } from "./ThemeSwitch";

function setBodyClass(cls: string, open: boolean) {
  document.body.classList.toggle(cls, open);
}

export function Header() {
  const pathname = usePathname();
  const [menuOpened, setMenuOpened] = useState(false);
  const [searchOpened, setSearchOpened] = useState(false);

  function toggleFullscreen(open?: boolean) {
    const willOpen = open ?? !menuOpened;
    setMenuOpened(willOpen);
    setBodyClass("qodef-fullscreen-menu-opened", willOpen);
  }

  function toggleSearch(open?: boolean) {
    const willOpen = open ?? !searchOpened;
    setSearchOpened(willOpen);
    setBodyClass("qodef-search-opened", willOpen);
  }

  function isActive(href: string) {
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(`${href}/`);
  }

  return (
    <>
      <header id="qodef-page-header" role="banner">
        <div id="qodef-page-header-inner" className="qodef-header-logo-align-top qodef-skin--light">
          <div className="qodef-header-left-wrapper">
            <div className="qodef-top-content"></div>
            <div className="qodef-bottom-content">
              <button
                type="button"
                onClick={() => toggleFullscreen()}
                aria-expanded={menuOpened}
                aria-label={menuOpened ? "Close menu" : "Open menu"}
                className="qodef-opener-icon qodef-m qodef-source--textual qodef-fullscreen-menu-opener"
              >
                <span className="qodef-m-icon qodef--open">
                  <span className="qodef-menu-opener-text">Menu</span>
                  <span className="qodef-menu-opener-label">Explore Podcasts</span>
                </span>
                <span className="qodef-m-icon qodef--close">
                  <span className="qodef-menu-opener-text">Close</span>
                  <span className="qodef-menu-opener-label">Explore Podcasts</span>
                </span>
              </button>
              <div className="qodef-widget-holder qodef--one">
                <ThemeSwitch />
              </div>
            </div>
          </div>
          <div className="qodef-logo-wrapper">
            <Link
              href="/"
              className="qodef-header-logo-link qodef-height--set qodef-source--image"
              rel="home"
            >
              <img
                loading="lazy"
                width="500"
                height="500"
                src={station.logo}
                className="qodef-header-logo-image qodef--main"
                alt="MOR Radio logo"
                itemProp="image"
              />
              <img
                loading="lazy"
                width="500"
                height="500"
                src={station.logo}
                className="qodef-header-logo-image qodef--dark"
                alt="MOR Radio logo dark"
                itemProp="image"
              />
              <img
                loading="lazy"
                width="500"
                height="500"
                src={station.logo}
                className="qodef-header-logo-image qodef--light"
                alt="MOR Radio logo light"
                itemProp="image"
              />
            </Link>
          </div>
          <div className="qodef-header-right-wrapper">
            <div className="qodef-widget-holder qodef--two">
              <div className="widget widget_block" data-area="minimal-header-textual">
                <div className="wp-block-group qodef-custom-widget-class is-vertical is-content-justification-right is-layout-flex wp-container-core-group-is-layout-db1889d0 wp-block-group-is-layout-flex">
                  <h2 className="wp-block-heading has-text-align-right qodef--has-custom-underline-thick">
                    <Link href="/podcast-list">podcast</Link>
                  </h2>
                  <div className="widget widget_soundsphere_core_separator">
                    <div className="qodef-shortcode qodef-m qodef-separator clear qodef-show--yes qodef-show-1600--yes qodef-show-1512--yes qodef-show-1368--yes qodef-show-1200--yes qodef-show-1024--yes qodef-show-880--yes qodef-show-680--yes">
                      <div
                        className="qodef-m-line"
                        style={{
                          borderColor: "#ffffff00",
                          width: "0px",
                          borderBottomWidth: "0px",
                          marginTop: "4px",
                          marginRight: "0px",
                          marginBottom: "0px",
                          marginLeft: "0px",
                        }}
                      ></div>
                    </div>
                  </div>
                  <p
                    className="has-text-align-right has-white-color has-text-color has-link-color wp-elements-1 wp-block-paragraph"
                    style={{ fontSize: "12px", fontStyle: "normal", fontWeight: "600", letterSpacing: "0.02em" }}
                  >
                    LISTEN TO THE BEST PODCAST ONLINE
                  </p>
                  <p style={{ marginTop: "8px" }}>
                    <button
                      type="button"
                      onClick={() => toggleSearch(true)}
                      className="qodef-m-text"
                      style={{ fontSize: "12px", letterSpacing: "0.08em", textTransform: "uppercase" }}
                    >
                      Find
                    </button>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <form action="/" className="qodef-search-cover-form" method="get">
          <div className="qodef-m-inner">
            <h5 className="qodef-m-search-title">What are you Looking for?</h5>
            <p className="qodef-m-search-text">
              Search podcasts, hosts, schedules and stories across MOR Radio.
            </p>
            <div className="qodef-m-form-field-holder">
              <input
                type="text"
                placeholder="Find"
                name="s"
                className="qodef-m-form-field"
                autoComplete="off"
                required
              />
              <button
                type="submit"
                className="qodef-opener-icon qodef-m qodef-source--textual qodef-m-form-submit"
              >
                <span className="qodef-menu-opener-text">Menu</span>
                <span className="qodef-menu-opener-label">Explore Podcasts</span>
              </button>
            </div>
          </div>
          <button
            type="button"
            onClick={() => toggleSearch(false)}
            className="qodef-opener-icon qodef-m qodef-source--textual qodef-m-close qodef-search-close"
          >
            <span className="qodef-m-icon">
              <span className="qodef-menu-opener-text">Close</span>
              <span className="qodef-menu-opener-label">Explore Podcasts</span>
            </span>
          </button>
        </form>
      </header>
      <header id="qodef-page-mobile-header" role="banner">
        <div id="qodef-page-mobile-header-inner" className="">
          <button
            type="button"
            onClick={() => toggleFullscreen()}
            aria-expanded={menuOpened}
            aria-label={menuOpened ? "Close menu" : "Open menu"}
            className="qodef-opener-icon qodef-m qodef-source--textual qodef-fullscreen-menu-opener"
          >
            <span className="qodef-m-icon qodef--open">
              <span className="qodef-menu-opener-text">Menu</span>
              <span className="qodef-menu-opener-label">Explore Podcasts</span>
            </span>
            <span className="qodef-m-icon qodef--close">
              <span className="qodef-menu-opener-text">Close</span>
              <span className="qodef-menu-opener-label">Explore Podcasts</span>
            </span>
          </button>
          <div className="qodef-widget-holder qodef--one">
            <div className="widget widget_block" data-area="minimal-header-touch">
              <div className="wp-block-qi-blocks-section-title qodef-block-container qodef-widget-block-b1671a33 qodef--has-custom-underline-thick qodef-hide-on--mobile">
                <div className="qi-block-section-title qodef-block qodef-m qodef-link--underline-draw qodef-subtitle-icon--left">
                  <p className="qodef-m-text">
                    <Link href="/podcast-list">PODCAST</Link>
                  </p>
                </div>
              </div>
            </div>
            <div className="widget widget_block" data-area="minimal-header-touch">
              <div className="wp-block-qi-blocks-section-title qodef-block-container qodef-widget-block-f67c74cb qodef--has-custom-underline-thick qodef-hide-on--desktop qodef-hide-on--tablet">
                <div className="qi-block-section-title qodef-block qodef-m qodef-link--underline-draw qodef-subtitle-icon--left">
                  <p className="qodef-m-text">
                    <Link href="/podcast-list">PODCAST</Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div id="qodef-fullscreen-area" className="qodef--close-cursor">
        <div id="qodef-fullscreen-area-inner">
          <nav className="qodef-fullscreen-menu" role="navigation" aria-label="Full Screen Menu">
            <ul id="menu-fullscreen-menu-2" className="menu">
              {menuItems.map((item) => (
                <li key={item.href} className="menu-item menu-item-type-post_type menu-item-object-page">
                  <Link
                    href={item.href}
                    onClick={() => toggleFullscreen(false)}
                    aria-current={isActive(item.href) ? "page" : undefined}
                    className={isActive(item.href) ? "qodef--active" : undefined}
                  >
                    <span className="qodef-menu-item-text">
                      <span className="qodef-menu-item-text-inner">{item.label}</span>
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className="qodef-widget-fullscreen-menu-widget-area">
            <div id="qodef-fullscreen-widget-area-one">
              <div className="widget widget_block widget_text" data-area="side-area">
                <p className="wp-block-paragraph">text us:</p>
              </div>
              <div className="widget widget_block" data-area="side-area">
                <h4>
                  <a href={`mailto:${station.email}`} style={{ fontSize: "16px" }}>
                    {" "}
                    {station.email}{" "}
                  </a>
                </h4>
              </div>
            </div>
            <div id="qodef-fullscreen-widget-area-two">
              <div className="widget widget_block" data-area="side-area">
                <div className="wp-block-group is-nowrap is-layout-flex wp-container-core-group-is-layout-8f761849 wp-block-group-is-layout-flex">
                  <p
                    className="qodef-custom-paragraph has-text-color has-link-color wp-elements-2 wp-block-paragraph"
                    style={{ color: "#fe7f3f", fontSize: "13px" }}
                  >
                    NEVER MISS AN EPISODE
                  </p>
                  <div className="widget widget_soundsphere_core_separator">
                    <div className="qodef-shortcode qodef-m qodef-separator clear qodef-show--yes qodef-show-1600--yes qodef-show-1512--yes qodef-show-1368--yes qodef-show-1200--yes qodef-show-1024--yes qodef-show-880--yes qodef-show-680--yes">
                      <div
                        className="qodef-m-line"
                        style={{
                          borderColor: "#fe7f3f",
                          borderStyle: "solid",
                          width: "1px",
                          borderBottomWidth: "15px",
                          marginTop: "13px",
                        }}
                      ></div>
                    </div>
                  </div>
                  <div className="wp-block-qi-blocks-button qodef-block-container qodef-widget-block-afeff08d">
                    <a
                      className="qi-block-button qodef-block qodef-m qodef-layout--textual qodef-type--standard qodef-text-underline qodef-underline--left qodef-hover--icon-move-horizontal-short"
                      href="/#sub"
                      onClick={() => toggleFullscreen(false)}
                    >
                      <span className="qodef-m-text">subscribe now</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button
            type="button"
            onClick={() => toggleFullscreen(false)}
            className="qodef-opener-icon qodef-m qodef-source--textual qodef-m-close"
            aria-label="Close menu"
          >
            <span className="qodef-m-icon">
              <span className="qodef-menu-opener-text">Close</span>
            </span>
          </button>
        </div>
      </div>
    </>
  );
}
