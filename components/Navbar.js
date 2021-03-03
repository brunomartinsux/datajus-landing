import styled from 'styled-components'
import Link from 'next/link'

const Nav = styled.nav`

    height: 60px;
    background-color: white;
    justify-content: space-between;
    display:flex;
    position: fixed;
    width: 100%;
    margin-bottom:10%;
    box-shadow: 5px 3px 20px #0001;

`

const Logo = styled.h1`
    margin-left: 5%;
    color: black;

    & :hover {
        cursor:pointer;
    }
`
const Menu = styled.div`

    width:30%;
    margin-right:5%;
    display:flex;
    justify-content:space-evenly;
    align-self:center;
    font-weight: 500px;
    font-size:12px;

`
const Button = styled.button`

    cursor:pointer;
    border:1;
    border-radius:10px;
    color: #1C74D9;
    margin-top:10px;
    width: 150px;
    height: 30px;
    background: #fff;
    font-weight:bold;
    border-color: #1C74D9;
    font-size:20px;

    &:hover {
        color: #000;
      }
`

function Navbar (){

    return(
        <Nav>
            <Logo>Datajus</Logo>
            <Menu>
                <h1>Quem somos</h1>
                <h1>Produtos</h1>
                <h1>F.A.Q</h1>
                <Button>Fale conosco</Button>
            </Menu>
        </Nav>
    )
}

export default Navbar