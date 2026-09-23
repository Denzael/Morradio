import Link from "next/link";
import { Player } from "@/components/Player";
import {
  station,
  podcasts,
  seasons,
  marqueeBands,
  outlineLinks,
} from "@/lib/content";

export const metadata = {
  title: "MOR Radio – Podcast & Radio",
};

function SocialIcons({ color = "#FFFFFF" }: { color?: string }) {
  const icons: { href: string; cls: string; label: string }[] = [
    { href: "https://www.facebook.com/QodeInteractive/", cls: "fab fa-facebook", label: "Facebook" },
    { href: "https://www.instagram.com/qodeinteractive/", cls: "fab fa-instagram", label: "Instagram" },
    { href: "https://soundcloud.com/", cls: "fab fa-soundcloud", label: "SoundCloud" },
    { href: "https://www.youtube.com/QodeInteractiveVideos", cls: "fab fa-youtube", label: "YouTube" },
  ];
  return (
    <div className="elementor-element elementor-element-e2de0be e-con-full e-flex e-con e-child" data-element_type="container">
      <div className="elementor-element elementor-element-3f81106 elementor-widget elementor-widget-text-editor" data-element_type="widget">
        <p>Follow us:</p>
      </div>
      {icons.map((icon) => (
        <div key={icon.label} className="elementor-element elementor-widget elementor-widget-soundsphere_core_icon" data-element_type="widget">
          <div className="elementor-widget-container">
            <span className="qodef-shortcode qodef-m qodef-icon-holder qodef-size--default qodef-layout--normal">
              <a itemProp="url" href={icon.href} target="_blank" rel="noreferrer" aria-label={icon.label}>
                <span className={`qodef-icon-font-awesome ${icon.cls} qodef-icon qodef-e`} style={{ color }}></span>
              </a>
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}

export default function HomePage() {
  return (
    <>
      {/* Hero — Welcome to MOR Radio */}
      <div className="elementor-element elementor-element-139ce5b e-con-full qodef-bg-scale-animation e-flex e-con e-parent" data-element_type="container">
        <div className="elementor-element elementor-element-39cf185 e-flex e-con-boxed e-con e-child" data-element_type="container">
          <div className="e-con-inner">
            <div className="elementor-element elementor-element-10f45d7 e-flex e-con-boxed e-con e-child" data-element_type="container">
              <div className="e-con-inner">
                <div className="elementor-element elementor-element-5d21617 elementor-widget elementor-widget-soundsphere_core_section_title" data-element_type="widget">
                  <div className="elementor-widget-container">
                    <div className="qodef-shortcode qodef-m qodef-section-title qodef-alignment--center">
                      <h3 className="qodef-m-title" style={{ color: "#FFFFFF" }}>
                        {station.tagline}
                      </h3>
                      <p className="qodef-m-text" style={{ marginTop: "20px", color: "#FFFFFF" }}>
                        {station.blurb}
                      </p>
                    </div>
                  </div>
                </div>
                <SocialIcons />
              </div>
            </div>
            <div className="elementor-element elementor-element-da91017 e-con-full e-flex e-con e-child" data-element_type="container">
              <div className="elementor-element elementor-element-23ebdd2 elementor-widget elementor-widget-shortcode" data-element_type="widget">
                <div className="elementor-shortcode">
                  <Player />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* What We Do — Voices. Vibes. Vision. */}
      <div className="elementor-element elementor-element-fa99c21 e-flex e-con-boxed e-con e-parent" data-element_type="container">
        <div className="e-con-inner">
          <div className="elementor-element elementor-element-0b78b13 e-con-full e-flex e-con e-child" data-element_type="container">
            <div className="elementor-element elementor-element-3167f5c e-con-full e-flex e-con e-child" data-element_type="container">
              <div className="elementor-element elementor-element-a2ea204 elementor-widget elementor-widget-soundsphere_core_custom_font" data-element_type="widget">
                <div className="elementor-widget-container">
                  <h1 className="qodef-shortcode qodef-m qodef-custom-font qodef-layout--simple qodef-outlined qodef-alignment--center" style={{ color: "#000000", fontFamily: "Syne" }}>
                    <span data-content="What We Do">What We Do</span>
                  </h1>
                </div>
              </div>
              <div className="elementor-element elementor-element-2d33c57 elementor-widget elementor-widget-soundsphere_core_custom_font" data-element_type="widget">
                <div className="elementor-widget-container">
                  <h2 className="qodef-shortcode qodef-m qodef-custom-font qodef-layout--simple qodef-alignment--center" style={{ color: "#000000", fontFamily: "Syne", fontWeight: 800 }}>
                    <span data-content="Voices. Vibes. Vision.">Voices. Vibes. Vision.</span>
                  </h2>
                </div>
              </div>
              <div className="elementor-element elementor-element-debb75c elementor-widget elementor-widget-soundsphere_core_section_title" data-element_type="widget">
                <div className="elementor-widget-container">
                  <div className="qodef-shortcode qodef-m qodef-section-title qodef-alignment--left">
                    <h6 className="qodef-m-title">Powered by MOR</h6>
                    <p className="qodef-m-text" style={{ marginTop: "12px" }}>
                      MOR Radio celebrates African heritage, highlights the stories of the community, and provides a
                      space for meaningful engagement. We bring: - Daily music shows featuring Afrobeat, gospel, jazz,
                      and classics - Topical discussions on love, identity, and personal development - Business, culture,
                      and youth-focused content - A safe platform for real stories and relatable conversations
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="elementor-element elementor-element-6034cf2 e-con-full e-flex e-con e-child" data-element_type="container">
              <div className="elementor-element elementor-element-a3d7d5a e-con-full e-flex e-con e-child" data-element_type="container">
                <div className="elementor-element elementor-element-42a9367 elementor-widget elementor-widget-soundsphere_core_custom_font" data-element_type="widget">
                  <div className="elementor-widget-container">
                    <p className="qodef-shortcode qodef-m qodef-custom-font qodef-layout--simple qodef-alignment--left" style={{ color: "#000000", fontFamily: "Syne", fontSize: "22px", fontWeight: 600 }}>
                      <span data-content="18.oo-22.45">18.oo-22.45</span>
                    </p>
                  </div>
                </div>
                <div className="elementor-element elementor-element-ee6b0e1 elementor-widget elementor-widget-soundsphere_core_section_title" data-element_type="widget">
                  <div className="elementor-widget-container">
                    <div className="qodef-shortcode qodef-m qodef-section-title qodef-alignment--left qodef-title-break--disabled">
                      <h2 className="qodef-m-title" style={{ color: "#000000" }}>
                        Live time podcast
                      </h2>
                      <p className="qodef-m-text" style={{ marginTop: "13px", color: "#000000" }}>
                        Broadcast bold ideas and powerful conversations. Live Time Podcast connects voices across Africa
                        and beyond.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="elementor-element elementor-element-99195e6 e-con-full e-flex e-con e-child" data-element_type="container">
                <div className="elementor-element elementor-element-d6db0df elementor-widget elementor-widget-soundsphere_core_section_title" data-element_type="widget">
                  <div className="elementor-widget-container">
                    <div className="qodef-shortcode qodef-m qodef-section-title qodef-alignment--left">
                      <h6 className="qodef-m-title">Africa Speaks: The World Listens.</h6>
                      <p className="qodef-m-text" style={{ marginTop: "10px" }}>
                        Empowering African creators to share real stories in real time. Connect, engage, and broadcast
                        without borders.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="elementor-element elementor-element-5169011 e-con-full e-flex e-con e-child" data-element_type="container">
                <div className="elementor-element elementor-element-862ca4f elementor-widget elementor-widget-soundsphere_core_stamp" data-element_type="widget">
                  <div className="elementor-widget-container">
                    <div className="qodef-shortcode qodef-m qodef-stamp" data-appearing-delay="0">
                      <div className="qodef-m-circle"></div>
                      <div className="qodef-m-text" data-count="23">
                        See what we got for you
                      </div>
                      <div className="qodef-m-centered-text" style={{ fontSize: "21px", textDecoration: "underline" }}>
                        Check Schedule
                      </div>
                      <Link href="/our-schedule" target="_self" aria-label="Check Schedule"></Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Podcast carousel */}
      <div className="elementor-element elementor-element-a932037 e-con-full e-flex e-con e-parent" data-element_type="container">
        <div className="elementor-element elementor-element-7749938 elementor-widget elementor-widget-soundsphere_core_podcast_list" data-element_type="widget">
          <div className="elementor-widget-container">
            <div className="qodef-shortcode qodef-m qodef-podcast-list qodef-skin--light qodef-item-layout--advanced qodef-grid qodef-gutter--custom qodef-col-num--3">
              <div className="qodef-grid-inner mor-grid-3">
                {podcasts.map((podcast) => (
                  <article key={podcast.slug} className="qodef-e qodef-item--full podcast-item type-podcast-item status-publish has-post-thumbnail hentry">
                    <div className="qodef-e-inner">
                      <div className="qodef-e-image">
                        <div className="qodef-e-media-image">
                          <Link itemProp="url" href={`/podcast-item/${podcast.slug}`}>
                            <img decoding="async" width="800" height="750" src={podcast.image} className="attachment-full size-full" alt={podcast.title} loading="lazy" />
                          </Link>
                        </div>
                        <div className="qodef-e-episode-number">{podcast.episode}</div>
                      </div>
                      <div className="qodef-e-content">
                        <div className="qodef-e-content-left">
                          <div className="qodef-e-info-category">
                            {podcast.categories.map((category) => (
                              <Link key={category} itemProp="url" className="qodef-e-category" href="/podcast-category/entertainment">
                                {category}
                              </Link>
                            ))}
                          </div>
                          <h5 itemProp="name" className="qodef-e-title entry-title">
                            <Link itemProp="url" className="qodef-e-title-link" href={`/podcast-item/${podcast.slug}`}>
                              {podcast.title}
                            </Link>
                          </h5>
                        </div>
                        <div className="qodef-e-content-bottom">
                          <div className="qodef-podcast-player" data-playing-id={podcast.slug}>
                            <audio preload="none">
                              <source src={podcast.audio} type="audio/mp3" />
                            </audio>
                          </div>
                        </div>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Marquee bands */}
      <div className="elementor-element elementor-element-d190e16 e-con-full e-flex e-con e-parent" data-element_type="container">
        {marqueeBands.map((band, i) => (
          <div key={i} className="elementor-element elementor-widget elementor-widget-soundsphere_core_text_marquee" data-element_type="widget">
            <div className="elementor-widget-container">
              <div
                className={`qodef-shortcode qodef-m qodef-text-marquee qodef-layout--default qodef-direction--${i % 2 === 0 ? "left" : "right"}${i === 0 ? " qodef-rotate--yes" : ""}`}
                style={
                  {
                    "--qode-marquee-duration": "40s",
                    "--qode-content-background": band.bg,
                    "--qode-content-padding-top": "10px",
                    "--qode-content-padding-bottom": "10px",
                  } as React.CSSProperties
                }
              >
                <div className="qodef-m-content">
                  <div className="qodef-m-content-inner">
                    {[0, 1, 2].map((n) => (
                      <span key={n} className={`qodef-m-text-${n + 1}`} style={{ color: band.color }} data-title={band.items[n]}>
                        {band.items[n]}
                      </span>
                    ))}
                    <span className="qodef-m-separator" style={{ color: band.color }}>*</span>
                    {[0, 1, 2].map((n) => (
                      <span key={`r-${n}`} className={`qodef-m-text-${n + 1}`} style={{ color: band.color }} data-title={band.items[n]}>
                        {band.items[n]}
                      </span>
                    ))}
                    <span className="qodef-m-separator" style={{ color: band.color }}>*</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Previous season */}
      <div className="elementor-element elementor-element-16a9735 e-flex e-con-boxed e-con e-parent" data-element_type="container">
        <div className="e-con-inner">
          <div className="elementor-element elementor-element-c531729 e-con-full e-flex e-con e-child" data-element_type="container">
            <div className="elementor-element elementor-element-a3da7bf elementor-widget elementor-widget-text-editor" data-element_type="widget">
              <h3>Previous season</h3>
            </div>
            <div className="elementor-element elementor-element-8b6dd9d elementor-widget elementor-widget-soundsphere_core_podcast_season_list" data-element_type="widget">
              <div className="elementor-widget-container">
                <div className="qodef-shortcode qodef-m qodef-podcast-season-list qodef-layout--standard qodef-grid qodef-layout--columns qodef-col-num--3">
                  <div className="qodef-grid-inner mor-grid-3">
                    {seasons.map((season) => (
                      <article key={season.slug} className="qodef-e qodef-grid-item qodef-item--square">
                        <div className="qodef-e-inner">
                          <div className="qodef-e-image">
                            <Link itemProp="url" className="qodef-e-image-link" href={`/podcast-season/${season.slug}`}>
                              <img decoding="async" width="648" height="650" src={season.image} className="attachment-soundsphere_core_image_size_square size-soundsphere_core_image_size_square" alt={season.host} loading="lazy" />
                            </Link>
                          </div>
                          <div className="qodef-e-content">
                            <p itemProp="name" className="qodef-e-title title-season entry-title">
                              <Link itemProp="url" className="qodef-e-tagline-link" href={`/podcast-season/${season.slug}`}>
                                {season.host}
                              </Link>
                            </p>
                            <h5 className="qodef-e-tagline">
                              <Link itemProp="url" className="qodef-e-tagline-link" href={`/podcast-season/${season.slug}`}>
                                {season.tagline}
                              </Link>
                            </h5>
                            {season.episodes && (
                              <div className="qodef-season-items">
                                {season.episodes.map((episode) => (
                                  <div key={episode.slug} className="qodef-m-item">
                                    <div className="qodef-m-player-box">
                                      <div className="qodef-podcast-player" data-playing-id={episode.slug}>
                                        <audio preload="none">
                                          <source src={episode.audio} type="audio/mp3" />
                                        </audio>
                                      </div>
                                      <div className="qodef-m-info">
                                        <Link itemProp="url" className="qodef-e-title-link" href={`/podcast-item/${episode.slug}`}>
                                          {episode.title}
                                        </Link>
                                      </div>
                                    </div>
                                    <div className="qodef-m-info-right">
                                      <div className="qodef-podcast-video-length">{episode.length}</div>
                                    </div>
                                  </div>
                                ))}
                              </div>
                            )}
                            <div className="qodef-e-more-btn">
                              <Link className="qodef-shortcode qodef-m qodef-button qodef-layout--textual qodef-html--link" href={`/podcast-season/${season.slug}`} target="_self">
                                <span className="qodef-m-text">View all episodes</span>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </article>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Giant MORRADIO + outline links */}
      <div className="elementor-element elementor-element-1bec1a6 e-con-full e-flex e-con e-parent" data-element_type="container">
        <div className="elementor-element elementor-element-fd9a882 e-con-full e-flex e-con e-child" data-element_type="container">
          <div className="elementor-element elementor-element-c73d164 elementor-widget elementor-widget-soundsphere_core_custom_font" data-element_type="widget">
            <div className="elementor-widget-container">
              <p className="qodef-shortcode qodef-m qodef-custom-font qodef-layout--simple qodef-alignment--center mor-giant" style={{ fontFamily: "Syne" }}>
                <span data-content="MORRADIO">MORRADIO</span>
              </p>
            </div>
          </div>
        </div>
        <div className="elementor-element elementor-element-3f7938c e-con-full e-flex e-con e-child" data-element_type="container">
          {outlineLinks.map((link) => (
            <div key={link.href} className="elementor-element e-con-full e-flex e-con e-child" data-element_type="container">
              <div className="elementor-element elementor-widget elementor-widget-soundsphere_core_text_marquee" data-element_type="widget">
                <div className="elementor-widget-container">
                  <div className="qodef-shortcode qodef-m qodef-text-marquee qodef-layout--default qodef-direction--left qodef-text-outline-style">
                    <div className="qodef-m-content" style={{ fontSize: "74px", lineHeight: "88px", fontWeight: 800 }}>
                      <div className="qodef-m-content-inner">
                        <Link className="qodef-m-text-link" itemProp="url" href={link.href} target="_self">
                          <span className="qodef-m-text-1" data-title={link.title}>{link.title}</span>
                          <span className="qodef-m-text-label">{link.label}</span>
                          <span className="qodef-m-text-2" data-title={link.title}>{link.title}</span>
                          <span className="qodef-m-text-label">{link.label}</span>
                          <span className="qodef-m-text-3" data-title={link.title}>{link.title}</span>
                          <span className="qodef-m-text-label">{link.label}</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
          <div className="elementor-element elementor-element-9981f9c e-con-full e-flex e-con e-child" data-element_type="container">
            <div className="elementor-element elementor-element-b2c1339 e-flex e-con-boxed e-con e-child" data-element_type="container">
              <div className="e-con-inner">
                <div className="elementor-element elementor-element-56932af e-flex e-con-boxed e-con e-child" data-element_type="container">
                  <div className="e-con-inner">
                    <div className="elementor-element elementor-element-510a236 e-con-full e-flex e-con e-child" data-element_type="container">
                      <div className="elementor-element elementor-element-a6eca14 e-flex e-con-boxed e-con e-child" data-element_type="container">
                        <div className="e-con-inner">
                          <div className="elementor-element elementor-element-d69ab24 elementor-widget elementor-widget-soundsphere_core_icon" data-element_type="widget">
                            <div className="elementor-widget-container">
                              <span className="qodef-shortcode qodef-m qodef-icon-holder qodef-size--medium qodef-layout--normal">
                                <a itemProp="url" href="https://www.apple.com/" target="_self" aria-label="Apple">
                                  <span className="qodef-icon-font-awesome fab fa-apple qodef-icon qodef-e" style={{ fontSize: "35px" }}></span>
                                </a>
                              </span>
                            </div>
                          </div>
                          <div className="elementor-element elementor-element-5abb1e5 elementor-widget elementor-widget-soundsphere_core_icon" data-element_type="widget">
                            <div className="elementor-widget-container">
                              <span className="qodef-shortcode qodef-m qodef-icon-holder qodef-size--medium qodef-layout--normal">
                                <a itemProp="url" href="https://play.google.com/store/games" target="_self" aria-label="Google Play">
                                  <span className="qodef-icon-font-awesome fab fa-google-play qodef-icon qodef-e" style={{ fontSize: "30px" }}></span>
                                </a>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="elementor-element elementor-element-336db37 e-con-full e-flex e-con e-child" data-element_type="container">
                      <div className="elementor-element elementor-element-309270b elementor-widget elementor-widget-text-editor" data-element_type="widget">
                        <p>© 2025 <Link href="/">MORRADIO</Link>, All Rights Reserved</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="elementor-element elementor-element-e57ff3c e-flex e-con-boxed e-con e-child" data-element_type="container">
              <div className="e-con-inner">
                <div className="elementor-element elementor-element-731a234 elementor-widget elementor-widget-text-editor" data-element_type="widget">
                  <p>Follow us: </p>
                </div>
                <SocialIcons color="" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Subscribe */}
      <section className="elementor-section elementor-top-section elementor-element elementor-section-content-middle elementor-section-boxed" data-element_type="section" id="sub">
        <div className="elementor-container elementor-column-gap-no mor-split">
          <div className="elementor-column elementor-col-50 elementor-top-column" data-element_type="column">
            <div className="elementor-widget-wrap elementor-element-populated">
              <div className="elementor-element elementor-widget elementor-widget-heading" data-element_type="widget">
                <h2 className="elementor-heading-title elementor-size-default">Let’s Stay Connected</h2>
              </div>
              <div className="elementor-element elementor-widget elementor-widget-text-editor" data-element_type="widget">
                <p>
                  Be the first to hear about new radio programs, exclusive interviews, special broadcasts, and
                  behind-the-scenes content. Delivered straight to your inbox, no static, just signal.
                </p>
              </div>
            </div>
          </div>
          <div className="elementor-column elementor-col-50 elementor-top-column" data-element_type="column">
            <div className="elementor-widget-wrap elementor-element-populated">
              <div className="elementor-element elementor-widget elementor-widget-form" data-element_type="widget">
                <form className="elementor-form" method="post" name="New Form" aria-label="New Form">
                  <input type="hidden" name="post_id" value="2655" />
                  <input type="hidden" name="form_id" value="324178b" />
                  <input type="hidden" name="queried_id" value="2655" />
                  <div className="elementor-form-fields-wrapper elementor-labels-above">
                    <div className="elementor-field-type-email elementor-field-group elementor-column elementor-field-group-email elementor-col-100 elementor-field-required">
                      <input size={1} type="email" name="form_fields[email]" id="form-field-email" className="elementor-field elementor-size-sm elementor-field-textual" placeholder="Your Email" required />
                    </div>
                    <div className="elementor-field-group elementor-column elementor-field-type-submit elementor-col-50 e-form__buttons">
                      <button className="elementor-button elementor-size-sm" type="submit">
                        <span className="elementor-button-content-wrapper">
                          <span className="elementor-button-text">Subscribe</span>
                        </span>
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
