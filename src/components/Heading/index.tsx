import * as S from './styles'

export type HeadingProps = {
  children?: React.ReactNode
  small?: boolean
  color?: 'white' | 'black'
}

const Heading = ({
  children,
  small = false,
  color = 'black'
}: HeadingProps) => (
  <S.Title color={color} small={small}>
    {children}
  </S.Title>
)

export default Heading
