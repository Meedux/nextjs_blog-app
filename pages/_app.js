//import './../assets/style/globals.css'
import '../assets/style/style.css'
import { Provider } from 'react-redux'
import store from '../app/redux/store'
import NavigationBar from '../components/Navbar';
import Footer from '../components/Footer';

const App = ({ Component, pageProps }) => {
    return (
        <Provider store={store}>
            <NavigationBar />
            <Component {...pageProps} />
        </Provider>
    )
}

export default App