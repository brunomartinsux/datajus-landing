import styled from 'styled-components'

const Card = styled.section`

    display: flex;
    background-color: #fff;
    border-radius:15px;
    width: 400px;
    height:300px;
    box-shadow: 5px 5px 10px #0001;
    flex-direction: column;
    text-align: center;
    font-size:22px;
    justify-content: center;
    margin-top:-140px;
    color: #1E2327;


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