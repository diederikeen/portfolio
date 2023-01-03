import '../styles/globals.css'
import type { AppProps } from 'next/app'

import {Bebas_Neue, Forum} from '@next/font/google';

const bebasNeue = Bebas_Neue({subsets: ['latin'], weight: '400'});
const forum = Forum({subsets: ['latin'], weight: ['400']});


export default function App({ Component, pageProps }: AppProps) {
  return <>
      <style jsx global>{`
        html,
        h1,h2,h3,h4,h5,h6 {
         font-family: ${bebasNeue.style.fontFamily}, serif;
        }
        
        button {
        font-family: ${bebasNeue.style.fontFamily}, serif;
        }
      `}</style>
      <div className={`${forum.className} ${bebasNeue.className}`}><Component {...pageProps} /></div>
    </>
}
