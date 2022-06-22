import '../styles/globals.css'
import Navbar from './navbar'

function MyApp({ Component, pageProps }) {
  return <>
   <div>

  <Navbar/>
   </div>
  <hr />
  <Component {...pageProps} />
  </>

}

export default MyApp
