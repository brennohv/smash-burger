import * as S from './styles'
import { useState } from 'react'

export type MenuProps = {
  inEnglish: (status: boolean) => void
}

const Menu = ({ inEnglish }: MenuProps) => {
  const [showLanguages, setShowLanguages] = useState(false)
  const [language, setlanguage] = useState('PT')
  const [brand, setBrand] = useState('img/portugal (1).png')

  const handleLang = (value: 'PT' | 'EN') => {
    if (value === 'PT') {
      setlanguage('PT')
      setBrand('img/portugal (1).png')
      inEnglish(false)
      setShowLanguages(false)
    }

    if (value === 'EN') {
      setlanguage('EN')
      setBrand('img/reino-unido.png')
      inEnglish(true)
      setShowLanguages(false)
    }
  }

  return (
    <S.Wrapper>
      <S.Header>
        <S.WrapperLogo>
          <S.Logo src="img/logo sem fundo.png" alt="Logo Smash Burger"></S.Logo>
        </S.WrapperLogo>
        <div>
          <S.WrapperLanguage onClick={() => setShowLanguages(!showLanguages)}>
            <S.ImgBrandChosen src={brand} alt={language} />
            <S.LangLabel color="black">{language}</S.LangLabel>
          </S.WrapperLanguage>

          <S.DropdowLanguages showLang={showLanguages}>
            <S.LangOption onClick={() => handleLang('EN')}>
              <S.ImgBrandChosen src="img/reino-unido.png" alt="Bandeira EN" />
              <S.LangLabel color="white">EN</S.LangLabel>
            </S.LangOption>
            <S.LangOption onClick={() => handleLang('PT')}>
              <S.ImgBrandChosen src="img/portugal (1).png" alt="bandeira PT" />
              <S.LangLabel color="white">PT</S.LangLabel>
            </S.LangOption>
          </S.DropdowLanguages>
        </div>
      </S.Header>
    </S.Wrapper>
  )
}

export default Menu
