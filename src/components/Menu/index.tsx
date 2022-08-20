import * as S from './styles'
import { useState } from 'react'

const Menu = () => {
  const [showLanguages, setShowLanguages] = useState(false)
  const [language, setlanguage] = useState('PT')
  const [brand, setBrand] = useState('img/portugal (1).png')

  const handleLang = (value: 'PT' | 'EN') => {
    if (value === 'PT') {
      setlanguage('PT')
      setBrand('img/portugal (1).png')
    }

    if (value === 'EN') {
      setlanguage('EN')
      setBrand('img/reino-unido.png')
    }
  }

  return (
    <S.Wrapper>
      <S.Header>
        <S.WrapperLogo>
          <S.Logo src="img/logo sem fundo.png"></S.Logo>
        </S.WrapperLogo>
        <S.WrapperLanguage onClick={() => setShowLanguages(!showLanguages)}>
          <S.ImgBrandChosen src={brand} alt={language} />
          <S.LangLabel color="black">{language}</S.LangLabel>

          {showLanguages && (
            <S.DropdowLanguages>
              <S.LangOption onClick={() => handleLang('PT')}>
                <S.ImgBrandChosen src="img/portugal (1).png" alt="" />
                <S.LangLabel color="white">PT</S.LangLabel>
              </S.LangOption>
              <S.LangOption onClick={() => handleLang('EN')}>
                <S.ImgBrandChosen src="img/reino-unido.png" alt="" />
                <S.LangLabel color="white">EN</S.LangLabel>
              </S.LangOption>
            </S.DropdowLanguages>
          )}
        </S.WrapperLanguage>
      </S.Header>
    </S.Wrapper>
  )
}

export default Menu
