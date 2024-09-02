/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { formatearDinero } from "../helpers";
import { Icon } from "../ui/Icon";
import useQuiosco from "../hooks/useQuisco";

export const ResumenProducto = ({ producto }) => {
  const { handleAgregarPedido, handleEliminarProductoPedido } = useQuiosco();
  const { id, nombre, precio, cantidad: cantidadProducto } = producto;
  const [cantidad, setCantidad] = useState(cantidadProducto);

  useEffect(() => {
    setCantidad(cantidadProducto);
  }, [cantidadProducto]);

  useEffect(() => {
    handleAgregarPedido({ ...producto, cantidad });
  }, [cantidad]);

  const incrementarCantidad = () => {
    if (cantidad < 10) {
      setCantidad(cantidad + 1);
    }
  };

  const disminuirCantidad = () => {
    if (cantidad > 1) {
      setCantidad(cantidad - 1);
    }
  };

  return (
    <div className="shadow space-y-1 p-4 border border-[#ffc404] my-4 rounded-lg">
      <div className="flex justify-end gap-2">
        <div
          type="button"
          className="hover:text-red-700 rounded-md font-bold uppercase shadow-md text-center"
        >
          <Icon
            action="trash"
            method={() => handleEliminarProductoPedido(id)}
          />
        </div>
      </div>
      <div className="space-y-2">
        <p className="text-xl font-bold">{nombre}</p>
        <div className="flex gap-4 my-5 w-full justify-start ">
          <Icon method={disminuirCantidad} action="minus" />
          <p className="text-3xl">{cantidad}</p>
          <Icon method={incrementarCantidad} action="plus" />
        </div>
        <p className="text-lg text-[#ffc404]">
          Precio: {formatearDinero(precio)}
        </p>
        <p className="text-lg">
          Subtotal: <b>{formatearDinero(precio * cantidad)}</b>
        </p>
      </div>
    </div>
  );
};
