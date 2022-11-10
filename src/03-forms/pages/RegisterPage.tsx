import { FormEvent } from "react";
import { useForm } from "../hooks/useForm";
import "../styles/styles.css";
export const RegisterPage = () => {
  const {
    name,
    email,
    password,
    password2,
    formData,
    handleChange,
    resetForm,
  } = useForm({
    name: "",
    email: "",
    password: "",
    password2: "",
  });

  const onSumbit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(formData);
  };

  const isValidEmail = (email: string) => {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  };

  return (
    <div>
      RegisterPages
      <form action="" noValidate onSubmit={onSumbit}>
        <input
          name="name"
          value={name}
          onChange={handleChange}
          type="text"
          placeholder="name"
          className={`${name.trim().length <= 0 && "has-error"}`}
        />
        {name.trim().length <= 0 && <span>Este campo es necesario</span>}
        <input
          name="email"
          value={email}
          onChange={handleChange}
          type="email"
          placeholder="email"
          className={`${isValidEmail(email) && "has-error"}`}
        />
        {isValidEmail(email) && <span>Email no valido</span>}
        <input
          name="password"
          value={password}
          onChange={handleChange}
          type="password"
          placeholder="password"
        />
        {password.trim().length <= 0 && <span>Este campo es necesario</span>}
        {password.trim().length < 6 && password.trim().length < 0 && (
          <span>La contraseña debe tener 6 letras</span>
        )}
        <input
          name="password2"
          value={password2}
          onChange={handleChange}
          type="password"
          placeholder="Repeat password"
        />
        {password.trim().length <= 0 && <span>Este campo es necesario</span>}
        {password.trim().length > 0 && password !== password2 && (
          <span>La contraseña deben ser iguales</span>
        )}
        <button type="submit">Create</button>
        <button type="button" onClick={resetForm}>
          Reset Form
        </button>
      </form>
    </div>
  );
};
