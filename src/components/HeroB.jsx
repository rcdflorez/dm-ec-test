import React, { useEffect } from "react"
import "./HeroB.Styles.css"
import { StaticImage } from "gatsby-plugin-image"

export default function HeroB(props) {
  let custName = ""
  let amount = 300

  if (props.name == "") custName = "Dear Customer"
  else custName = props.name
  if (props.amount > 0) amount = props.amount

  useEffect(() => {
    document.body.style.backgroundColor = "#011837"
    let elements = document.getElementsByClassName("hero-container")
    for (var i = 0; i < elements.length; i++) {
      elements[i].classList.add("hero-container-b")
      elements[i].classList.remove("hero-container")
    }
  })

  return (
    <>
      <div className="container-fluid hero-container-b p-0">
        <div className="text-center pt-2 d-sm-none">
          <StaticImage
            src="../images/ex-icon.png"
            className="mx-auto"
            alt="ec-logo"
            loading="eager"
            placeholder="blurred"
          />
        </div>
        <div className="text-center pt-4 d-none d-sm-block">
          <StaticImage
            src="../images/explore_credit_white_RGB1.png"
            className="mx-auto"
            alt="ec-logo"
            loading="eager"
            placeholder="blurred"
          />
        </div>

        <div className="row bottom-hero-b pt-3 m-0 mt-sm-2">
          <div className="col-12 col-sm-6 my-sm-auto">
            <div className="row">
              <div className="col-12 text-center header ">
                <h2>Hello {custName}</h2>
                <h3>Welcome to Explore Credit!</h3>
              </div>
              <div className="col-12 text-center body">
                <h3>
                  You have been approved <br /> for a loan in the amount of:
                </h3>
                <h1 className="mt-3">${amount},00</h1>
              </div>
              <div className="col-12 text-center btn-container">
                <a className="btn primary px-5 py-3">Let's get Started</a>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 text-center mt-sm-auto">
            <StaticImage
              src="../images/astronaut_thumbsup_flag.png"
              className="mx-auto"
              alt="ec-logo"
              width={385}
              loading="eager"
              object-fit="scale-down"
              placeholder="blurred"
            />
          </div>
        </div>
      </div>
      <div className="container-lg body-container-b text-white">
        <div className="row">
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
