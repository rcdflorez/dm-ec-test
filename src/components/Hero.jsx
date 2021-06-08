import React from "react"
import "./Hero.Styles.css"
import { StaticImage } from "gatsby-plugin-image"

export default function Footer() {
  return (
    <>
      <div className="container-fluid hero-container p-0">
        <div className="d-flex flex-column p-0 bottom-hero pt-5">
          <div className="px-2 text-center w-100 pt-5">
            <div className="header">
              <h3>Hello *|FIRSTNAME|*.</h3>
              <h3>Welcome to Explore Credit!</h3>
            </div>

            <div className="body">
              <h3>
                You have been approved <br /> for a loan in the amount of:
              </h3>
              <h1 className="mt-3">*|LOANAMOUNT|*</h1>
            </div>
          </div>
          <div className="my-auto">
            <div className="col-12 col-sm-12 p-0 text-center">
              <a className="btn primary px-5 py-3">Let's get Started</a>
            </div>
          </div>
        </div>
      </div>
      <div className="container-lg">
        <div className="row bg-white">
          <div className="col-12 text-center">
            <p className="h2 wwa-header pb-3">Who We Are</p>
            <p className="h5 wwa-body">
              Explore Credit is a smart, simple, fast way to borrow money when
              you need it the most. We offer short-term installment loans with
              no hidden fees. Through our super easy online loan process,
              Explore Credit offers you the funds you need now.
            </p>
            <ul className="p-0 mx-auto mt-3 ">
              <li>a</li>
              <li>b</li>
              <li>c</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}
