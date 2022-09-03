import { createContext, useState } from "react";

export const Context = createContext();

export const Datos = ({ children }) => {
  const [elinput, setInput] = useState("");
  const [all, setAll] = useState([]);
  const [data, setData] = useState([]);
  const [select, setSelect] = useState([]);
  const [click, setClick] = useState([]);

  return (
    <Context.Provider
      value={{
        elinput,
        setInput,
        all,
        setAll,
        data,
        setData,
        select,
        setSelect,
        click,
        setClick,
      }}
    >
      {children}
    </Context.Provider>
  );
};
