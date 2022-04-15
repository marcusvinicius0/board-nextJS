import Head from 'next/head';
import styles from '../styles/styles.module.scss';


export default function Home() {
  return (
    <>
      <Head>
        <title>Board - Organizando suas tarefas</title>
      </Head>
      <div>
        <h1 className={styles.title}>
          learning <span>next.js, typescript and sass</span> with matheus fraga
        </h1>
      </div>
    </>
  )
}
