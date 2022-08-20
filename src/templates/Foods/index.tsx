import FoodCard from 'components/FoodCard'
import * as S from './styles'
import { Grid } from 'components/Grid'
import { Container } from 'components/Container'
import Menu from 'components/Menu'
import Heading from 'components/Heading'

import { data } from './mock'

const FoodsTemplate = () => (
  <S.Wrapper>
    <Menu></Menu>
    <Container>
      <Heading>ENTRADAS</Heading>
      <Grid>
        {data.map((game, index) => (
          <FoodCard
            title={game.title}
            description={game.description}
            src={game.src}
            price={game.price}
            key={game.title + index}
          />
        ))}
      </Grid>
    </Container>
  </S.Wrapper>
)

export default FoodsTemplate
