export type ProductsProps = {
  title: string
  englishTitle: string
  description: string
  englishDescription: string
  price: number
  image: {
    url: string
  }
}

export type CategoryProps = {
  name: string
  englishName: string
  products: ProductsProps[]
}

export type CategoriesProps = {
  categories: CategoryProps[]
}
