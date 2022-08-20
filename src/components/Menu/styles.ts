import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  height: 90px;
  position: relative;
`

export const Header = styled.header`
  ${({ theme }) => css`
    position: fixed;
    top: 0;
    height: 90px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${theme.colors.black};
    z-index: 2;
  `}
`

export const WrapperLanguage = styled.button`
  ${({ theme }) => css`
    position: absolute;
    right: 14px;
    top: 96px;
    background-color: ${theme.colors.white};
    border: 1px solid ${theme.colors.black};
    padding: 8px;
    border-radius: 8px;
    display: flex;
    align-items: center;
    cursor: pointer;
  `}
`

export const ImgBrandChosen = styled.img``

type LangLabelProps = {
  color: 'black' | 'white'
}

export const LangLabel = styled.p<LangLabelProps>`
  ${({ theme, color }) => css`
    color: ${theme.colors[color]};
    font-size: ${theme.font.sizes.small};

    &::before {
      content: '';
      border-left: 1px solid ${theme.colors[color]};
      margin: 0 0.5rem;
    }
  `}
`

export const DropdowLanguages = styled.div`
  position: absolute;
  left: 0;
  top: 124%;
  background: rgba(0, 0, 0, 0.5);
  padding: 8px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  row-gap: 0.5rem;
`

export const LangOption = styled.button`
  ${({ theme }) => css`
    border: none;
    display: flex;
    align-items: center;
    background-color: transparent;
    cursor: pointer;

    &:not(:last-of-type) {
      border-bottom: 1px solid ${theme.colors.white};
      padding-bottom: 0.5rem;
    }
  `}
`

export const WrapperLogo = styled.div`
  height: 100%;
`

export const Logo = styled.img`
  object-fit: fill;
  height: 100%;
  transform: translateY(4px);
`
