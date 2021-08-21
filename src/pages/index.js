import React, { lazy, useState, useEffect } from "react"
import "bootstrap/dist/css/bootstrap.min.css"
//import Cookies from "js-cookie"
import HeroC from "../components/HeroC"
//import HeroB from "../components/HeroB"
//import Loader from "../components/Loader"
import Footer from "../components/Footer"

import { useQueryParam, NumberParam, StringParam } from "use-query-params"



export default function Home() {
  const [name] = useQueryParam("name", StringParam)
  const [amount] = useQueryParam("amount", NumberParam)
  const [pin] = useQueryParam("pin", NumberParam)
  const [variants, setVariants] = useState({})
  let VariantList = null

  useEffect(() => {
    // Actualiza el título del documento usando la API del navegador
    //console.log(variants.HeroA)
    //VariantList = variants.HeroA
    //console.log(VariantList)

    let $_REVECHAT_API = ""
    window.$_REVECHAT_API ||
      (function (d, w) {
        var r = ($_REVECHAT_API = function (c) {
          r._.push(c)
        })
        w.__revechat_account = "6495421"
        w.__revechat_version = 2
        r._ = []
        var rc = d.createElement("script")
        rc.type = "text/javascript"
        rc.async = true
        rc.setAttribute("charset", "utf-8")
        rc.src =
          ("https:" == document.location.protocol ? "https://" : "http://") +
          "static.revechat.com/widget/scripts/new-livechat.js?" +
          new Date().getTime()
        var s = d.getElementsByTagName("script")[0]
        s.parentNode.insertBefore(rc, s)
      })(document, window)
  }, [])


  const isSSR = typeof window === "undefined"
  return (
    <>
      {}
      {!isSSR && (
 <HeroC />
      )}
      <Footer />
    </>
  )
}
