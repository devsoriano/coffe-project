import { Outlet } from "react-router-dom";
import Modal from "react-modal";
import { ToastContainer } from "react-toastify";
import { Sidebar } from "../components/Sidebar";
import { Resumen } from "../components/Resumen";
import useQuiosco from "../hooks/useQuisco";
import { ModalProducto } from "../components/ModalProducto";

import "react-toastify/dist/ReactToastify.css";

const customStyles = {
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(44, 35, 6, 0.7)",
    backdropFilter: "blur(10px)",
    zIndex: 10,
  },
  content: {
    position: "absolute",
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    transform: "translate(-50%, -50%)",
    background: "#29251c", // Color de fondo ajustado
    borderRadius: "8px",
    padding: "20px",
    zIndex: 20,
    width: "90%", // Ancho por defecto
    maxWidth: "800px", // Ancho máximo
    borderColor: "#ffc404",
    maxHeight: "calc(100% - 40px)", // Altura máxima con margen
    marginTop: "20px", // Margen superior
    marginBottom: "20px", // Margen inferior
    overflow: "hidden", // Ocultar el scroll
  },
};

// Aplicar estilos adicionales para dispositivos móviles y tabletas
const customStylesMobile = {
  ...customStyles,
  content: {
    ...customStyles.content,
    width: "80%", // Ancho en dispositivos móviles y tabletas
    maxHeight: "calc(100% - 20px)", // Ajustar altura máxima con margen más pequeño
    marginTop: "10px", // Margen superior para móviles
    marginBottom: "10px", // Margen inferior para móviles
  },
};

Modal.setAppElement("#root");

export const Layout = () => {
  const { modal, isOpenResumen } = useQuiosco();
  const isMobileOrTablet = window.innerWidth <= 768;

  return (
    <>
      <div className="relative md:flex">
        <Sidebar />

        <main className={`flex-1 md:h-screen md:overflow-y-scroll p-5`}>
          <Outlet />
        </main>

        {isOpenResumen && (
          <div className="fixed inset-0 bg-[rgba(44,35,6,0.7)] backdrop-blur-md z-10" />
        )}

        <aside
          className={`${
            isOpenResumen ? "flex" : "hidden"
          } flex-col fixed sm:top-0 top-10 sm:bottom-0 bottom-10 sm:right-0 right-5 sm:left-auto left-5 w-auto sm:w-96 h-auto sm:h-full border border-[#ffc404] rounded-lg bg-[#29251c] z-20 overflow-y-auto`}
        >
          <Resumen />
        </aside>
      </div>

      <Modal
        isOpen={modal}
        style={isMobileOrTablet ? customStylesMobile : customStyles}
      >
        <ModalProducto />
      </Modal>

      <ToastContainer />
    </>
  );
};
