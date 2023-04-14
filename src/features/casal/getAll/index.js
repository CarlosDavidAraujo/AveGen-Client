import styled from "styled-components";
import { CasalCard } from "../../../components/cards/casal";
import { useAxios } from "../../../hooks/useAxios";

export function Casais() {
  const { response: casais, isLoading, error } = useAxios({ url: "/casais" });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <Container>
      <Wrap>
        {casais.map((casal) => (
          <CasalCard casal={casal} link={`/casais/${casal.id}`} />
        ))}
      </Wrap>
    </Container>
  );
}

const Container = styled.div`
  padding: 2em;
  border: 2px solid black;
`;

const Wrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1em;
  border: 2px solid blue;
`;
