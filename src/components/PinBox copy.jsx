import React, { useState } from "react"
import "./PinBox.Styles.css"

export default function PinBox(props) {
  const [pinValue, setPinValue] = useState("")

  function validatePinId(value) {
    const re = /^[0-9\b]+$/
    if (value === "" || re.test(value)) {
      setPinValue(value)
    }
  }

  return (
    <>
      <h3 className="pb-2 font-weight-light">
        Enter your PIN below to activate your offer.
      </h3>
      <form>
        <div className="form-group row mb-0 row px-1 mx-0 d-flex justify-content-center">
          <div className="col-8 col-sm-3  flex-row pin-input-container">
            <h3 className="col-form-label p-0 m-0 pb-sm-3 text-right align-self-center pin-h3">
              PIN #:
            </h3>
            <input
              type="text"
              className="form-control text-center"
              id="pinID"
              onChange={event => validatePinId(event.target.value)}
              value={pinValue}
            />
          </div>
          <div
            id="errorMsjDiv"
            className="col-12 error-msj text-center mt-2 mb-1 invisible"
          >
            Invalid PIN, please verify and try it again.
          </div>
        </div>
      </form>
    </>
  )
}
