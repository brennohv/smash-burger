import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Title = styled.h2`
  ${({ theme }) => css`
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

    ${media.lessThan('small')`
      font-size: ${theme.font.sizes.large};
    `}
  `}
`
