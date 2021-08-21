import React, { useEffect, useState } from "react"
import "./HeroC.Styles.css"
import { StaticImage } from "gatsby-plugin-image"
import CountDown from "./CountDown"

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
      <div className="container-fluid hero-container-c p-0">
        <div className="text-left pt-2 d-sm-none">
          <StaticImage
            src="../images/ex-icon.png"
            className="mx-auto"
            alt="ec-logo"
            loading="eager"
            placeholder="blurred"
            width={50}
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

        <div className="d-flex flex-column p-0 bottom-hero-c pt-0 ">
          <div className="px-2 text-center w-100 pt-0 pt-lg-5">
            <div className="header">
              <h2>Hello {name2}</h2>
              <h1>Welcome to Explore Credit!</h1>
            </div>
            <h3 className="font-weight-light">Unfortunately, your pre-approved loan offer has expired.</h3>

            <h4 className="font-weight-light pt-4 pt-lg-0">But, don’t worry… We might still be able to get you the cash you need.</h4>
            
              <div className="body">
                <CountDown/>
                <h5 className="font-weight-lighter mb-lg-5"> You’ll be redirected to our application in 10 seconds.</h5>
              </div>

             
           
          </div>
          <div className="my-auto pb-sm-1 mt-sm-0 btn-container">
            <div className="col-12 col-sm-12 p-0 text-center mt-sm-2">
              <a onClick={verifyPin} className="btn primary px-5 py-3">
                Apply Now
              </a>
            </div>


          </div>
        </div>
      </div>
    </>
  )
}
