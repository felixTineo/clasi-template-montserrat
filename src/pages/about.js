import React from 'react';
import Layout from '../_layout';
import Hero from '../_sections/about/hero';
import History from '../_sections/about/history';
import Description from '../_sections/about/description';
import Stats from '../_sections/about/stats';
import Team from '../_sections/about/team';
import Ubication from '../_sections/about/ubication';
import { graphql } from 'gatsby';

export default ({ data }) => {
  return(
    <Layout data={JSON.parse(data.initial.data)}>
      <Hero />
      <History />
      <Description />
      <Stats />    
      <Team />
      <Ubication />
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