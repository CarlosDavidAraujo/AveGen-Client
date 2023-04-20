import { Link } from "react-router-dom";
import styled from "styled-components";
import { Sketchy } from "../borders/sketchy";
import { useContext } from "react";
import { ThemeContext } from "../../contexts/themeContext";

export function CasalCard({ casal, link }) {
  const theme = useContext(ThemeContext);

  return (
    <Sketchy
      padding={"10px 20px"}
      colors={theme.colors.secondary}
      options={{
        fillStyle: "solid",
      }}
    >
      <Content to={link}>
        <BirdParentContainer>
          <h5>Macho</h5>
          <Sketchy
            options={{
              stroke: "black",
              fill: "white",
              fillStyle: "solid",
            }}
          >
            <Image />
          </Sketchy>
          <h6>{casal.macho.anilha}</h6>
        </BirdParentContainer>
        <BirdParentContainer>
          <h5>Fêmea</h5>
          <Sketchy
            options={{
              stroke: "black",
              fill: "white",
              fillStyle: "solid",
            }}
          >
            <Image />
          </Sketchy>
          <h6>{casal.femea.anilha}</h6>
        </BirdParentContainer>
      </Content>
    </Sketchy>
  );
}

const Content = styled(Link)`
  display: flex;
  justify-content: center;
  gap: 1em;
  font-size: 1.4rem;
`;

const Image = styled.div`
  width: 4em;
  height: 4em;
`;

const BirdParentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
