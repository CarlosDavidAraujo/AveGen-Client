import { ErrorMessage, Field, Form, Formik } from "formik";
import { useState } from "react";
import * as yup from 'yup';
import api from "../../../API/api";
import { useAxios } from "../../../hooks/useAxios";

export function CasalForm() {
  const [response, setResponse] = useState();
  const { response: res, isLoading, error } = useAxios({
    method: 'get',
    url: '/aves'
  });

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (error) {
    return <div>Error: {error.message}</div>
  }

  const machos = res.filter((ave) => ave.sexo === 'macho');
  const femeas = res.filter((ave) => ave.sexo === 'fêmea');

  async function handleSubmit(values) {
    const { data } = await api.post('/casais/cadastro', values);
    setResponse(data);
    console.log(data);
  }

  return (
    <Formik
      initialValues={{ macho_id: '', femea_id: '' }}
      validationSchema={yup.object({
        macho_id: yup.number().required('Campo obrigatório!'),
        femea_id: yup.number().required('Campo obrigatório!')
      })}
      onSubmit={(values) => handleSubmit(values)}
    >
      <Form>
        <div>
          <label htmlFor="macho_id">Macho:</label>
          <Field name="macho_id" as="select">
            <option value="">Selecione</option>
            {machos.map((ave) => <option value={ave.id}>Ave {ave.id}</option>)}
          </Field>
          <ErrorMessage name="macho_id" />
        </div>
        <div>
          <label htmlFor="femea_id">Fêmea:</label>
          <Field name="femea_id" as="select">
            <option value="">Selecione</option>
            {femeas.map((ave) => <option value={ave.id}>Ave {ave.id}</option>)}
          </Field>
          <ErrorMessage name="femea_id" />
        </div>
        <input type="submit" />
        {response && <div>
          {response.message}
        </div>}
      </Form>
    </Formik>
  );
}