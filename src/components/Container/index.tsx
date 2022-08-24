import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Container = styled.div`
  ${({ theme }) => css`
    width: 100%;
    max-width: ${theme.grid.container};
    margin-left: auto;
    margin-right: auto;
    padding-right: calc(${theme.grid.gutter} / 2);
    padding-left: calc(${theme.grid.gutter} / 2);
    margin-top: 5rem;

    ${media.lessThan('small')`
      margin-top: 4rem;
    `}
  `}
`
