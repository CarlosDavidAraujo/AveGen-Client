import { Link, useParams } from "react-router-dom";
import { useAxios } from "../../../hooks/useAxios";
import api from "../../../API/api";
import { useEffect, useState } from "react";
import { CasalCard } from "../../../components/cards/casal";
import { NinhadaCard } from "../../../components/cards/ninhada";
import styled from "styled-components";

export function Casal() {
  const { id } = useParams();
  const {
    response: casal,
    isLoading,
    error,
  } = useAxios({
    method: "GET",
    url: `/casais/${id}`,
  });

  const [ninhadas, setNinhadas] = useState([]);
  useEffect(() => {
    if (casal) {
      setNinhadas(casal.ninhadas);
    }
  }, [casal]);

  async function handleAddNinhada() {
    const { data } = await api.post("/ninhadas/cadastro", {
      id,
      estagio: "postura",
    });
    setNinhadas((prevNinhadas) => [...prevNinhadas, data]);
  }

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <h2>Casal:</h2>
      <CasalCard casal={casal} />
      <h2>Ninhadas do casal:</h2>
      <NinhadasList>
        {ninhadas.map((ninhada) => (
          <NinhadaCard ninhada={ninhada} link={`/ninhadas/${ninhada.id}`} />
        ))}
      </NinhadasList>
      <button onClick={handleAddNinhada}>Adicionar ninhada</button>
    </div>
  );
}

const NinhadasList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.2em;
`;
