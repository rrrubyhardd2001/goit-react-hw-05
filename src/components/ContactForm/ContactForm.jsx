import { nanoid } from "nanoid";
import { Formik, Form, Field, ErrorMessage } from "formik";
import style from "./ContactForm.module.css";
import * as Yup from "yup";

export default function ContactForm({ onAddContact }) {
  const userSchema = Yup.object().shape({
    name: Yup.string()
      .min(9, "too short :(")
      .max(50, "too long :(")
      .required("Required"),
    number: Yup.string()
      .min(3, "too short :( ")
      .max(50, "too long :(")
      .required("Required"),
  });

  const handleSubmit = (values, actions) => {
    const newContact = {
      id: nanoid(),
      name: values.name,
      number: values.number,
    };
    onAddContact(newContact);
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={{
        name: "",
        number: "",
      }}
      onSubmit={handleSubmit}
      validationSchema={userSchema}
    >
      <Form className={style.Tableform}>
        <label className={style.TableFormLabel}>
          Name
          <Field type="text" name="name" className={style.TableFormInput} />
          <ErrorMessage name="name" component="div" className={style.ERror} />
        </label>
        <label className={style.TableFormLabel}>
          Number
          <Field type="tel" name="number" className={style.TableFormInput} />
          <ErrorMessage name="number" component="div" className={style.ERror} />
        </label>
        <button type="submit" className={style.TableFormButton}>
          Add Contact
        </button>
      </Form>
    </Formik>
  );
}
