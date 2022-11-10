import { FormikErrors, useFormik } from "formik";
import "../styles/styles.css";

interface FormValues {
  firstName: string;
  lastName: string;
  email: string;
}

export const FormikBasicPage = () => {
  const validate = ({ firstName, email, lastName }: FormValues) => {
    const errors: FormikErrors<FormValues> = {};
    if (!firstName) {
      errors.firstName = "Required";
    } else if (firstName.length > 15) {
      errors.firstName = "Bust be 15 character or less";
    }
    if (!lastName) {
      errors.lastName = "Required";
    } else if (lastName.length > 10) {
      errors.lastName = "Bust be 10 character or less";
    }
    if (!email) {
      errors.email = "Required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
      errors.email = "Invalid email address";
    }
    return errors;
  };

  const { values, errors, touched, handleSubmit, handleChange, handleBlur } =
    useFormik({
      initialValues: { firstName: "", lastName: "", email: "" },
      onSubmit: (values) => {
        console.log(values);
      },
      validate,
    });
  return (
    <div>
      <h1>FormikBasicPage</h1>
      <form onSubmit={handleSubmit} action="" noValidate>
        <label htmlFor="">First Name</label>
        <input
          value={values.firstName}
          onChange={handleChange}
          onBlur={handleBlur}
          type="text"
          name="firstName"
        />
        {touched.firstName && errors.firstName && (
          <span>{errors.firstName}</span>
        )}
        <label htmlFor="">Last Name</label>
        <input
          value={values.lastName}
          onChange={handleChange}
          onBlur={handleBlur}
          type="text"
          name="lastName"
        />
        {touched.lastName && errors.lastName && <span>{errors.lastName}</span>}
        <label htmlFor="">Email</label>
        <input
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
          type="email"
          name="email"
        />
        {touched.email && errors.email && <span>{errors.email}</span>}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
