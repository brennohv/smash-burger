import * as S from './styles'
import PwaInstallPopupIOS from 'react-pwa-install-ios'

const PwaIos = () => (
  <PwaInstallPopupIOS
    delay={3}
    lang="pt"
    appIcon="/img/logo.jpg"
  ></PwaInstallPopupIOS>
)

export default PwaIos
