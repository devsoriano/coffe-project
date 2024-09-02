import { Link } from "react-router-dom";

export const Login = () => {
  return (
    <>
      <h1 className="text-4xl">Iniciar sesión</h1>
      <p>Para crear un pedido debes iniciar sesión</p>

      <div className="bg-white shadow-md rounded-md mt-10 p-5">
        <form action="">
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

          <input
            type="submit"
            value="Iniciar Sesión"
            className="bg-indigo-600 hover:bg-indigo-800 text-yellow-300 w-full mt-5 p-3 uppercase rounded-lg font-semibold cursor-pointer"
          />
        </form>
      </div>

      <nav className="mt-5">
        <Link to="/auth/registro" className="hover:text-indigo-600">
          ¿No tienes cuenta?, Crea una
        </Link>
      </nav>
    </>
  );
};
