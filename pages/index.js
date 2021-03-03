import styled from 'styled-components'
import Banner from '../components/Banner'
import Products from '../components/Products'

const Title = styled.h1`
  font-size: 50px;
  color: black;
`

export default function Home() {
  return (
    <div>
    <Banner />
    <Products />
    </div>
  )
}
