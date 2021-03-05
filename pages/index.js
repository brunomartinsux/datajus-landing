import Banner from '../components/Banner'
import Form from '../components/Form'
import Infodata from '../components/Infodata'
import Products from '../components/Products'
import TitleSubtitle from '../components/TitleSubtitle'


export default function Home() {
  return (
    <div>
    <Banner />
    <Products />
    <TitleSubtitle/>
    <Infodata/>
    <Form/>
    </div>
  )
}
