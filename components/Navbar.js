import styled from 'styled-components'
import Link from 'next/link'

const Nav = styled.nav`

    height: 80px;
    background: #000;
    color: #fff;
    display:flex;

`

const Logo = styled.h1`
    margin-left: 3%;
`

function Navbar (){

    return(
        <Nav>
            <Logo>Datajus</Logo>
        </Nav>
    )
}

export default Navbar