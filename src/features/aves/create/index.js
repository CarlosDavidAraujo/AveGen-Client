import { ErrorMessage, Field, Form, Formik } from "formik";
import * as yup from 'yup';
import { useState } from "react";
import api from "../../../API/api";
import { useAxios } from "../../../hooks/useAxios";

export function AveForm() {
  const [response, setResponse] = useState();
  const {response: especies, isLoading, error} = useAxios({url: '/especies'});

  async function handleSubmit(values) {
    const { data } = await api.post('/aves/cadastro', values);
    setResponse(data);
  }

  return (
    <>
      <Formik
        initialValues={{ anilha: '', sexo: '', especieID: ''}}
        validationSchema={yup.object({
          anilha: yup.string()
            .max(50, 'Deve ter no máximo 50 caracteres'),
          sexo: yup.string().required('Campo obrigatório'),
          especieId: yup.number().required('Campo obrigatório')
        })}
        onSubmit={(values) => handleSubmit(values)}
      >
        <Form>
          <div>
            <label htmlFor="anilha">anilha:</label>
            <Field name="anilha" type="text" />
            <ErrorMessage name="anilha" />
          </div>
          <div>
            <label htmlFor="sexo">Sexo: </label>
            <Field name="sexo" as="select">
              <option value="">Selecione</option>
              <option value="macho">Macho</option>
              <option value="fêmea">Fêmea</option>
            </Field>
            <ErrorMessage name="sexo" />
          </div>
          <div>
            <label htmlFor="especieId">Espécie: </label>
            <Field name="especieId" as="select">
              <option value="">Selecione</option>
              {especies && especies.map((especie) => 
                <option value={especie.id}>{especie.nome}</option>
              )}
            </Field>
            <ErrorMessage name="especieId" />
          </div>
          <button type="submit">Enviar</button>
        </Form>
      </Formik>
      {response && <h3>Ave: {response.id} criada com sucesso!</h3>}
    </>
  );
}