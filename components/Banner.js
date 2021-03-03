import styled from 'styled-components'
import JSON from '../Texts/Banner.JSON'

const BannerSection = styled.section`
    
    font-family: 'Ubuntu';
    display:flex;
    flex-direction:column;
    height:350px;
    align-items:center;
    text-align:center;
    justify-content:center;
    font-size:25px;

`

const Button = styled.button`

    cursor:pointer;
    border:0;
    border-radius:5px;
    margin-top:20px;
    max-width: 200px;
    background: #0001;
    color: #000;
    font-weight:bold;
    font-size:20px;

    &:hover {
        color: #fff;
      }
`

function Banner(){

    return(
        <BannerSection>
            <h1>{JSON.titulo}</h1>
            <a>{JSON.subtitulo}</a>
            <Button>Saiba mais</Button>
        </BannerSection>
    )
}

export default Banner