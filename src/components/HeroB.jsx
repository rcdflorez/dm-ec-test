import React, { useEffect, useState } from "react"
import "./HeroB.Styles.css"
import { StaticImage } from "gatsby-plugin-image"
import PinBox from "./PinBox"
import { NavItem } from "react-bootstrap"

export default function HeroB(props) {
  /*let custName = ""
  let amount = 300*/

  let { name, amount, pin } = props
  const [custStatus, setCustStatus] = useState(null)

  const [globalPinValue, setGlobalPinValue] = useState(pin)

  const [name2, setName2] = useState(name)
  const [amount2, setAmount2] = useState(amount)

  const baseRedirectURI = "https://application.explorecredit.com/"

  const UTM_BASE =
    "utm_medium=directmail&utm_source=lsdm&utm_campaign=prescreen112021&utm_content=pageb&campaign=dm&test"

  let UTM_PIN = ""

  if (pin) {
    UTM_PIN = "&utm_term=qr"
  } else {
    UTM_PIN = "&utm_term=noqr"
  }

  /*
  if (props.name === "") custName = "Dear Customer"
  else custName = props.name
  if (props.amount > 0) amount = props.amount
*/
  useEffect(() => {
    document.body.style.backgroundColor = "#011837"
    let elements = document.getElementsByClassName("hero-container")
    for (var i = 0; i < elements.length; i++) {
      elements[i].classList.add("hero-container-b")
      elements[i].classList.remove("hero-container")
    }

    if (!name2 && !amount2) {
      setCustStatus("guest")
    } else {
      setCustStatus("customer")
    }
  }, [])

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
            if (jsondata.FIRST_NAME && jsondata.LINE_AMOUNT) {
              finalPin = pin
              setName2(jsondata.FIRST_NAME)
              setAmount2(jsondata.LINE_AMOUNT)

              //document.getElementById("noPinDiv").classList.add("d-none")
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
          <div className="col-12 col-sm-6 mb-sm-auto landscape-fix">
            <div className="row">
              <div className="col-12 text-center header ">
                <h2>Hello {name2} </h2>
                <h3>Welcome to Explore Credit!</h3>
              </div>

              {custStatus === "customer" ? (
                <div className="col-12 text-center body">
                  <h3>
                    You have been pre-approved <br /> for a loan in the amount
                    of:
                  </h3>
                  <h1 className="mt-3">${amount2}</h1>
                </div>
              ) : (
                <div className="col-12 text-center body">
                  <PinBox />
                </div>
              )}

              <div className="col-12 text-center btn-container">
                <a onClick={verifyPin} className="btn primary px-5 py-3">
                  Let's Get Started
                </a>
              </div>
              {custStatus != "customer" ? (
                <div id="noPinDiv" className="col-12 text-center no-pin py-2">
                  If you dont have a pin,{" "}
                  <a href={baseRedirectURI + "?" + UTM_BASE + "&utm_term=noqr"}>
                    click here
                  </a>{" "}
                  to continue.
                </div>
              ) : (
                <></>
              )}
            </div>
          </div>
          <div className="col-12 mt-5 col-sm-6 text-center mt-sm-auto">
            <StaticImage
              src="../images/astronaut_thumbsup_flag.png"
              className="mx-auto"
              alt="ec-logo"
              loading="eager"
              object-fit="scale-down"
              placeholder="blurred"
              className="col-8 p-0 m-0 col-sm-8"
            />
          </div>
        </div>
      </div>
      <div className="container-lg body-container-b text-white">
        <div className="row">
          <div className="col-12 col-sm-9 text-center m-auto">
            <p className="h2 wwa-header pb-3">Who We Are</p>
            <p className="h5 wwa-body text-left">
              Explore Credit builds relationships through financial trust. We’re
              a smart, simple, and fast way to borrow money when you need it the
              most. We offer short-term installment loans with no hidden fees.
              Through our super easy online loan process, Explore Credit offers
              you the funds you need now.
            </p>

            <div className="row d-flex justify-content-center">
              <div className="">
                <ul className="p-0 mx-auto mt-3 list-b text-left">
                  <li>
                    <StaticImage
                      src="../images/ec_white_star_bullet.webp"
                      loading="eager"
                      width={20}
                      height={20}
                      alt=""
                    />
                    <span className=" "> Unmatched Customer Service</span>
                  </li>
                  <li>
                    <StaticImage
                      src="../images/ec_white_star_bullet.webp"
                      loading="eager"
                      width={20}
                      height={20}
                      alt=""
                    />
                    <span> Simple Interest Rates </span>
                  </li>
                  <li>
                    <StaticImage
                      src="../images/ec_white_star_bullet.webp"
                      loading="eager"
                      width={20}
                      height={20}
                      alt=""
                    />

                    <span> No Hidden Fees</span>
                  </li>
                </ul>
              </div>
            </div>
            <p className="h5 wwa-body text-left pt-2">
              If you want to know more about Explore Credit,{" "}
              <a href="https://explorecredit.com/" style={{ color: "#2EC5EA" }}>
                {" "}
                click here.
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
