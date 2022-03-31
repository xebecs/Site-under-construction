import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Site Under Construction!" />
        <p className="description">
          We are polishing the dope Yoyos for you, <code><a id="myAnchor" href="http://www.animationbd.com">please join our discord</a></code>
        </p>
      </main>

      <Footer />
    </div>
  )
}
