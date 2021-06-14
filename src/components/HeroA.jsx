import React, { useEffect, useState } from "react"
import "./HeroA.Styles.css"
import { StaticImage } from "gatsby-plugin-image"
import PinBox from "./PinBox"

export default function HeroA(props) {
  const { name, amount } = props
  const [custStatus, setCustStatus] = useState(null)

  useEffect(() => {
    document.body.style.backgroundColor = "#ffffff"
    let elements = document.getElementsByClassName("hero-container-b")
    for (var i = 0; i < elements.length; i++) {
      elements[i].classList.add("hero-container")
      elements[i].classList.remove("hero-container-b")
    }
    if (!name && !amount) {
      setCustStatus("guest")
    } else {
      setCustStatus("customer")
    }
  })

  return (
    <>
      <div className="container-fluid hero-container p-0">
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

        <div className="d-flex flex-column p-0 bottom-hero pt-3">
          <div className="px-2 text-center w-100 pt-5">
            <div className="header">
              <h2>Hello {name}</h2>
              <h3>Welcome to Explore Credit!</h3>
            </div>
            {custStatus === "customer" ? (
              <div className="body">
                <h3>
                  You have been approved <br /> for a loan in the amount of:
                </h3>
                <h1 className="mt-3">${amount},00</h1>
              </div>
            ) : (
              <div className="body">
                <PinBox />
              </div>
            )}
          </div>
          <div className="my-auto pb-sm-1 mt-sm-5 btn-container">
            <div className="col-12 col-sm-12 p-0 text-center mt-sm-2">
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
