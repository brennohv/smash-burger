import { gql } from 'graphql-request'

const GET_CATEGORIES = gql`
  query GET_CATEGORIES {
    categories(sort: "id:asc") {
      name
      id
      englishName
      products(sort: "id:asc") {
        title
        id
        englishTitle
        description
        englishDescription
        price
        image {
          url
        }
      }
    }
  }
`
export default GET_CATEGORIES
