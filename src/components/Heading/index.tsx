import * as S from './styles'

export type HeadingProps = {
  children?: React.ReactNode
}

const Heading = ({ children }: HeadingProps) => <S.Title>{children}</S.Title>

export default Heading
