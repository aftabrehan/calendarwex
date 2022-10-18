import 'styles/globals.scss'
import stl from './document.module.scss'

const MyApp = ({ Component, pageProps }) => (
  <div className={stl.body}>
    <Component {...pageProps} />
  </div>
)

export default MyApp
