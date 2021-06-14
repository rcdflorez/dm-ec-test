import React, { lazy, useState, useEffect } from "react"
import "bootstrap/dist/css/bootstrap.min.css"
//import Cookies from "js-cookie"
//import HeroA from "../components/HeroA"
//import HeroB from "../components/HeroB"
import Loader from "../components/Loader"
import Footer from "../components/Footer"

import { useQueryParam, NumberParam, StringParam } from "use-query-params"

const importVariant = variantName =>
  lazy(() =>
    import(`../components/${variantName}`).catch(() =>
      import(`../components/HeroB`)
    )
  )

export default function Home() {
  const [name] = useQueryParam("name", StringParam)
  const [amount] = useQueryParam("amount", NumberParam)
  const [variants, setVariants] = useState({})
  let VariantList = null

  useEffect(() => {
    // Actualiza el título del documento usando la API del navegador
    //console.log(variants.HeroA)
    //VariantList = variants.HeroA
    //console.log(VariantList)
  }, [])

  const addVariant = variantName => {
    if (variants[variantName]) return

    VariantList = importVariant(variantName)
  }

  //console.log(ChartList)
  Math.random() < 0.5 ? addVariant("HeroA") : addVariant("HeroB")
  const isSSR = typeof window === "undefined"
  return (
    <>
      {}
      {!isSSR && (
        <React.Suspense fallback={<Loader />}>
          {VariantList ? <VariantList name={name} amount={amount} /> : "Ups..."}
        </React.Suspense>
      )}
      <Footer />
    </>
  )
}
