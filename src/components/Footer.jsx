import React from "react"
import "./Footer.Styles.css"
import { StaticImage } from "gatsby-plugin-image"

export default function Footer() {
  return (
    <>
      <section className="footer-section mt-0">
        <div className="container-fluid footer d-block">
          <div className="container-fluid footer-shadow">
            <footer className="pb-0">
              <div className="footer-container m-auto">
                <div className="col-12 d-flex justify-content-center p-4 logo-container d-block d-sm-none my-5">
                  <StaticImage
                    src="../images/explore_credit_white_RGB1.png"
                    alt="A kitten"
                  />
                </div>

                <div className="row p-1 links-container w-100 m-auto">
                  <div className="my-auto col-3 d-none d-sm-block align-middle">
                    <StaticImage
                      src="../images/explore_credit_white_RGB1.png"
                      alt="A kitten"
                    />
                  </div>

                  <div className="my-auto col-6 col-sm-3 mx-0 px-0 align-middle">
                    <ul className="">
                      <li>
                        <a href="https://explorecredit.com/how-it-works/">
                          How it Works
                        </a>
                      </li>
                      <li>
                        <a href="https://explorecredit.com/rates/">
                          Rates &amp; Terms
                        </a>
                      </li>
                      <li>
                        <a href="https://explorecredit.com/how-it-works/">
                          Rewards &amp; Perks
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="my-auto col-6 col-sm-3 mx-0 px-0">
                    <ul>
                      <li>
                        <a href="https://explorecredit.com/about-us/">
                          About Us
                        </a>
                      </li>
                      <li>
                        <a href="https://explorecredit.com/about-us/">
                          Affiliates & Licenses
                        </a>
                      </li>

                      <li>
                        <a href="https://explorecredit.com/contact-us/">
                          Contact Us
                        </a>
                      </li>
                    </ul>
                  </div>

                  <div className="my-auto col-3">
                    <div className="bnt-cotainer d-none d-sm-block">
                      <div className="col-12 py-2 ">
                        <button
                          type="button"
                          className="btn btn-outline-info btn-lg"
                        >
                          Apply Now
                        </button>
                      </div>
                      <div className="col-12 py-2 ">
                        <button
                          type="button"
                          className="btn btn-outline-info btn-lg"
                        >
                          Log In
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bnt-cotainer d-block d-sm-none">
                  <div className="col-12 p-2">
                    <button
                      type="button"
                      className="btn btn-outline-info btn-lg"
                    >
                      Apply Now
                    </button>
                  </div>
                  <div className="col-12 p-2 pb-4">
                    <button
                      type="button"
                      className="btn btn-outline-info btn-lg"
                    >
                      Log In
                    </button>
                  </div>
                </div>
                <div className="row w-100 m-auto mobile-border-bottom">
                  <div className="legal-links-container  text-center p-3 d-block d-sm-flex justify-content-sm-around  m-auto">
                    <p className="col-sm-4 my-sm-auto">
                      <a href="https://explorecredit.com/privacy-policy">
                        Privacy Policy
                      </a>
                    </p>
                    <p className="border-1 col-sm-4 my-sm-auto">
                      <a href="https://explorecredit.com/termsandconditions">
                        Terms & Conditions
                      </a>
                    </p>
                    <p className="col-sm-4 my-sm-auto mb-0">
                      <a href="https://explorecredit.com/about-us/">
                        Licenses, Affiliations & Regulatory{" "}
                      </a>
                    </p>
                  </div>
                </div>

                <div className="logos-container row d-flex justify-content-center d-block d-sm-flex justify-content-sm-around w-8">
                  <StaticImage
                    src="../images/logo_verisign_black.png"
                    alt="A kitten"
                  />
                </div>

                <div className="row w-100 m-auto mobile-border-bottom">
                  <div className="text-center p-4 contact-info-container d-block d-sm-flex justify-content-sm-around  m-auto">
                    <p className="border-2 mb-3 m-sm-0 align-middle col-sm-5">
                      {" "}
                      <a href="tel:844-355-5626">844-355-5626 / 844-355-LOAN</a>
                    </p>
                    <p className="d-block d-sm-none align-middle">
                      Explore Credit Operational Dept. ,{" "}
                    </p>
                    <p className="d-block d-sm-none align-middle">
                      P.O. Box 260269, Atlanta, GA 30326
                    </p>
                    <p className="d-none d-sm-block align-middle col-sm-6">
                      Explore Credit Operational Dept., P.O. Box 260269,
                      Atlanta, GA 30326
                    </p>
                  </div>
                </div>

                <div className="row text-center legal-container p-4 w-100 m-auto">
                  <small>
                    All installment loans are underwritten by WLCC Lending JEM
                    doing business as Explore Credit. Explore Credit is a Native
                    American owned business operating within the interior
                    boundaries of the Pine Ridge Reservation of the Oglala Sioux
                    Tribe, a sovereign nation located in the United States.{" "}
                    <br />
                    <br />
                    WLCC Lending JEM is an entity of the Wakpamni Lake Community
                    Corporation (WLCC), a tribal corporation wholly owned by the
                    Wakpamni Lake Community. The Wakpamni Lake Community is a
                    local municipal subsidiarygovernment under the Oglala Sioux
                    Tribe. WLCC is incorporated under and governed by the laws
                    of the Oglala Sioux Tribe, a federally recognized Indian
                    Tribe, and the regulations of the Wakpamni Lake Community.
                    WLCC operates independently of the Oglala Sioux Tribe.
                    Correspondence should be directed to WLCC. As a tribal
                    government, the Wakpamni Lake Community Corporation is a
                    sovereign corporation and follows all applicable tribal and
                    federal laws. State laws, regulations, and interest rates
                    are not applicable to WLCC Lending JEM DBA Explore Credit or
                    WLCC. <br />
                    <br />
                    Typically, Explore Credit reviews your information in
                    real-time to determine whether your information meets our
                    lending criteria. You acknowledge that by completing and
                    submitting the website application that you are applying for
                    a loan. We verify applicant information through national
                    databases including, but not limited to, Clarity and Factor
                    Trust and we may pull your credit to determine your
                    eligibility and ability to repay.
                    <br />
                    <br />
                    Explore Credit does not lend to residents of AL, AK, AR, CT,
                    GA, MA, MD, NC, NH, NJ, NY, PA, SD, VA, VT, WV Guam and
                    Puerto Rico. Availability of installment loans are subject
                    to change at any time at the sole discretion of Explore
                    Credit.
                    <br />
                    <br />
                    Please Note: Installment loans should be used for short-term
                    financial needs only, not as a long-term financial solution.
                    Customers with credit difficulties should seek credit
                    counseling. Explore Credit will only allow a customer to
                    have one loan at a time.
                  </small>
                </div>
                <div className="row copyright-container text-center p-3 d-flex justify-content-center w-100 m-auto">
                  <small>
                    &copy; Copyright 2021. Explore Credit All Rights Reserved
                  </small>
                </div>
              </div>
            </footer>
          </div>
        </div>
      </section>
    </>
  )
}
