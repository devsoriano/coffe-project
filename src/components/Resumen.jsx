import useQuiosco from "../hooks/useQuisco";
import { Button } from "../ui/Button";
import { Icon } from "../ui/Icon";
import { ResumenProducto } from "./ResumenProducto";
import { formatearDinero } from "../helpers";

export const Resumen = () => {
  const { handleClickOpenResumen, pedido, total } = useQuiosco();

  return (
    <div className="md:w-96 h-screen md:overflow-scroll p-5">
      <div className="flex justify-between items-center">
        <h1 className="text-xl">Mi pedido</h1>
        <Icon method={() => handleClickOpenResumen()} action="close" />
      </div>

      <div className="py-5">
        {pedido.length === 0 ? (
          <p className="text-center text-xl">
            No hay elementos en tu pedido aún
          </p>
        ) : (
          <>
            {pedido.map((producto) => (
              <ResumenProducto producto={producto} key={producto.id} />
            ))}
          </>
        )}
      </div>

      <p className="text-xl mt-6">Total: {formatearDinero(total)}</p>

      <form action="" className="w-full">
        <div className="mt-5">
          <Button
            method={() => {}}
            title="Confirmar pedido"
            typeView="confirmar"
            type="submit"
            wFull
          />
        </div>
      </form>
    </div>
  );
};
