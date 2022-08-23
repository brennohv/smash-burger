import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.div`
  height: 9rem;
  position: relative;
`

export const Header = styled.header`
  ${({ theme }) => css`
    position: fixed;
    top: 0;
    height: 9rem;
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
    right: 1.4rem;
    top: 9.6rem;
    background-color: ${theme.colors.white};
    border: 1px solid ${theme.colors.black};
    padding: 0.8rem;
    border-radius: 0.8rem;
    display: flex;
    align-items: center;
    cursor: pointer;
  `}
`

export const ImgBrandChosen = styled.img`
  ${media.lessThan('small')`
    width: 2.1rem;
  `}
`

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

type DropdowLanguagesProps = {
  showLang: boolean
}

const wrapperLang = {
  onShow: () => css`
    pointer-events: all;
    transform: translateY(0);
    opacity: 1;
  `
}

export const DropdowLanguages = styled.div<DropdowLanguagesProps>`
  ${({ showLang }) => css`
    display: flex;
    flex-direction: column;
    row-gap: 0.5rem;
    opacity: 0;
    pointer-events: none;
    position: absolute;
    right: 1.4rem;
    top: 124%;
    top: 14.9rem;
    background: rgba(0, 0, 0, 0.5);
    padding: 8px;
    border-radius: 8px;
    transform: translateX(2rem);
    transition: transform 0.2s ease-in-out, opacity 0.2s ease-in-out;

    ${showLang && wrapperLang.onShow()}

    ${media.lessThan('small')`
      top: 13.8rem;
    `}
  `}
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
