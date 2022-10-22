import axios from "axios";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import UserContext from "../../components/Context/context";
import FormButton from "../../components/FormButton/FormButton";
import { BASE_URL } from "../../constants/urls";

export default function LoginForm() {
  const [form, setForm] = useState({ email: "", password: "" });
  const navigate = useNavigate();
  const {setUser} = useContext(UserContext);

  function handleForm(e) {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  }

  function login(e) {
    e.preventDefault();

    axios
      .post(`${BASE_URL}/auth/login`, form)
      .then((res) => {
        console.log(res.data);
        setUser({...res.data})
        navigate("/habitos");
      })
      .catch((err) => err.response.data.details ? alert(err.response.data.details[0]) : alert(err.response.data.message) );
  }

  return (
    <Form onSubmit={login}>
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
      <FormButton>Entrar</FormButton>
    </Form>
  );
}

const Form = styled.form`
  max-width: 90%;
`;
