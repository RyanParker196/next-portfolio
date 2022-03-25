import type { NextPage } from 'next'
import ListGroup from 'react-bootstrap/ListGroup'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Container, Row } from 'react-bootstrap'

const Home: NextPage = () => (
  <Container>
    <Head>
      <title>Ryan Parker</title>
      <meta name="description" content="Porfolio Website" />
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <Row>
      <Col>
        <h1>Ryan Parker</h1>
        <h2>Software Engineer / Full Stack Web Developer</h2>
        <button className={styles.blackButton}>
          <img src='GitHub-Mark-Light-64px.png'></img>
          <img src='GitHub_Logo_White.png' style={{ height: '100px' }} ></img>
        </button>
      </Col>
    </Row>

  </Container>
)

export default Home
