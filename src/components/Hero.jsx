import React from "react"
import "./Hero.Styles.css"
import { StaticImage } from "gatsby-plugin-image"

export default function Hero(props) {
  let custName = ""
  let amount = 300

  if (props.name == "") custName = "Dear Customer"
  else custName = props.name
  if (props.amount > 0) amount = props.amount
  return (
    <>
      <div className="container-fluid hero-container p-0">
        <div className="text-center pt-2 d-sm-none">
          <StaticImage
            src="../images/ex-icon.png"
            className="mx-auto"
            placeholder="blurred"
            alt="ec-logo"
          />
        </div>
        <div className="text-center pt-4 d-none d-sm-block">
          <StaticImage
            src="../images/explore_credit_white_RGB1.png"
            className="mx-auto"
            placeholder="blurred"
            alt="ec-logo"
          />
        </div>

        <div className="d-flex flex-column p-0 bottom-hero pt-3">
          <div className="px-2 text-center w-100 pt-5">
            <div className="header">
              <h2>Hello {custName}</h2>
              <h3>Welcome to Explore Credit!</h3>
            </div>

            <div className="body">
              <h3>
                You have been approved <br /> for a loan in the amount of:
              </h3>
              <h1 className="mt-3">${amount},00</h1>
            </div>
          </div>
          <div className="my-auto pb-sm-1 mt-sm-5 ">
            <div className="col-12 col-sm-12 p-0 text-center mt-sm-4">
              <a className="btn primary px-5 py-3">Let's get Started</a>
            </div>
          </div>
        </div>
      </div>
      <div className="container-lg body-container">
        <div className="row bg-white">
          <div className="col-12 col-sm-9 text-center m-auto">
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
