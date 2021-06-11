import React from "react"
import "bootstrap/dist/css/bootstrap.min.css"
//import Cookies from "js-cookie"
import HeroA from "../components/HeroA"
import HeroB from "../components/HeroB"
import Footer from "../components/Footer"

import { useQueryParam, NumberParam, StringParam } from "use-query-params"

export default function Home() {
  const [name] = useQueryParam("name", StringParam)
  const [amount] = useQueryParam("amount", NumberParam)

  const group =
    Math.random() < 0.5 ? (
      <HeroA name={name} amount={amount} />
    ) : (
      <HeroB name={name} amount={amount} />
    )

  return (
    <>
      {group}
      <Footer />
    </>
  )
}
