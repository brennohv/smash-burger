import styled, { css, DefaultTheme } from 'styled-components'

const wrapperModifier = {
  small: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.medium};

    &::after {
      width: 3rem;
    }
  `,
  color: (theme: DefaultTheme, color: 'white' | 'black') => css`
    color: ${theme.colors[color]};
  `
}

type TitleProps = {
  small?: boolean
  color?: 'white' | 'black'
}

export const Title = styled.h2<TitleProps>`
  ${({ theme, small, color }) => css`
    font-size: ${theme.font.sizes.xxlarge};
    color: ${theme.colors.black};
    position: relative;
    margin-bottom: ${theme.spacings.medium};

    &::after {
      margin-top: 0.3rem;
      position: absolute;
      display: block;
      content: '';
      width: 5rem;
      border-bottom: 0.5rem solid ${theme.colors.primary};
    }

    ${small && wrapperModifier.small(theme)}
    ${!!color && wrapperModifier.color(theme, color)}
  `}
`
