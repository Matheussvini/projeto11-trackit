import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import styled from "styled-components"
import FormButton from "../../components/FormButton/FormButton"
import { BASE_URL } from "../../constants/urls"

export default function CreateUserForm() {
    const [form, setForm] = useState({ email: "", password: "" })
    const navigate = useNavigate()

    function handleForm(e){
        const { name, value } = e.target
        setForm({ ...form, [name]: value })
    }

    function registration(e){
        e.preventDefault()
        console.log(form)

        axios.post(`${BASE_URL}/auth/sign-up`, form)
            .then(res => {
                console.log(res)
                navigate("/")
            })
            .catch(err => alert(err.response.data))
    }


    return (
        <Form onSubmit={registration} >
            <input 
            name="email"
            type="email"
            placeholder="email"
            onChange={handleForm}
            required
             />

            <input 
            name="password"
            type="password"
            placeholder="senha"
            onChange={handleForm}
            required
            />

            <input 
            name="name"
            type="text"
            placeholder="nome"
            onChange={handleForm}
            required
            />

            <input 
            name="image"
            type="url"
            placeholder="foto"
            onChange={handleForm}
            required
            />
            
              <FormButton>
                Cadastrar
              </FormButton>
        </Form>
    )
}

const Form = styled.form`
        max-width: 90%;
    
`