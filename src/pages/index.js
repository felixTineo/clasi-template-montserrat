import React from "react"
import Layout from '../_layout';
import Hero from '../_sections/home/hero';
import Properties from '../_sections/home/properties';
import About from '../_sections/home/about';
import Contact from '../_sections/home/contact';
import { graphql } from 'gatsby';

export default function Home({ data }) {
  return (
    <Layout data={JSON.parse(data.initial.data)}>
      <Hero />
      <Properties />
      <About />
      <Contact />
    </Layout>
  )
}

export const query = graphql`
query{
  initial{
    data
  }
}
`