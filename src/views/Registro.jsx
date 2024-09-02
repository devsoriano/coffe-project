import { Link } from "react-router-dom";

export const Registro = () => {
  return (
    <>
      <h1 className="text-4xl">Crea tu cuenta</h1>
      <p>Crea tu cuenta llenando el formulario</p>

      <div className="bg-white shadow-md rounded-md mt-10 p-5">
        <form action="">
          <div className="mb-4">
            <label className="text-slate-800" htmlFor="name">
              Nombre:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Tu nombre"
              className="mt-2 w-full p-3 bg-gray-50 border border-yellow-600 rounded-lg"
            />
          </div>

          <div className="mb-4">
            <label className="text-slate-800" htmlFor="email">
              Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Tu email"
              className="mt-2 w-full p-3 bg-gray-50 border border-yellow-600 rounded-lg"
            />
          </div>

          <div className="mb-4">
            <label className="text-slate-800" htmlFor="password">
              Password:
            </label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Tu password"
              className="mt-2 w-full p-3 bg-gray-50 border border-yellow-600 rounded-lg"
            />
          </div>

          <div className="mb-4">
            <label className="text-slate-800" htmlFor="password_confirm">
              Repetir password:
            </label>
            <input
              type="password"
              id="password_confirm"
              name="password_confirm"
              placeholder="Repite tu password"
              className="mt-2 w-full p-3 bg-gray-50 border border-yellow-600 rounded-lg"
            />
          </div>

          <input
            type="submit"
            value="Crear cuenta"
            className="bg-indigo-600 hover:bg-indigo-800 text-yellow-300 w-full mt-5 p-3 uppercase rounded-lg font-semibold cursor-pointer"
          />
        </form>
      </div>

      <nav className="mt-5">
        <Link to="/auth/login" className="hover:text-indigo-600">
          ¿Ya tienes cuenta?, Inicia sesión
        </Link>
      </nav>
    </>
  );
};
