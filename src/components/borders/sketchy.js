import styled from "styled-components";
import { useEffect, useRef } from "react";
import { drawShape } from "../../hooks/drawRect";

const RoughOverlay = ({ options, shape }) => {
  const svgRef = useRef(null);

  useEffect(() => {
    drawShape(shape, svgRef, options);
  }, []);

  return (
    <SVGOverlay
      ref={svgRef}
      preserveAspectRatio="none"
      width="100%"
      height="100%"
    />
  );
};

export const Sketchy = ({
  children,
  padding,
  options,
  shape = "rect",
  colors,
}) => {
  return (
    <Container padding={padding}>
      <RoughOverlay
        options={{
          stroke: colors?.dark,
          strokeWidth: 2,
          fill: colors?.light,
          fillStyled: 'hachure',
          roughness: 2,
          ...options,
        }}
        shape={shape}
      />
      <div style={{ zIndex: 2, position: "relative" }}>{children}</div>
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  padding: ${(props) => props.padding};
`;

const SVGOverlay = styled.svg`
  position: absolute;
  z-index: 1;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;
