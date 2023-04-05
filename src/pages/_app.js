import {Catamaran} from 'next/font/google'

import '@/styles/globals.css'



const catamaran = Catamaran({

  subsets:['latin'],
  variable:'--font-catamaran',


})

export default function App({ Component, pageProps }) {
  return <main className={`${catamaran.variable} font-sans`} > <Component {...pageProps} /> </main>
}
