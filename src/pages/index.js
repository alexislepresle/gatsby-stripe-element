import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import {Elements, StripeProvider} from 'react-stripe-elements-universal';
import CheckoutForm from '../components/checkout';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <StripeProvider apiKey="pk_test_b9ub5ff6DVMZCCFjWBIBUdMM00uQQ9LUkf">
      <Elements>
        <CheckoutForm />
      </Elements>
    </StripeProvider>
  </Layout>
)

export default IndexPage
