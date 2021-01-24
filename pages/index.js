import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Layout from '../components/layouts/Layout'
import MeComponent from '../components/me/MeComponent'


export default function Home() {
  return (
    <>
    <div>
      <Layout title="me">
        <MeComponent />
      </Layout>

    </div>
    </>
  );
}
