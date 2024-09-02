/* eslint-disable react/prop-types */

import useQuiosco from "../hooks/useQuisco";

export const Categoria = ({ categoria }) => {
  const { handleClickCategoria, categoriaActual } = useQuiosco();
  const { icono, id, nombre } = categoria;

  return (
    <button
      className={`${
        categoriaActual.id === id && "bg-[#ffc404] text-[#1d1a16]"
      } flex items-center gap-2 border border-[#ffc404] w-full p-4 hover:bg-[#ffc404] hover:text-[#1d1a16] cursor-pointer`}
      onClick={() => handleClickCategoria(id)}
      type="button"
    >
      <img src={`/img/icono_${icono}.svg`} alt="Imagen Icono" className="w-6" />
      <label className="text-lg font-semibold cursor-pointer truncate">
        {nombre}
      </label>
    </button>
  );
};
