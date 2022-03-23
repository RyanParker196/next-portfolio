import type { NextPage } from 'next'
import ListGroup from 'react-bootstrap/ListGroup'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import 'bootstrap/dist/css/bootstrap.min.css';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Ryan Parker</title>
        <meta name="description" content="Porfolio Website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <ListGroup>
        <ListGroup.Item>Cras justo odio</ListGroup.Item>
        <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
        <ListGroup.Item>Morbi leo risus</ListGroup.Item>
        <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
        <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
      </ListGroup>

      <footer className={styles.footer}>
        footer
      </footer>
    </div>
  )
}

export default Home
