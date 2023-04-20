import { format } from "date-fns";
import locale from "date-fns/locale/pt-BR";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Sketchy } from "../borders/sketchy";
import { useContext } from "react";
import { ThemeContext } from "../../contexts/themeContext";

export function NinhadaCard({ ninhada, link }) {
  const theme = useContext(ThemeContext);
  const dataFormatada = format(new Date(ninhada.createdAt), "MMM/yyyy", {
    locale,
  });
  return (
    <Sketchy
    padding={'10px 0'}
    colors={theme.colors.secondary}
    options={{
      fillStyle: 'solid'
    }}
    >
      <Content>
        <Link to={link}>
          <h6>{dataFormatada}</h6>
        </Link>
      </Content>
    </Sketchy>
  );
}
const Content = styled.div`
  display: flex;
  justify-content: center;
  font-size: 1.4rem;
  text-transform: uppercase;
`;
