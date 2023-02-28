import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

import Header from '../components/Header'
import List from '../components/List'

const Home: NextPage = () => {
  
  return (
    <div className="min-h-screen items-center bg-slate-200">
      <Head>
        <title>Movies</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <main className="flex flex-1 flex-col items-center text-center">
        <Header title="Movies"/>
        <List />
      </main>

      <footer className="flex h-24 w-full items-center justify-center border-t">
        <a
          className="flex items-center justify-center gap-2"
          href="https://https://github.com/emarubi/movies-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          by Emanuela
        </a>
      </footer>
    </div>
  )
}

export default Home
