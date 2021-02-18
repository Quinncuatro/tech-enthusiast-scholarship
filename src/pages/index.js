import React from "react"
import Layout from "../components/layout"
import Menu from "../components/menu"
import About from "../components/about"
import Application from "../components/application"
import ContactForm from "../components/contact-form"
import Footer from "../components/footer"
import styles from "./index.module.css"

export default () =>  (
  <Layout>
    <Menu />
    <About />
    <Application />
    <ContactForm />
    <Footer />
  </Layout>
)
