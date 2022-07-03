import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Navbar from '../components/Navbar'
import Header from '../components/Header'

export default function Home() {
  return (
    <section>    
      <Navbar />
      <Header />
      
    </section>

  )
}
