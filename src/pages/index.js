import React from "react"
import Layout from "../Components/layout";
import Hero from "../Components/Hero/hero"
import Homepage from "../pages/Homepage/homepage"
import Footer from "../Components/Footer/footer"

const Index =() => {
  return(
    <Layout>
      <Hero/>
      <Homepage/>
      <Footer />
    </Layout>
  )
}

export default Index;