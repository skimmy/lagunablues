import styles from './page.module.css'
import Image from 'next/image'

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>Laguna Blues</h1>
      <Image src="/logo.svg" width="500" height="300" />
    </main>
  )
}
