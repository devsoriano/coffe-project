import { Categoria } from "./Categoria";
import useQuiosco from "../hooks/useQuisco";
import { Button } from "../ui/Button";

export const Sidebar = () => {
  const { categorias } = useQuiosco();

  return (
    <div className="md:w-56">
      <div className="p-4">
        <img className="w-32" src="img/logo.svg" alt="logo" />
      </div>

      <div className="mt-8 px-5 md:px-2">
        {categorias.map((categoria) => (
          <Categoria categoria={categoria} key={categoria.id} />
        ))}
      </div>

      <div className="my-5 px-5">
        <Button
          method={() => {}}
          title="Cancelar orden"
          typeView="cancelar"
          type="button"
        />
      </div>
    </div>
  );
};
