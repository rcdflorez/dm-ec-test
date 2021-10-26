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
                <div className="col-12 d-flex justify-content-center p-4 logo-container d-block d-sm-none ">
                  <StaticImage
                    src="../images/explore_credit_white_RGB1.png"
                    alt=""
                    height={80}
                    className="mt-5"
                  />
                </div>

                <div className="row p-1 links-container w-100 m-auto ">
                  <div className="my-auto col-12 d-none d-sm-block align-middle text-center py-3 pb-4">
                    <StaticImage
                      src="../images/explore_credit_white_RGB1.png"
                      alt=""
                    />
                  </div>

                  <div className="my-auto col-6 col-sm-3 mx-0 px-0 align-middle d-none">
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
                  <div className="my-auto col-6 col-sm-3 mx-0 px-0 d-none">
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

                  <div className="my-auto col-3 d-none">
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
                <div className="bnt-cotainer d-sm-none d-none">
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
                      <a
                        href="https://explorecredit.com/privacy-policy"
                        target="_blank"
                      >
                        Privacy Policy
                      </a>
                    </p>
                    <p className="border-1 col-sm-4 my-sm-auto">
                      <a
                        href="https://explorecredit.com/termsandconditions"
                        target="_blank"
                      >
                        Terms & Conditions
                      </a>
                    </p>
                    <p className="col-sm-4 my-sm-auto mb-0">
                      <a
                        href="https://explorecredit.com/wp-content/uploads/2021/05/WLCC-Lending-JEM_Consumer-Loan-License-1.pdf"
                        target="_blank"
                      >
                        Licenses, Affiliations & Regulatory{" "}
                      </a>
                    </p>
                  </div>
                </div>

                <div className="row w-100 m-auto mobile-border-bottom">
                  <div className="text-center p-4 contact-info-container d-block d-sm-flex justify-content-sm-around  m-auto">
                    <p className="border-2 mb-3 m-sm-0 align-middle col-sm-5">
                      {" "}
                      <a href="tel:855-915-6245">855-915-6245</a>
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
                    Tribe, a sovereign nation located in the United States.
                    <br />
                    <br />
                    WLCC Lending JEM is an entity of the Wakpamni Lake Community
                    Corporation (WLCC), a tribal corporation wholly owned by the
                    Wakpamni Lake Community. The Wakpamni Lake Community is a
                    local municipal subsidiary government under the Oglala Sioux
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
                    Explore Credit does not lend to residents of NY, PA, GA, NC,
                    NJ, VA, MA, MD, AL, CT, AR, WV, NH, SD, AK, VT, Guam, Puerto
                    Rico, and the US Virgin Islands. Availability of installment
                    loans are subject to change at any time at the sole
                    discretion of Explore Credit.
                    <br />
                    <br />
                    IMPORTANT INFORMATION ABOUT PROCEDURES FOR APPLYING FOR A
                    LOAN – To help fight the funding of terrorism and money
                    laundering activities, and to comply with Tribal law and the
                    spirit of federal law requiring all financial institutions
                    to obtain, verify and record information that identifies
                    each person who applies for a loan, we will ask for your
                    name, address, date of birth, and other information that
                    will allow us to identify you. We may also ask for your
                    driver’s license number or other identifying documents.
                    <br />
                    <br />
                    Certain events or changes to your information may impact
                    your eligibility to receive a loan. If you no longer meet
                    the evaluation criteria, we may offer you a loan in a
                    different amount or on different terms. If you reside in a
                    state in which we do not provide services, you will be
                    ineligible for a loan.
                    <br />
                    <br />
                    To obtain a loan, you must have a valid checking account,
                    e-mail address, verifiable identity, and verifiable minimum
                    income. Please Note: Installment loans should be used for
                    short-term financial needs only, not as a long-term
                    financial solution. Customers with credit difficulties
                    should seek credit counseling. Explore Credit will only
                    allow a customer to have one loan at a time.
                    <br />
                    <br />
                    1 You were selected for this offer based on information in
                    your credit report from a credit reporting agency showing
                    you satisfied the lender’s pre-established criteria for
                    creditworthiness in conjunction with this offer. This offer
                    is not guaranteed. You may not receive a loan for the full
                    amount (or at all) if, after you respond to this offer, we
                    find that you no longer meet the criteria used to pre-select
                    you for this offer, including, but not limited to, changes
                    in your monthly income and your ability to repay. Minimum
                    offer $250.
                    <br />
                    <br />2 Consumers whose eligibility for this offer is
                    verified by 7 PM Eastern Time on a business day will
                    typically receive ACH deposits to their bank account the
                    next business day. However, delays can occur. Please contact
                    your bank institution for more information on individual
                    funding times. Business Days are Monday through Friday 8 AM
                    to 8 PM Eastern Time, and Saturday 8 AM to 5 PM Eastern
                    Time.
                    <br />
                    <br />
                    This offer is a “firm offer of credit” for purposes of the
                    Fair Credit Reporting Act. This offer is only for the
                    individual named in the offer and may not be transferred to
                    any other party. To receive the loan you must meet the
                    following eligibility criteria: be 18 years of age or older
                    and have a valid checking account in good standing, valid
                    email address, a verifiable identity and not currently have
                    an existing Explore Credit loan. Eligibility criteria are
                    different from the credit criteria used for this offer.
                    Minimum monthly income and ability to repay verification is
                    required.
                    <br />
                    <br />
                    This offer is not guaranteed if you do not continue to meet
                    or cannot verify you continue to meet the criteria used to
                    select you for this offer. The loan agreement you must sign
                    in order to accept this offer, may limit your legal rights,
                    including your right to go to court, to have a jury trial
                    and to participate in class actions.
                    <br />
                    <br />
                    WLCC Lending JEM is a sovereign enterprise, an economic
                    development arm and instrumentality of, and wholly owned and
                    controlled by, the Wakpamni Lake Community (the
                    “Community”), a political subdivision of the Oglala Sioux
                    Tribe (the “Tribe”), a federally-recognized sovereign
                    American Indian Tribe.
                  </small>
                </div>
                <div className="logos-container row d-flex justify-content-center d-block d-sm-flex justify-content-sm-around w-8 pb-3">
                  <StaticImage
                    src="../images/logo_verisign_black.png"
                    alt="A kitten"
                  />
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
