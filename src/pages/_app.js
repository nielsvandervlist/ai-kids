import 'tailwindcss/tailwind.css'
import '../styles/main.scss'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import '../../src/routes'
config.autoAddCss = false

const App = ({ Component, pageProps }) => <Component {...pageProps} />

export default App
