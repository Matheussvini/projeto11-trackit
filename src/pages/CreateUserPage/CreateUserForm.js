import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import FormButton from "../../components/FormButton/FormButton";
import { BASE_URL } from "../../constants/urls";
import { ThreeDots } from "react-loader-spinner";

export default function CreateUserForm() {
  const [form, setForm] = useState({ email: "", password: "" });
  const navigate = useNavigate();
  const [disabled, setDisabled] = useState(false);

  function handleForm(e) {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  }

  function registration(e) {
    e.preventDefault();
    setDisabled(true);

    axios
      .post(`${BASE_URL}/auth/sign-up`, form)
      .then((res) => {
        navigate("/");
      })
      .catch((err) => {
        setDisabled(false)
        err.response.data.details
          ? alert(err.response.data.details[0])
          : alert(err.response.data.message)
      });
  }

  return (
    <Form onSubmit={registration}>
      <input
        name="email"
        type="email"
        placeholder="email"
        onChange={handleForm}
        required
        disabled={disabled}
      />

      <input
        name="password"
        type="password"
        placeholder="senha"
        onChange={handleForm}
        required
        disabled={disabled}
      />

      <input
        name="name"
        type="text"
        placeholder="nome"
        onChange={handleForm}
        required
        disabled={disabled}
      />

      <input
        name="image"
        type="url"
        placeholder="foto"
        onChange={handleForm}
        required
        disabled={disabled}
      />

      <FormButton disabled={disabled}>
        {disabled ? (
          <ThreeDots
          height="45px"
          radius="9"
          color="#FFF"
          ariaLabel="three-dots-loading"
          wrapperStyle={{}}
          wrapperClassName=""
          visible={true}
        />
        ) : (
          "Entrar"
        )}
      </FormButton>
    </Form>
  );
}

const Form = styled.form`
  max-width: 90%;
`;
