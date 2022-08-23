import styled, { css } from 'styled-components'

export const ModifierImg = {
  wrapperImg: () => css`
    display: flex;
    justify-content: center;
  `,
  img: () => css`
    object-fit: fill;
  `
}

export const Wrapper = styled.section`
  ${({ theme }) => css`
    background-color: ${theme.colors.white};
    box-shadow: 0 0 0.6rem grey;
    display: flex;
    flex-direction: column;
  `}
`
type ImgProps = {
  onlyDrink?: string
}

export const ImgBox = styled.div<ImgProps>`
  ${({ onlyDrink }) => css`
    width: 100%;
    background-color: white;
    ${onlyDrink === 'OnlyDrink' && ModifierImg.wrapperImg}
  `}
`

export const Img = styled.img<ImgProps>`
  ${({ onlyDrink }) => css`
    object-fit: cover;
    width: 100%;
    max-height: 18.5rem;
    ${onlyDrink === 'OnlyDrink' && ModifierImg.img}
  `}
`
export const Content = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    row-gap: 1rem;
    padding: ${theme.spacings.xsmall};
    flex-grow: 1;
  `}
`

export const Title = styled.h3`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.medium};
    color: ${theme.colors.black};
    margin-bottom: ${theme.spacings.xxsmall};
  `}
`

export const Description = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xsmall};
    color: ${theme.colors.darkGray};
    font-weight: 400;
  `}
`

export const Price = styled.span`
  ${({ theme }) => css`
    border-radius: 2px;
    padding: 0 1.2rem;
    background-color: ${theme.colors.primary};
    color: ${theme.colors.black};
    font-weight: 500;
    font-size: ${theme.font.sizes.small};
    height: 23px;
    text-align: center;
    align-self: flex-end;
    display: flex;
    align-items: center;
    margin-top: 0.2rem;
  `}
`
