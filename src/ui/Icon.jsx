/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { CloseIcon, MinusIcon, PlusIcon, TrashIcon } from "../utils/Icons";

export const Icon = ({ action, method }) => {
  const [iconSelected, setIconSelected] = useState(<div />);
  useEffect(() => {
    switch (action) {
      case "close":
        setIconSelected(CloseIcon);
        break;
      case "minus":
        setIconSelected(MinusIcon);
        break;
      case "plus":
        setIconSelected(PlusIcon);
        break;
      case "trash":
        setIconSelected(TrashIcon);
        break;
      default:
        break;
    }
  }, [action]);

  return (
    <button type="button" onClick={method}>
      {iconSelected}
    </button>
  );
};
