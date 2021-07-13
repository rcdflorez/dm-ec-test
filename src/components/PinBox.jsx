import React, { useState } from "react"
import "./PinBox.Styles.css"
import Modal from "react-bootstrap/Modal"
import Button from "react-bootstrap/Button"
import { StaticImage } from "gatsby-plugin-image"

export default function PinBox(props) {
  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)
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
          <div className="pin-input-container">
            <div className="d-flex flex-row align-items-center justify-content-center bd-highlight mb-3">
              <div className="p-2 bd-highlight">
                <h3 className="">PIN #:</h3>
              </div>
              <div className="p-2 bd-highlight">
                {" "}
                <input
                  type="text"
                  className="form-control text-center "
                  id="pinID"
                  onChange={event => validatePinId(event.target.value)}
                  value={pinValue}
                />
              </div>
            </div>
          </div>
          <div className="pin-location col-12">
            Your PIN is in the blue box on the bottom right of your mailer. See
            example
            <span onClick={handleShow}> here.</span>
          </div>
          <div
            id="errorMsjDiv"
            className="col-12 error-msj text-center mt-2 mb-1 invisible"
          >
            Invalid PIN, please verify and try it again.
          </div>
        </div>
      </form>

      <Modal show={show} onHide={handleClose}>
        <Modal.Body>
          {" "}
          <StaticImage
            src="../images/find_your_pin.webp"
            className="mx-auto"
            alt="ec-logo"
            loading="eager"
            placeholder="blurred"
          />
        </Modal.Body>
      </Modal>
    </>
  )
}
