import Banner from '../components/Banner'
import Form from '../components/Form'
import Infodata from '../components/Infodata'
import Products from '../components/Products'
import TitleSubtitle from '../components/TitleSubtitle'
import Head from 'next/head'


export default function Home() {
  return (
    <div>
    <Head>
        <title>Datajus</title>
    </Head>
    <Banner />
    <Products />
    <TitleSubtitle/>
    <Infodata/>
    <Form/>
    </div>
  )
}
