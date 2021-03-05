import styled from 'styled-components'


const Foot = styled.section`
    
    bottom:0;
    height: 100%;
    color:#fff;
    background: black;
    display:flex;
    justify-content: center;
    left: 0;
    bottom: 0;
    width: 100%;
    
`

const FootText = styled.h2`
    
    font-size: 12px;
    align-self: center;

`

function Footer () {

    return(
        <Foot>
            <FootText>DATAJUS all rights reserved</FootText>
        </Foot>
    )
}

export default Footer