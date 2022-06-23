import './../assets/style/globals.css'
import './../assets/style/style.css'
import { Provider } from 'react-redux'
import store from './../app/redux/store'

const App = ({ Component, pageProps }) => {
    return (
        <Provider store={store}>
            <Component {...pageProps} />
        </Provider>
    )
}

export default App