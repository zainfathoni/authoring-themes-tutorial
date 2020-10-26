import React from "react"
import { graphql, useStaticQuery } from "gatsby"

const EventsTemplate = () => {
  const data = useStaticQuery(graphql`
    query {
      allEvent(sort: { fields: startDate, order: ASC }) {
        nodes {
          id
          name
          startDate
          endDate
          location
          url
          slug
        }
      }
    }
  `)
  const events = data.allEvent.nodes
  return <p>TODO: Build the events page template</p>
}

export default EventsTemplate
