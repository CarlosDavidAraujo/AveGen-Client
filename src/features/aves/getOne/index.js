import { Link, useParams } from "react-router-dom";
import { useAxios } from "../../../hooks/useAxios";

import styled from "styled-components";
import { RelatedCouples } from "./components/relatedCouples";
import { BirdInfo } from "./components/birdInfo";
import { NavBar } from "../../../components/navbars/navbar";
import { Sketchy } from "../../../components/borders/sketchy";
import { azulmelo } from "../../../theme/azumelo";
import { verdox } from "../../../theme/verdox";
import { ThemeProvider } from "../../../contexts/themeContext";

export default function Ave() {
  const { id } = useParams();
  const { response, error, isLoading } = useAxios({
    method: "GET",
    url: `/aves/${id}`,
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }
  console.log(response);
  return (
    <Container>
      <Sketchy padding={"2em"}>
        <NavBar>
          <Link>Informações Gerais</Link>
          <Link>Árvore genealógica</Link>
          <Link>Estatísticas</Link>
          <Link>Editar</Link>
        </NavBar>
        <Content>
          <ThemeProvider theme={azulmelo}>
            <BirdInfo ave={response.ave} />
          </ThemeProvider>
          <ThemeProvider theme={verdox}>
            <RelatedCouples casaisRelacionados={response.casaisRelacionados} />
          </ThemeProvider>
        </Content>
      </Sketchy>
      <Sketchy />
    </Container>
  );
}

const Container = styled.div`
  width: min(90%, 1200px);
  margin: 2em auto;
  font-family: "Architects Daughter", cursive;
`;

const Content = styled.div`
  width: 100%;
  display: flex;
  gap: 2em;
  margin-top: 2em;
`;
