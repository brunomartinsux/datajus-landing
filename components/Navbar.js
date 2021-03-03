import styled from 'styled-components'
import Link from 'next/link'

const Nav = styled.nav`

    height: 60px;
    background-color: #000;
    justify-content: space-between;
    display:flex;
    position: fixed;
    color:#fff;
    width: 100%;
    margin-bottom:10%;
    box-shadow: 5px 3px 20px #0001;

`

const Logo = styled.h1`
    margin-left: 5%;
    color: #fff;

    & :hover {
        cursor:pointer;
    }
`
const Menu = styled.div`

    width:40%;
    margin-right:5%;
    display:flex;
    justify-content:space-evenly;
    align-self:center;
    font-weight: 500px;
    font-size:15px;

`
const Button = styled.button`

    cursor:pointer;
    border:true;
    border-radius:10px;
    color: #fff;
    margin-top:10px;
    width: 150px;
    height: 40px;
    background: transparent;
    font-weight:bold;
    border-color: #fff;
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