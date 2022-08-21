import * as S from './styles'

import FoodCard from 'components/FoodCard'
import { Grid } from 'components/Grid'
import { Container } from 'components/Container'
import Menu from 'components/Menu'
import Heading from 'components/Heading'

import { CategoriesProps } from 'types/api'
import { Fragment, useState } from 'react'

const FoodsTemplate = ({ categories }: CategoriesProps) => {
  const [englishLang, setEnglishLang] = useState(false)

  const isEnglish = (value: boolean) => {
    setEnglishLang(value)
  }

  return (
    <S.Wrapper>
      <Menu inEnglish={isEnglish}></Menu>
      <Container>
        {categories.map((category, index) => (
          <Fragment key={'category' + index}>
            <Heading key={category.name}>
              {englishLang ? category.englishName : category.name}
            </Heading>
            <Grid>
              {category.products.map((food) => (
                <FoodCard
                  title={englishLang ? food.englishTitle : food.title}
                  description={
                    englishLang ? food.englishDescription : food.description
                  }
                  src={`http://localhost:1337${food.image.url}`}
                  price={food.price}
                  key={food.title}
                />
              ))}
            </Grid>
          </Fragment>
        ))}
      </Container>
    </S.Wrapper>
  )
}
export default FoodsTemplate
