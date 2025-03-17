import React from "react";
import Button from "../buttons/Button";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="footer">
      <div className="containerWrapper">
        <div className="wrapper_footer">
          <div className="dest_news">
            <div className="dest_ft">
              <div className="dt_nw_wrapper">
                <div className="btn_wrapper expobtn">
                  <Link href="" className="footer_button w-inline-block">
                    Magazine Subscription
                  </Link>
                </div>
                {/* <Button /> */}
              </div>
            </div>
            <div className="news_ft">
              <div className="dt_nw_wrapper">
                <div className="btn_wrapper subbtn">
                  <div className="">
                    <div className="form-block w-form">
                      <form
                        id="wf-form-Subscribe-Form"
                        name="wf-form-Subscribe-Form"
                        data-name="Subscribe Form"
                        method="get"
                        className="subscribe_flex"
                        data-wf-page-id="6713971095c4a7cab5d924fd"
                        data-wf-element-id="ba614d1a-6499-4c2c-764e-b376071a5795"
                        aria-label="Subscribe Form"
                      >
                        <input
                          className="field_prefooter w-input"
                          maxLength="256"
                          name="email-2"
                          data-name="Email 2"
                          placeholder="Enter your e-mail address"
                          type="email"
                          id="email-2"
                          required=""
                        />
                        <input
                          type="submit"
                          data-wait="Please wait..."
                          className="footer_button w-button"
                          value="Subscribe"
                        />
                      </form>
                      <div
                        className="subscribe_thanks w-form-done"
                        role="region"
                        aria-label="Subscribe Form success"
                      >
                        <div className="thanks_txt">
                          Thanks for subscribing! You'll be the first to know
                          about the launch.
                        </div>
                      </div>
                      <div
                        className="error_state w-form-fail"
                        role="region"
                        aria-label="Subscribe Form failure"
                      >
                        <div>
                          Oops! Something went wrong while submitting the form.
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* <Link href="" className="footer_button w-inline-block">
                  Explore Destinations
                </Link> */}
                </div>
                {/* <Button /> */}
              </div>
            </div>
          </div>
          <div className="footer_links">
            <div className="wrapper_footer_links">
              <div className="flexbox_footer">
                <div className="div-block-2">
                  <div className="title_footer">Motoring</div>
                  <div className="links_flex">
                    <Link href="" className="footer_link w-inline-block ">
                      Sedans
                    </Link>
                    <Link href="" className="footer_link w-inline-block">
                      Sports Cars
                    </Link>
                    <Link href="" className="footer_link w-inline-block">
                      Racing
                    </Link>
                  </div>
                </div>
                <div className="div-block-3">
                  <div className="title_footer">Yachts & Aviation</div>
                  <div className="links_flex">
                    <Link href="" className="footer_link w-inline-block ">
                      Boats
                    </Link>
                    <Link href="" className="footer_link w-inline-block ">
                      Rambling reporter
                    </Link>
                    <Link href="" className="footer_link w-inline-block ">
                      Private jets
                    </Link>
                    <Link href="" className="footer_link w-inline-block">
                      Future Tech
                    </Link>
                  </div>
                </div>
                <div className="div-block-3">
                  <div className="title_footer">Style</div>
                  <div className="links_flex">
                    <Link href="" className="footer_link w-inline-block ">
                      Timepieces
                    </Link>
                    <Link href="" className="footer_link w-inline-block ">
                      Jewellery
                    </Link>
                    <Link href="" className="footer_link w-inline-block ">
                      Accessories
                    </Link>
                    <Link href="" className="footer_link w-inline-block">
                      Bespoke
                    </Link>
                  </div>
                </div>
                <div className="div-block-3">
                  <div className="title_footer">socials</div>
                  <div className="links_flex">
                    <Link href="" className="footer_link w-inline-block ">
                      Pinterest
                    </Link>
                    <Link href="" className="footer_link w-inline-block">
                      Instagram
                    </Link>
                    <Link href="" className="footer_link w-inline-block">
                      Youtube
                    </Link>
                    <Link href="" className="footer_link w-inline-block">
                      Facebook
                    </Link>
                    <Link href="" className="footer_link w-inline-block">
                      TikTok
                    </Link>
                  </div>
                </div>
              </div>
              <div className="last_line">
                <div className="flexbox_line">
                  <div className="left_rights">
                    <Link
                      href=""
                      className="footer_link just_rights w-inline-block"
                    >
                      © 2025 Robb Report
                    </Link>
                  </div>
                  <div className="privacy_box">
                    <Link
                      href=""
                      target="_blank"
                      className="footer_link w-inline-block"
                    >
                      Privacy Policy
                    </Link>
                    <Link
                      href=""
                      target="_blank"
                      className="footer_link second w-inline-block"
                    >
                      Cookie Policy
                    </Link>
                    <Link
                      href=""
                      target="_blank"
                      className="footer_link second w-inline-block"
                    >
                      Imprint
                    </Link>
                  </div>
                  {/* <div className="website_by">
                    <Link
                      href=""
                      target="_blank"
                      className="footer_link web_by w-inline-block"
                    >
                      Website by Zerror Studio
                    </Link>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
