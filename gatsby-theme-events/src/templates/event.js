import React from "react"
import { graphql } from "gatsby"

export const query = graphql`
  query($eventID: String!) {
    event(id: { eq: $eventID }) {
      name
      url
      startDate(formatString: "MMMM DD YYYY")
      endDate(formatString: "MMMM DD YYYY")
      location
      slug
    }
  }
`

const EventTemplate = () => <p>TODO: Build the event page template</p>

export default EventTemplate
