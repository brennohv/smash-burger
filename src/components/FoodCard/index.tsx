// import Image from 'next/image'
import formatPrice from 'utils/format-price'
import * as S from './styles'

export type FoodCardProps = {
  title: string
  description: string
  src: string
  category?: string
  price: number
  onlyDrink?: boolean
}

const FoodCard = ({
  title,
  description,
  src,
  price,
  onlyDrink
}: FoodCardProps) => (
  <S.Wrapper>
    <S.ImgBox onlyDrink={onlyDrink}>
      <S.Img src={src} alt={title} onlyDrink={onlyDrink} />
    </S.ImgBox>

    <S.Content>
      <div>
        <S.Title>{title}</S.Title>
        <S.Description>{description}</S.Description>
      </div>
      <S.Price>{formatPrice(price)}</S.Price>
    </S.Content>
  </S.Wrapper>
)

export default FoodCard
