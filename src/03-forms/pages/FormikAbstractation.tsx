import { Formik, Form } from "formik";
import * as Yup from "yup";

import { MyCheckbox, MySelect, MyTextInput } from "../components";

import "../styles/styles.css";

export const FormikAbstractation = () => {
  return (
    <div>
      <h1>Formik Abstractation</h1>
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          terms: false,
          jobType: "",
        }}
        onSubmit={(values) => console.log(values)}
        validationSchema={Yup.object({
          firstName: Yup.string()
            .max(15, "Debe tener 15 caracteres o menos")
            .required("Requerido"),
          lastName: Yup.string()
            .max(15, "Debe tener 15 caracteres o menos")
            .required("Requerido"),
          email: Yup.string()
            .email("El email no tiene un formato valido")
            .required("Requerido"),
          terms: Yup.boolean().oneOf([true], "Debe aceptar las condiciones"),
          jobType: Yup.string()
            .notOneOf(["it-senior"], "Esta opcion no es permitida")
            .required(),
        })}
      >
        {(formik) => (
          <Form>
            <MyTextInput
              label={"First name"}
              name={"firstName"}
              placeholder="Name pls"
            />
            <MyTextInput
              label={"First name"}
              name={"lastName"}
              placeholder="lastName pls"
            />
            <MyTextInput
              label={"First name"}
              name={"email"}
              placeholder="Email pls"
              type="email"
            />
            <MySelect label="Job type" name="jobType">
              <option value=""></option>
              <option value="developer">developer</option>
              <option value="designer">designer</option>
              <option value="it-senior">it senior</option>
            </MySelect>
            <MyCheckbox name="terms" label="Terms and conditions" />
            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
