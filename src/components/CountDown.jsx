import React, { useEffect } from "react"
import "./CountDown.Styles.css"
export default function CountDown() {
  useEffect(() => {
    var countdownNumberEl = document.getElementById("countdown-number")
    var countdown = 10

    countdownNumberEl.textContent = countdown

    setInterval(function () {
      countdown = --countdown <= 0 ? 10 : countdown
      if (countdown < 10) {
        countdownNumberEl.textContent = "0" + countdown
      } else {
        countdownNumberEl.textContent = countdown
      }
      if (countdown <= 9) {
        window.location.href = "http://application.explorecredit.com/"
      }
    }, 1000)
  }, [])
  return (
    <>
      <div id="countdown">
        <div id="countdown-number"></div>
        <svg>
          <circle r="70" cx="75" cy="75"></circle>
        </svg>
      </div>
    </>
  )
}
