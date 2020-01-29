import React from "react"
import Helmet from "./helmet"
import Menu from "./menu"
import About from "./about"
import Application from "./application"
import Contact from "./contact"
import Footer from "./footer"

if (typeof window !== "undefined") {
  require("smooth-scroll")('a[href*="#"]')
}

export default () => (
  <div>
    <Helmet />
    <Menu />
    <About />
    <Application />
    <Contact />
    <Footer />
  </div>
)