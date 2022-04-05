import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Crypto Yoyo Club - 🪀 Offering you 3d Animated Hyper-Realistic YoYos as a key to enter the club for a very reasonable mint price!
</title>
        <link rel="icon" href="/favico_cyc.png" />
      </Head>

      <main>
        <Header title="Site Under Construction!" />
        <p className="description">
          We are polishing the dope Yoyos for you, <code><a id="myAnchor" href="https://discord.gg/BBsVwVhW">please join our discord</a></code>
        </p>
      </main>

      <Footer />
    </div>
  )
}
