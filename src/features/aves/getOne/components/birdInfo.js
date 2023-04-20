import styled from "styled-components";
import { CasalCard } from "../../../../components/cards/casal";
import { NinhadaCard } from "../../../../components/cards/ninhada";
import { Sketchy } from "../../../../components/borders/sketchy";
import { useContext } from "react";
import { ThemeContext } from "../../../../contexts/themeContext";

export function BirdInfo({ ave }) {
  const theme = useContext(ThemeContext);

  return (
    <Sketchy padding="40px" shape={"polygon"}  colors={theme.colors.primary}>
      <Sketchy
        padding={"10px 0"}
        colors={theme.colors.secondary}
        options={{
          fillStyle: "solid",
        }}
      >
        <Header>AV1234-5678</Header>
      </Sketchy>
      <Body>
        <span>
          <b>Espécie:</b>
          <FieldValue> {ave.especie.nome}</FieldValue>
        </span>
        <span>
          <b>Sexo:</b>
          <FieldValue> {ave.sexo}</FieldValue>
        </span>
        <span>
          <b>Mutação:</b>
          <FieldValue> Turquesa</FieldValue>
        </span>
        <span>
          <b>Data de nascimento:</b>
          <FieldValue> 11/03/2022</FieldValue>
        </span>
        <span>
          <b>Idade:</b>
          <FieldValue> 1 ano</FieldValue>
        </span>
        <span>
          <b>Ninhada de origem:</b>
        </span>
        <NinhadaCard
          ninhada={ave.ninhada}
          link={`/ninhadas/${ave.ninhada.id}`}
        />
        <span>
          <b>Pais:</b>
        </span>
        <CasalCard
          casal={ave.casai}
          link={`/casais/${ave.casai.id}`}
        />
      </Body>
    </Sketchy>
  );
}

const Header = styled.div`
  display: flex;
  justify-content: center;
  font-weight: bold;
`;

const Body = styled.div`
  font-size: 1.2rem;
  display: flex;
  flex-direction: column;
  gap: 0.2em;
`;

const FieldValue = styled.span`
  color: #a8201a;
`;
