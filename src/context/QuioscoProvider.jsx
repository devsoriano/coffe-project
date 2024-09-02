/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { createContext, useState, useEffect } from "react";
import { toast } from "react-toastify";
import { categorias } from "../data/categorias";

const QuioscoContext = createContext();

const QuioscoProvider = ({ children }) => {
  const [categoriaActual, setcategoriaActual] = useState(categorias[0]);
  const [modal, setModal] = useState(false);
  const [producto, setProducto] = useState({});
  const [isOpenResumen, setIsOpenResumen] = useState(false);
  const [pedido, setPedido] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const nuevoTotal = pedido.reduce(
      (total, producto) => producto.precio * producto.cantidad + total,
      0
    );
    setTotal(nuevoTotal);
  }, [pedido]);

  const handleClickCategoria = (id) => setcategoriaActual(categorias[id - 1]);

  const handleClickModal = () => setModal(!modal);

  const handleSetProducto = (producto) => setProducto(producto);

  const handleClickOpenResumen = () => setIsOpenResumen(!isOpenResumen);

  const handleAgregarPedido = ({ categoria_id, imagen, ...producto }) => {
    if (pedido.some((pedidoState) => pedidoState.id === producto.id)) {
      const pedidoActualizado = pedido.map((pedidoState) =>
        pedidoState.id === producto.id ? producto : pedidoState
      );
      setPedido(pedidoActualizado);
    } else {
      setPedido([...pedido, producto]);
      toast.success("Agregado al pedido");
    }
  };

  const handleEliminarProductoPedido = (id) => {
    const pedidoActualizado = pedido.filter((producto) => producto.id !== id);
    setPedido(pedidoActualizado);
    toast.success("Eliminado del pedido");
  };

  return (
    <QuioscoContext.Provider
      value={{
        categorias,
        categoriaActual,
        setcategoriaActual,
        handleClickCategoria,
        modal,
        handleClickModal,
        producto,
        handleSetProducto,
        isOpenResumen,
        handleClickOpenResumen,
        pedido,
        handleAgregarPedido,
        setPedido,
        handleEliminarProductoPedido,
        total,
      }}
    >
      {children}
    </QuioscoContext.Provider>
  );
};

export { QuioscoProvider };

export default QuioscoContext;
