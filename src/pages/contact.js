import React from 'react';
import Layout from '../_layout';
import Contact from '../_sections/contact';
import Ubication from '../_sections/about/ubication';
import { graphql } from 'gatsby';

export default ({ data }) => {

  return(
    <Layout data={JSON.parse(data.initial.data)}>
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