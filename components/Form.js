import styled from 'styled-components'
import React, { useState } from 'react'
import fire from '../config/firebase-config'
import 'firebase/firestore'


const Container = styled.section`
    width:100%;
    display:flex;
    flex-direction: column;
    background-color: #24292E;
    height:250px;
    justify-content: center;
    align-items: center;
`
const Title = styled.h1`
    color:#fff;
    font-size: 40px;
    font-weight: 700;
    text-align: center;
    width:50%;

`
const LeadForm = styled.section`

    display:flex;
    width:50%;
    flex-direction: row;
    justify-content:space-evenly;

`
const Input = styled.input`
    background: #EFF0F7;
    border-radius: 16px;
    border:0;
    height:50px;
    text-align: center;
    width:220px;

`

const SubmitButton = styled.button`

    cursor:pointer;
    border:0;
    border-radius:10px;
    color: #fff;
    width: 165px;
    height: 48px;
    background: #1C74D9;
    font-weight:bold;
    font-size:18px;

    &:hover {
        background-color: #fff;
        color: #000;
    }
    
`

    


function Form(){

    const [name, setName] = useState("")
    const [email,setEmail] = useState("")
    const [phone,setPhone] = useState("")

    const handleSubmit = () =>{
            
        fire.
        firestore().collection('lead_capture').add({
            nome: name,
            email: email,
            telefone: phone
        })

        setEmail('')
        setPhone('')
        setName('')
    }

    return(
        <div>
            <Container>
                <Title>Lorem ipsum dolor sit amet, consectetur adipiscing. Risus aliquet.</Title>
                <LeadForm>
                    <Input 
                        type="text" 
                        label="Nome" 
                        placeholder="Nome Completo"
                        autoFocus
                        required
                        value={name}
                        onChange={(event) => setName(event.target.value)}
                    />
                    <Input 
                        type="email" 
                        label="Email" 
                        placeholder="exemplo@email.com"
                        autoFocus
                        required
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                    />
                    <Input 
                        type="text" 
                        label="Nome" 
                        placeholder="(XX) XXXXX-XXXX"
                        autoFocus
                        required
                        value={phone}
                        onChange={(event) => setPhone(event.target.value)}
                    />
                    <SubmitButton onClick={() => {handleSubmit()}}>ENVIAR</SubmitButton>
                </LeadForm>
            </Container>
        </div>
    )
}

export default Form