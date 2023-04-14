import { Link, useParams } from "react-router-dom";
import { useAxios } from "../../../hooks/useAxios";

export default function Ave() {
  const { id } = useParams();
  const { response, error, isLoading } = useAxios({
    method: 'GET',
    url: `/aves/${id}`
  });

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (error) {
    return <div>Error: {error.message}</div>
  }

  console.log(response);

  return (
    <div>
      <h2>Ave: {response.ave.id}</h2>
      <h3>Espécie: {response.ave.especieId}</h3>
      <h3>Sexo: {response.ave.sexo}</h3>
      <h3>N° da anilha: {response.ave.anilha? response.ave.anilha : 'cadastro de anilha pendente'}</h3>
      <Link>
        Casal de origem: {response.casal_de_origem}</Link>
      <Link>Ninhada de origem: {response.ninhada_de_origem}</Link>
      <div>
        <h2>Casais relacionados:</h2>
        {response.casaisRelacionados.map((casal) =>
          <Link to={`/casal/${casal.id}`}>
            <h4>{casal.id}</h4>
            <h5>Macho: {casal.macho_id}</h5>
            <h5>Fêmea: {casal.femea_id}</h5>
          </Link>
        )}
      </div>
    </div>
  );
}