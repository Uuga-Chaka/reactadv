import { Form, Formik } from "formik";
import * as Yup from "yup";
import "../styles/styles.css";
import { MyTextInput } from "../components";
export const RegisterFormikPage = () => {
  return (
    <div>
      RegisterFormikPage
      <Formik
        initialValues={{ name: "", email: "", password: "", password2: "" }}
        onSubmit={(values) => console.log(values)}
        validationSchema={Yup.object({
          name: Yup.string().min(2).max(15).required("Requerido"),
          email: Yup.string().email().required("Requerido"),
          password: Yup.string().min(6).required("Requerido"),
          password2: Yup.string()
            .oneOf([Yup.ref("password")], "Las contrase;as no son iguales")
            .required("Requerido"),
        })}
      >
        {(formik) => (
          <Form>
            <MyTextInput label={"name"} name={"name"} placeholder={"name"} />
            <MyTextInput label={"email"} name={"email"} placeholder={"email"} />
            <MyTextInput
              label={"password"}
              name={"password"}
              placeholder={"password"}
            />
            <MyTextInput
              label={"password2"}
              name={"password2"}
              placeholder={"password"}
            />
            <button type="submit">Create</button>
            {/* <button type="button" onClick={resetForm}>
            Reset Form
          </button> */}
          </Form>
        )}
      </Formik>
    </div>
  );
};
