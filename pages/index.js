import Head from "next/head"
import styles from "@/styles/Home.module.css"
import Navbar from "@/components/Navbar"
import Hero from "@/components/Hero"
import SkillsHome from "@/components/SkillsHome"
import Footer from "@/components/Footer"


export default function Home() {
  return (
    <>
      <Head>
        <title>Portfolio - Mónica López</title>
        <meta
          name="description"
          content="Portfolio Monica López 2023"
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        />
        <link
          rel="icon"
          href="/favicon.ico"
        />
      </Head>
      <main className={`${styles.main}`}>
        <Navbar />
        <Hero />
        <SkillsHome />
        <Footer />
      </main>
    </>
  )
}
