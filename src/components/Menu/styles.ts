import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  height: 90px;
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

export const WrapperLogo = styled.div`
  height: 100%;
`

export const Logo = styled.img`
  object-fit: fill;
  height: 100%;
  transform: translateY(4px);
`
