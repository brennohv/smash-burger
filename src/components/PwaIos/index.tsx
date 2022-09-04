import * as S from './styles'
import PwaInstallPopupIOS from 'react-pwa-install-ios'
import { useEffect } from 'react'

const PwaIos = () => {
  useEffect(() => {
    window.localStorage.removeItem('pwa_popup_display')
  }, [])

  return (
    <PwaInstallPopupIOS
      delay={3}
      lang="pt"
      appIcon="/img/logo.jpg"
    ></PwaInstallPopupIOS>
  )
}

export default PwaIos
