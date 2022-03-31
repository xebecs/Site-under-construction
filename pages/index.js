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
          We are polishing the dope Yoyos for you, please join our discord <code><a id="myAnchor" href="http://wwwanimationbd.com">www.animationbd.com</a></code>
        </p>
      </main>

      <Footer />
    </div>
  )
}
