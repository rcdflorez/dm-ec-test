import React from "react"
import "bootstrap/dist/css/bootstrap.min.css"
//import Cookies from "js-cookie"
import Hero from "../components/Hero"
import Footer from "../components/Footer"

import { useQueryParam, NumberParam, StringParam } from "use-query-params"

export default function Home() {
  const [name] = useQueryParam("name", StringParam)
  const [amount] = useQueryParam("amount", NumberParam)

  return (
    <>
      <Hero name={name} amount={amount} />
      <Footer />
    </>
  )
}
