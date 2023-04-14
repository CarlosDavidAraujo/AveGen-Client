import { Link, useParams } from "react-router-dom";
import { useAxios } from "../../../hooks/useAxios";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as yup from "yup";
import api from "../../../API/api";
import { useState } from "react";

export function Ninhada() {
  const { id } = useParams();
  const [isFormDisabled, setIsFormDisabled] = useState(true);
  const [message, setMessage] = useState('');
  const { response, isLoading, error } = useAxios({
    url: `/ninhadas/${id}`,
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <h2>Ninhada: {response.id}</h2>
      <Link to={`/casal/${response.casal_de_origem}`}>
        Casal associado: {response.casal_de_origem}
      </Link>
      <button onClick={() => setIsFormDisabled(false)}>Editar ninhada</button>
      {message && <span>{message}</span>}
      <Formik
        initialValues={{
          id: id,
          estagio: response.estagio,
          ovos_total: response.ovos_total,
          ovos_vazios: response.ovos_vazios,
          data_postura: response.data_postura,
          data_eclosao: response.data_eclosao,
        }}
        validationSchema={yup.object({
          estagio: yup.string().required("Campo obrigatório"),
          ovos_total: yup
            .number()
            .typeError("Por favor, insira um número")
            .notRequired(),
          ovos_vazios: yup
            .number()
            .typeError("Por favor, insira um número")
            .notRequired(),
          data_postura: yup.date().notRequired(),
          data_eclosao: yup.date().notRequired(),
        })}
        onSubmit={async (values) => {
          const {data} = await api.put("/ninhadas/atualiza", values);
          setMessage(data.message);
          setIsFormDisabled(true);
        }}
      >
        <Form>
          <div>
            <label htmlFor="estagio">Estágio:*</label>
            <Field name="estagio" as="select" disabled={isFormDisabled}>
              <option value="postura">Postura</option>
              <option value="choco">Choco</option>
              <option value="tratamento">Tratamento</option>
              <option value="encerrada">Encerrada</option>
            </Field>
          </div>
          <div>
            <label htmlFor="ovos_total">Total de ovos:</label>
            <Field type="text" name="ovos_total" disabled={isFormDisabled}/>
            <ErrorMessage name="ovos_total" />
          </div>
          <div>
            <label htmlFor="ovos_vazios">Ovos vazios:</label>
            <Field type="text" name="ovos_vazios" disabled={isFormDisabled}/>
            <ErrorMessage name="ovos_vazios" />
          </div>
          <div>
            <label htmlFor="data_postura">Início da postura:</label>
            <Field type="date" name="data_postura" disabled={isFormDisabled}/>
          </div>
          <div>
            <label htmlFor="data_eclosao">Início da eclosão:</label>
            <Field type="date" name="data_eclosao" disabled={isFormDisabled}/>
          </div>
          <input type="submit" disabled={isFormDisabled}/>
        </Form>
      </Formik>
    </div>
  );
}
