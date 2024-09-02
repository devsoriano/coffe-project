/* eslint-disable react/prop-types */

import { useEffect, useState } from "react";

const styles = {
  normal: {
    colorButton: "#ffc404",
    colorButtonHover: "#ffab04",
    colorText: "#1f1a09",
    colorBorder: "#ffc404",
  },
  resumen: {
    colorButton: "#4a3f2b",
    colorButtonHover: "#3b3124",
    colorText: "#ffffff",
    colorBorder: "#ffc404",
  },
  cancelar: {
    colorButton: "#e63946",
    colorButtonHover: "#d62839",
    colorText: "#ffffff",
    colorBorder: "#FF7043",
  },
  confirmar: {
    colorButton: "#4CAF50",
    colorButtonHover: "#388E3C",
    colorText: "#ffffff",
    colorBorder: "#4CAF50",
  },
};

export const Button = ({ method, title, typeView, type, wFull = false }) => {
  const [style, setStyle] = useState({});

  useEffect(() => {
    if (styles[typeView]) {
      setStyle(styles[typeView]);
    }
  }, [typeView]);

  return (
    <button
      type={type}
      className={`font-semibold cursor-pointer border py-2 px-6 rounded-md w-full ${
        !wFull && "md:w-auto"
      } `}
      style={{
        backgroundColor: style.colorButton,
        color: style.colorText,
        borderColor: style.colorBorder,
      }}
      onMouseEnter={(e) => {
        e.target.style.backgroundColor = style.colorButtonHover;
      }}
      onMouseLeave={(e) => {
        e.target.style.backgroundColor = style.colorButton;
      }}
      onClick={method}
    >
      {title}
    </button>
  );
};
