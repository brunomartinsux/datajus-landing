import styled from 'styled-components'
import JSON from '../Texts/Infodata.JSON'



const Section = styled.section`

    display:flex;
    flex-direction: row;
    justify-content:space-between;
    width:100%;
    height:150px;
    background-color: #F5F5F5;
    height:300px;  

`

const Title = styled.h1`

    font-size:40px;
    color: #1E2327;


`
const Subtitle = styled.a`

    font-size:20px;
    color: #1E2327;
`

const Container = styled.div`

    display:flex;
    flex-direction:column;
    text-align:center;
    justify-content:center;
    margin-left:5%;
    margin-right:5%;
`

function Infodata () {

    return(
        <>
            <Section>
                <Container>
                    <Title>{JSON.card1.titulo}</Title>
                    <Subtitle>{JSON.card1.subtitulo}</Subtitle>
                </Container>
                <Container>
                    <Title>{JSON.card2.titulo}</Title>
                    <Subtitle>{JSON.card2.subtitulo}</Subtitle>
                </Container>
                <Container>
                    <Title>{JSON.card3.titulo}</Title>
                    <Subtitle>{JSON.card3.subtitulo}</Subtitle>
                </Container>
                <Container>
                    <Title>{JSON.card4.titulo}</Title>
                    <Subtitle>{JSON.card4.subtitulo}</Subtitle>
                </Container>
            </Section>
        </>
    )
}

export default Infodata