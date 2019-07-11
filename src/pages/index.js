import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import {Elements, StripeProvider} from 'react-stripe-elements-universal';
import CheckoutForm from '../components/checkout';
import test from '../images/Gatsby-Stripe-Element.png'
const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <StripeProvider apiKey="pk_test_6fU7LS7iorcNFoieFsMlVxl1">
      <Elements>
        <CheckoutForm />
      </Elements>
    </StripeProvider>
    <img src={test}/>
  </Layout>
)

export default IndexPage
