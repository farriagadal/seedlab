import 'src/styles/main.css'
import type { AppProps } from 'next/app'
import Transition from 'src/components/Transition'
import Footer from 'src/components/Footer'
import Header from 'src/components/Header'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import ReactPixel from 'react-facebook-pixel'

import dynamic from 'next/dynamic'

const FacebookPixelWithNoSSR = dynamic(() => import('src/components/FacebookPixel'), {
  ssr: false
})

export default function App({ Component, pageProps }: AppProps) {
  // const router = useRouter()

  // useEffect(() => {
  //   import('react-facebook-pixel')
  //     .then((x) => x.default)
  //     .then((ReactPixel) => {
  //       ReactPixel.init('3082924931783292') // facebookPixelId
  //       // ReactPixel.pageView()

  //       // router.events.on('routeChangeComplete', () => {
  //       //   ReactPixel.pageView()
  //       // })
  //     })
  // }, [router.events])

  // useEffect(() => {
  //   const advancedMatching: any = { em: 'farriagadal94@gmail.com' } // optional, more info: https://developers.facebook.com/docs/facebook-pixel/advanced/advanced-matching
  //   const options = {
  //     autoConfig: true, // set pixel's autoConfig. More info: https://developers.facebook.com/docs/facebook-pixel/advanced/
  //     debug: false, // enable logs
  //   }
  //   setTimeout(() => {
  //     if (window && typeof window !== 'undefined') {
  //       ReactPixel.init('3082924931783292', advancedMatching, options)
  //     }
  //   }, 5000)
    
  // }, [window])
  

  return (
    <>
      <FacebookPixelWithNoSSR />
      <Header />
      <Transition>
        <Component {...pageProps} />
      </Transition>
      <Footer />
    </>

  )
}
// <!-- Meta Pixel Code -->
// <script>
// !function(f,b,e,v,n,t,s)
// {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
// n.callMethod.apply(n,arguments):n.queue.push(arguments)};
// if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
// n.queue=[];t=b.createElement(e);t.async=!0;
// t.src=v;s=b.getElementsByTagName(e)[0];
// s.parentNode.insertBefore(t,s)}(window, document,'script',
// 'https://connect.facebook.net/en_US/fbevents.js');
// fbq('init', '3082924931783292');
// fbq('track', 'PageView');
// </script>
// <noscript><img height="1" width="1" style="display:none"
// src="https://www.facebook.com/tr?id=3082924931783292&ev=PageView&noscript=1"
// /></noscript>
// <!-- End Meta Pixel Code -->