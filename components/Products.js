import styled from 'styled-components'
import ProductCard from './ProductCard'
import JSON from '../Texts/Products.JSON'

const Product = styled.section`

    display:flex;
    justify-content:space-between;
    margin-left:8%;
    margin-right:8%;
    margin-top:1%;
    border-radius:2px;

`

function Products (){

    return(
        <Product>
            < ProductCard title={JSON.produto1.titulo} description={JSON.produto1.subtitulo}/>
            < ProductCard title={JSON.produto2.titulo} description={JSON.produto2.subtitulo}/>
            < ProductCard title={JSON.produto3.titulo} description={JSON.produto3.subtitulo} />
        </Product>
    )

    
}

export default Products