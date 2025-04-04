import React, { useState } from "react";

// Componente Card para mostrar cada infracción
const Card = ({ infraccion }) => {
  const [expanded, setExpanded] = useState(false);

  // Color basado en la clase de infracción
  const getClassColor = (clase) => {
    const colors = {
      A: "bg-blue-100 border-blue-300",
      B: "bg-yellow-100 border-yellow-300",
      C: "bg-orange-100 border-orange-300",
      D: "bg-red-100 border-red-300",
      E: "bg-purple-100 border-purple-300",
    };
    return colors[clase] || "bg-gray-100 border-gray-300";
  };

  return (
    <div
      className={`rounded-lg p-4 mb-4 border-2 ${getClassColor(
        infraccion.clase
      )} transition-all card-hover-effect`}
    >
      <div
        className="flex justify-between items-center cursor-pointer"
        onClick={() => setExpanded(!expanded)}
      >
        <h3 className="font-bold text-lg">
          Artículo {infraccion.articulo}, Fracción {infraccion.fraccion}
        </h3>
        <span className="inline-flex items-center rounded-full bg-gray-800 px-2 py-1 text-xs font-medium text-white">
          Clase {infraccion.clase}
        </span>
      </div>

      <p className="text-gray-700 mt-2">{infraccion.descripcion}</p>

      {expanded && (
        <div className="mt-4 pt-3 border-t border-gray-200">
          <p className="text-sm font-semibold">
            Tipo: <span className="font-normal">{infraccion.tipo}</span>
          </p>
          <p className="text-sm font-semibold mt-2">
            Sanción: <span className="font-normal">{infraccion.sancion}</span>
          </p>

          {infraccion.conciliable && (
            <div className="mt-2 text-sm bg-green-50 p-2 rounded">
              <p className="font-semibold">
                Conciliable:{" "}
                <span className="font-normal">
                  {infraccion.notasConciliacion}
                </span>
              </p>
            </div>
          )}

          {infraccion.nota && (
            <p className="mt-2 text-sm italic">{infraccion.nota}</p>
          )}
        </div>
      )}
    </div>
  );
};

export default Card;
