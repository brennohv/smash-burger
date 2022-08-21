import { gql } from 'graphql-request'

const GET_CATEGORIES = gql`
  query GET_CATEGORIES {
    categories {
      name
      englishName
      products {
        title
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
