import { Producto } from "../components/Producto";
import { productos as data } from "../data/productos";
import useQuiosco from "../hooks/useQuisco";
import { Button } from "../ui/Button";

export const Inicio = () => {
  const { categoriaActual, handleClickOpenResumen } = useQuiosco();

  const productos = data.filter(
    (producto) => producto.categoria_id === categoriaActual.id
  );

  return (
    <>
      <div className="w-full flex flex-col md:flex-row justify-between items-start mb-6">
        <div>
          <h1 className="text-xl">
            Nuestro menú de <b>{categoriaActual.nombre}</b>
          </h1>
          <p className="text-lg my-2">
            Elige y personaliza tu pedido a continuación
          </p>
        </div>
        <Button
          method={() => handleClickOpenResumen()}
          title="Resumen"
          typeView="resumen"
          type="button"
        />
      </div>

      <div className="grid gap-5 sm:grid-cols-2  lg:grid-cols-3  2xl:grid-cols-4">
        {productos.map((producto) => (
          <Producto producto={producto} key={producto.id} />
        ))}
      </div>
    </>
  );
};
