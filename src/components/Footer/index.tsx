import { Container } from 'components/Container'
import Heading from 'components/Heading'
import * as S from './styles'

const Footer = () => (
  <S.Wrapper>
    <Container>
      <S.Content>
        <S.Column>
          <Heading color="white" small>
            Contact Us
          </Heading>

          <a href="mailto:smashburgerlisboa1@gmail.com">Email</a>
          <a href="tel:+351932151385">+351932151385</a>
        </S.Column>

        <S.Column>
          <Heading color="white" small>
            Follow us
          </Heading>

          <nav aria-labelledby="social media">
            <a
              href="https://www.instagram.com/smashburger.lisboa/"
              target="_blank"
              rel="noopenner, noreferrer"
            >
              Instagram
            </a>
            <a
              href="https://www.facebook.com/smashburger.lisboa"
              target="_blank"
              rel="noopenner, noreferrer"
            >
              Facebook
            </a>
          </nav>
        </S.Column>

        <S.Column>
          <Heading color="white" small>
            Order now
          </Heading>
          <a
            href="https://www.ubereats.com/pt/store/smash-burger-alameda/jjSx0TukTOu0DxsJNcvLmQ?diningMode=DELIVERY"
            target="_blank"
            rel="noreferrer"
          >
            Uber
          </a>
          <a
            href="https://glovoapp.com/pt/pt/lisboa/smash-burger-lisboa/"
            target="_blank"
            rel="noreferrer"
          >
            Glovo
          </a>
        </S.Column>

        <S.Column aria-labelledby="footer-adress">
          <Heading color="white" small>
            Location
          </Heading>
          <span>Rua Barão de Sabrosa, 146</span>
          <span>Penha de França - 1900-094</span>
          <span>Lisboa - PT</span>
          <a
            target="_blank"
            href="https://www.google.com/maps/dir/38.7466246,-9.1124146/SMASH+BURGER+-+Lisboa,+R.+Bar%C3%A3o+de+Sabrosa+146,+1900-094+Lisboa/@38.7418552,-9.129337,15z/data=!3m1!4b1!4m10!4m9!1m1!4e1!1m5!1m1!1s0xd1933763a158ef7:0x4ab832ef5ade5b43!2m2!1d-9.1288302!2d38.7354052!3e0"
            rel="noreferrer"
          >
            Maps
          </a>
        </S.Column>
      </S.Content>

      <S.Copyright>Smash Burger © All rights reserved.</S.Copyright>
    </Container>
  </S.Wrapper>
)

export default Footer
