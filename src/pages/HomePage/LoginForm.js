import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import FormButton from "../../components/FormButton/FormButton";
import { BASE_URL } from "../../constants/urls";

export default function LoginForm() {
  const [form, setForm] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  function handleForm(e) {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  }

  function login(e) {
    e.preventDefault();

    axios
      .post(`${BASE_URL}/auth/login`, form)
      .then((res) => {
        console.log(res);
        navigate("/habitos");
      })
      .catch((err) => alert(err.response.data));
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
