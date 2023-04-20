import styled from "styled-components";
import { Sketchy } from "../borders/sketchy";

export function NavBar({ children }) {
  return (
    <Sketchy
      padding={'15px'}
      options={
        {stroke: '#10739E', fill: '#B1DDF0',
        fillStyle: 'solid'}
      }
    >
      <NavContent>{children}</NavContent>
    </Sketchy>
  );
}

const NavContent = styled.div`
  display: flex;
  justify-content: space-evenly;
`;
