import { useEffect } from "react";
import rough from "roughjs/bundled/rough.esm.js";

const shapes = {
  'rect': (svgRef, options) => drawRect(svgRef, options),
  'polygon': (svgRef, options) => drawPolygon(svgRef, options),
};
export function drawShape(shape, svgRef, options) {
  return shapes[shape](svgRef, options);
}

export function drawRect(svgRef, options) {
  if (!svgRef.current) return;
  const roughSvg = rough.svg(svgRef.current);
  const svgParent = svgRef.current.parentNode;
  const { width, height } = svgParent.getBoundingClientRect();
  svgRef.current.setAttribute("viewBox", `0 0 ${width} ${height}`);
  const rectangle = roughSvg.rectangle(0, 0, width, height, options);
  svgRef.current.appendChild(rectangle);
}

export function drawPolygon(svgRef, options) {
  if (!svgRef.current) return;

  const roughSvg = rough.svg(svgRef.current);
  const svgParent = svgRef.current.parentNode;
  const { width, height } = svgParent.getBoundingClientRect();

  svgRef.current.setAttribute("viewBox", `0 0 ${width} ${height}`);
  const polygon = roughSvg.polygon(
    [
      [30, 0], // ponto superior esquerdo
      [width, 0], // ponto superior direito
      [width, height], // ponto inferior direito
      [0, height], // ponto inferior esquerdo
      [0, 30], // ponto superior esquerdo cortado
    ],
    options
  );
  svgRef.current.appendChild(polygon);
}
