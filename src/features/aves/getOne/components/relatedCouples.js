import styled from "styled-components";
import { CasalCard } from "../../../../components/cards/casal";
import { Sketchy } from "../../../../components/borders/sketchy";
import { useContext } from "react";
import { ThemeContext } from "../../../../contexts/themeContext";

export function RelatedCouples({ casaisRelacionados }) {
  const theme = useContext(ThemeContext);
  return (
    <Sketchy padding="40px" shape="polygon" colors={theme.colors.primary}>
      <Sketchy
        padding={"10px 0"}
        colors={theme.colors.secondary}
        options={{
          fillStyle: "solid",
        }}
      >
        <Header>Casais relacionados</Header>
      </Sketchy>
      <Content>
        {casaisRelacionados.map((casal) => (
          <>
            <CasalCard casal={casal} link={`/casais/${casal.id}`} />
            <CasalCard casal={casal} link={`/casais/${casal.id}`} />
            <CasalCard casal={casal} link={`/casais/${casal.id}`} />
            <CasalCard casal={casal} link={`/casais/${casal.id}`} />
          </>
        ))}
      </Content>
    </Sketchy>
  );
}

const Header = styled.div`
  display: flex;
  justify-content: center;
  font-weight: bold;
  text-transform: uppercase;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  gap: 20px;
  overflow: scroll;
  max-height: 50vh;
`;
