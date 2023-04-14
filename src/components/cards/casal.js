import { Link } from "react-router-dom";
import styled from "styled-components";

export function CasalCard({ casal, link }) {
  return (
    <Container to={link}>
      <Square color="#7FB685">
        <h5>Macho</h5>
        <h6>{casal.macho.anilha}</h6>
      </Square>
      <Square color="#FFC0CB ">
        <h5>Fêmea</h5>
        <h6>{casal.femea.anilha}</h6>
      </Square>
    </Container>
  );
}

const Container = styled(Link)`
  width: max-content;
  display: flex;
  gap: 0.5em;
  padding: 0.5em;
  border-radius: 0.2em;
  align-items: center;
  justify-content: center;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
`;

const Square = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 5em;
  aspect-ratio: 2/1;
  border-radius: 0.2em;
  background-color: ${(props) => props.color};
`;
