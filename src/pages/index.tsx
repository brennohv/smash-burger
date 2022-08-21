import client from 'graphql/client'
import GET_CATEGORIES from 'graphql/queries/getCategories'
import FoodsTemplate from 'templates/Foods'
import { CategoriesProps } from 'types/api'

export default function Home({ categories }: CategoriesProps) {
  return <FoodsTemplate categories={categories} />
}

export async function getStaticProps() {
  const { categories } = await client.request(GET_CATEGORIES)

  // console.log(categories)

  return {
    props: {
      categories
    }
  }
}
