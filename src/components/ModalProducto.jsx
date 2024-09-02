import { useState, useEffect } from "react";
import { formatearDinero } from "../helpers";
import useQuiosco from "../hooks/useQuisco";
import { Icon } from "../ui/Icon";
import { Button } from "../ui/Button";

export const ModalProducto = () => {
  const { producto, handleClickModal, handleAgregarPedido, pedido } =
    useQuiosco();
  const [cantidad, setCantidad] = useState(1);
  const [edicion, setEdicion] = useState(false);

  const [isMobileOrTablet, setIsMobileOrTablet] = useState(
    window.innerWidth <= 768
  );

  const handleResize = () => {
    setIsMobileOrTablet(window.innerWidth <= 768);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (pedido.some((pedidoState) => pedidoState.id === producto.id)) {
      const productoEdicion = pedido.filter(
        (pedidoState) => pedidoState.id === producto.id
      )[0];

      setCantidad(productoEdicion.cantidad);
      setEdicion(true);
    }
  }, [pedido]);

  return (
    <div
      className={`md:flex gap-10 relative ${
        isMobileOrTablet ? "flex-col" : ""
      }`}
    >
      {isMobileOrTablet && (
        <div className="flex justify-end">
          <Icon method={handleClickModal} action="close" />
        </div>
      )}

      <div className="md:w-1/3 flex justify-center items-center">
        <img
          src={`/img/${producto.imagen}.jpg`}
          alt={`Imagen producto ${producto.nombre}`}
          className="w-full h-80 object-cover mt-4 rounded-lg"
        />
      </div>

      <div className="md:w-2/3">
        {!isMobileOrTablet && (
          <div className="flex justify-end">
            <Icon method={handleClickModal} action="close" />
          </div>
        )}

        <h1 className="text-xl font-bold my-3">{producto.nombre}</h1>

        <p className="inline-block bg-[#312c1d] text-[#ffc404] text-2xl text-center font-bold py-2 px-8 m-0 rounded-md w-full md:w-auto">
          {formatearDinero(producto.precio)}
        </p>

        <div className="flex gap-4 my-5 w-full md:justify-start justify-center">
          <Icon
            method={() => cantidad > 1 && setCantidad(cantidad - 1)}
            action="minus"
          />
          <p className="text-3xl">{cantidad}</p>
          <Icon
            method={() => cantidad < 10 && setCantidad(cantidad + 1)}
            action="plus"
          />
        </div>

        <Button
          method={() => {
            handleAgregarPedido({ ...producto, cantidad });
            handleClickModal();
          }}
          title={edicion ? "Guardar cambios" : "Añadir al pedido"}
          typeView="normal"
          type="confirmar"
        />
      </div>
    </div>
  );
};
