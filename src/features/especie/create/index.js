import { ErrorMessage, Field, Form, Formik } from "formik";
import { useState } from "react";
import * as yup from 'yup';
import api from "../../../API/api";

export function Especie() {
  const [response, setResponse] = useState();
  
  async function handleSubmit(values) {
    const {data} = await api.post('/especies/cadastro', values);
    setResponse(data);
  }

  return (
    <>
    <Formik
      initialValues={{ nome: '' }}
      validationSchema={yup.object({
        nome: yup.string().max(50, 'Máximo de 50 caracteres').required('Campo obrigatório')
      })}
      onSubmit={(values)=> handleSubmit(values)}
    >
      <Form>
        <div>
          <label htmlFor="nome">Nome:</label>
          <Field type="text" name="nome" />
          <ErrorMessage name="nome" />
          <input type="submit" />
        </div>
      </Form>
    </Formik>
    {response && <span>{response.message}</span>}
    </> 
  );
}