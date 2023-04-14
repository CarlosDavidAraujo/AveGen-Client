import { format } from "date-fns";
import locale from "date-fns/locale/pt-BR";
import { Link } from "react-router-dom";
import styled from "styled-components";

export function NinhadaCard({ ninhada, link }) {
  const dataFormatada = format(new Date(ninhada.createdAt), "MMM/yyyy", {
    locale,
  });
  return (
    <Container to={link}>
      <h6>{dataFormatada}</h6>
    </Container>
  );
}

const Container = styled(Link)`
  width: 8em;
  aspect-ratio: 5;
  background-color: #add8e6;
  border-radius: 0.2em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
