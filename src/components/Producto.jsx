/* eslint-disable react/prop-types */

import { formatearDinero } from "../helpers";
import useQuiosco from "../hooks/useQuisco";
import { Button } from "../ui/Button";

export const Producto = ({ producto }) => {
  const { handleClickModal, handleSetProducto } = useQuiosco();
  const { nombre, imagen, precio } = producto;

  return (
    <div className="rounded-lg shadow bg-[#1d1a16] flex flex-col overflow-hidden">
      <article className="h-full flex flex-col justify-between">
        <img
          src={`/img/${imagen}.jpg`}
          alt={`imagen ${nombre}`}
          className="w-full h-80 object-cover"
        />
        <div className="mx-2 text-center">
          <h1 className="text-xl font-bold my-4">{nombre}</h1>
          <p className="inline-block bg-[#312c1d] text-[#ffc404] text-xl font-bold py-2 px-8 m-0 rounded-md w-full md:w-auto">
            {formatearDinero(precio)}
          </p>
          <p className="my-5">
            <Button
              method={() => {
                handleClickModal();
                handleSetProducto(producto);
              }}
              title="Agregar"
              typeView="normal"
              type="button"
            />
          </p>
        </div>
      </article>
    </div>
  );
};
