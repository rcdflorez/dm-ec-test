import React, { useEffect, useState } from "react"
import "./HeroA.Styles.css"
import { StaticImage } from "gatsby-plugin-image"
import PinBox from "./PinBox"

export default function HeroA(props) {
  const { name, amount, pin } = props
  const [custStatus, setCustStatus] = useState(null)

  const [globalPinValue, setGlobalPinValue] = useState(pin)

  const [name2, setName2] = useState(name)
  const [amount2, setAmount2] = useState(amount)

  const baseRedirectURI = "https://application.explorecredit.com/"

  const UTM_BASE =
    "utm_medium=directmail&utm_source=lsdm&utm_campaign=prescreen072021&utm_content=pagea"

  let UTM_PIN = ""

  if (pin) {
    UTM_PIN = "&utm_term=qr"
  } else {
    UTM_PIN = "&utm_term=noqr"
  }

  useEffect(() => {
    document.body.style.backgroundColor = "#ffffff"
    let elements = document.getElementsByClassName("hero-container-b")
    for (var i = 0; i < elements.length; i++) {
      elements[i].classList.add("hero-container")
      elements[i].classList.remove("hero-container-b")
    }
    if (!name2 && !amount2) {
      setCustStatus("guest")
    } else {
      setCustStatus("customer")
    }
  })

  function verifyPin() {
    if (custStatus === "guest") {
      try {
        let pin = document.getElementById("pinID").value
        let finalPin = ""
        if (pin === "" || pin === null) {
          document.getElementById("errorMsjDiv").classList.remove("invisible")
          document.getElementById("pinID").classList.add("invalid")

          return
        }
        fetch("https://search-service.explore-test.workers.dev/?pin=" + pin)
          .then(response => response.json())
          .then(jsondata => {
            console.log(jsondata)
            if (jsondata.FIRST_NAME && jsondata.LINE_AMOUNT) {
              finalPin = pin
              setName2(jsondata.FIRST_NAME)
              setAmount2(jsondata.LINE_AMOUNT)

              // document.getElementById("noPinDiv").classList.add("d-none")
              setGlobalPinValue(finalPin)
              console.log(globalPinValue)
              setCustStatus("customer")
            } else {
              document
                .getElementById("errorMsjDiv")
                .classList.remove("invisible")
              document.getElementById("pinID").classList.add("invalid")

              return
            }

            //const approvedAmount = parseInt(jsondata.FIRST_NAME.replace(/,/g, ""));
          })
      } catch {
        return
      }
    } else if (custStatus === "customer") {
      console.log("redirect with" + globalPinValue)
      window.location.href =
        baseRedirectURI + "?pin=" + globalPinValue + "&" + UTM_BASE + UTM_PIN
    }
    return
  }
  /*
  var txtbox = document.getElementById("pinID")
  try {
    txtbox.onkeydown = function (e) {
      if (txtbox && e.key == "Enter") {
        verifyPin()
      }
    }
  } catch (error) {
    console.log(error)
  }
*/
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
            height={60}
          />
        </div>

        <div className="d-flex flex-column p-0 bottom-hero pt-3">
          <div className="px-2 text-center w-100 pt-5">
            <div className="header">
              <h2>Hello {name2}</h2>
              <h1>Welcome to Explore Credit!</h1>
            </div>
            {custStatus === "customer" ? (
              <div className="body">
                <h5>You have been approved for a loan in the amount of:</h5>
                <h1 className="mt-3 h1-amount">${amount2}.00</h1>
              </div>
            ) : (
              <div className="body">
                <PinBox />
              </div>
            )}
          </div>
          <div className="my-auto pb-sm-1 mt-sm-0 btn-container">
            <div className="col-12 col-sm-12 p-0 text-center mt-sm-2">
              <a onClick={verifyPin} className="btn primary px-5 py-3">
                Let's Get Started
              </a>
            </div>

            {custStatus != "customer" ? (
              <div id="noPinDiv" className="col-12 text-center no-pin py-2">
                If you dont have a pin,{" "}
                <a href={baseRedirectURI + "?" + UTM_BASE + "&utm_term=noqr"}>
                  click here,
                </a>{" "}
                to continue.
              </div>
            ) : (
              <></>
            )}
          </div>
        </div>
      </div>
      <div className="container-lg body-container">
        <div className="row bg-white">
          <div className="col-12 col-sm-6 text-left ml-auto">
            <p className="h2 wwa-header pb-3">Who We Are</p>
            <p className="h5 wwa-body">
              Explore Credit builds relationships through financial trust. We’re
              a smart, simple, and fast way to borrow money when you need it the
              most. We offer short-term installment loans with no hidden fees.
              Through our super easy online loan process, Explore Credit offers
              you the funds you need now.
            </p>
            <ul className="p-0 mx-auto mt-3 list-b text-left">
              <li>
                <StaticImage
                  src="../images/ec_blue_star.webp"
                  loading="eager"
                  width={20}
                  height={20}
                />
                <span> Unmatched Customer Service</span>
              </li>
              <li>
                <StaticImage
                  src="../images/ec_blue_star.webp"
                  loading="eager"
                  width={20}
                  height={20}
                />
                <span> Simple Interest Rates</span>
              </li>
              <li>
                <StaticImage
                  src="../images/ec_blue_star.webp"
                  loading="eager"
                  width={20}
                  height={20}
                />
                <span> No Hidden Fees</span>
              </li>
            </ul>
          </div>
          <div className="col-12 col-sm-3 text-center mr-auto">
            <div className="d-none d-sm-block justify-content-center col-4 planets-container">
              <div className="col-12 planet1-container">
                <div className="planetBlue"></div>
              </div>
              <div className="col-12 planet2-container">
                <div className="planetOrange"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
