import React from "react"
import Helmet from "./helmet"

if (typeof window !== "undefined") {
  require("smooth-scroll")('a[href*="#"]')
}

export default ({ children }) => (
  <div>
    <Helmet />
      {children}
  </div>
)