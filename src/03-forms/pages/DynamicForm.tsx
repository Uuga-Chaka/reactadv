import { Formik, Form } from "formik";
import { MySelect, MyTextInput } from "../components";
import formJson from "../data/custom-form.json";
import * as Yup from "yup";

const initialValues: { [x: string]: any } = {};
const requiredFields: { [x: string]: any } = {};
for (const input of formJson) {
  initialValues[input.name] = input.value;

  let schema = Yup.string();

  if (!input.validation) {
    continue;
  }

  for (const rule of input.validation) {
    if (rule.type === "required") {
      schema = schema.required("Este campo es requerido");
    }
    if (rule.type === "minLenght") {
      schema = schema.min(
        (rule as any).value || 1,
        "Solo " + ((rule as any).value || 1) + " letras"
      );
    }
  }
  requiredFields[input.name] = schema;
}

const validationSchema = Yup.object({ ...requiredFields });

export const DynamicForm = () => {
  return (
    <div>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(e) => console.log(e)}
      >
        {(formik) => (
          <Form noValidate>
            {formJson.map(({ type, name, placeholder, label, options }, i) => {
              if (type === "input" || type === "password" || type === "email") {
                return (
                  <MyTextInput
                    key={i + "-i"}
                    type={type as any}
                    name={name}
                    label={label}
                    placeholder={placeholder}
                  />
                );
              } else if (type === "select") {
                return (
                  <MySelect key={i + "-i"} name={name} label={label}>
                    <option value="">Select an option</option>
                    {options?.map((opt) => (
                      <option key={opt.id} value={opt.id}>
                        {opt.name}
                      </option>
                    ))}
                  </MySelect>
                );
              }
              return <></>;
            })}
            <button type="submit">Create</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
