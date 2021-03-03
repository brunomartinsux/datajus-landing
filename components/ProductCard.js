import styled from 'styled-components'

const Card = styled.section`

    display: flex;
    background-color: #0001;
    border-radius:15px;
    width: 400px;
    height:300px;
    box-shadow: 5px 3px 10px #0003;
    flex-direction: column;
    text-align: center;

`

function ProductCard (props) {

    return(
        <Card>
            <h1>{props.title}</h1>
            <a>{props.description}</a>
        </Card>
    )
}

export default ProductCard