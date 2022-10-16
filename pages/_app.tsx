import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { GetStaticProps } from 'next'
import * as PoliceService from './services/police-service'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp

export const getStaticProps: GetStaticProps = async () => {
  const policeForces = PoliceService.getForces();
  return {
    props: {
      policeForces
    }
  };
}