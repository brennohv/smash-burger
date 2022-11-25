// import client from 'graphql/client'
// import GET_CATEGORIES from 'graphql/queries/getCategories'
import FoodsTemplate from 'templates/Foods'
import { allProducts } from 'templates/Foods/mock'
import { CategoriesProps } from 'types/api'

export default function Home({ categories }: CategoriesProps) {
  return <FoodsTemplate categories={categories} />
}

export async function getStaticProps() {
  // const { categories } = await client.request(GET_CATEGORIES)
  const { categories } = allProducts

  return {
    props: {
      categories
    }
  }
}
